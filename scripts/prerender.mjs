// Writes one real HTML file per route after `vite build`, so the content is in the
// first response for search engines, AI crawlers and slow connections. The page
// then hydrates in the browser. Runs on plain Node: no browser is needed, so it
// works on Cloudflare's build machine.
//
// Per page, the head is assembled from three places and never duplicated:
//   1. the template (dist/index.html): charset, icons, manifest, fonts, static tags
//   2. the page component's <Helmet>: title, description, canonical-related og tags
//   3. src/seo.ts: share image, og:type, twitter tags and structured data
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, routes, seo } = await import(pathToFileURL(path.resolve('dist-server/entry-server.js')).href)
const SITE = 'https://michaelesema.com'

if (!template.includes('<div id="root"></div>')) throw new Error('prerender: root element not found in dist/index.html')

const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const json = o => JSON.stringify(o).replace(/</g, '\\u003c')

function page(url, canonical) {
  const html = render(url)
  // React 19 puts the page's <title>, <meta> and preload <link> tags first in the
  // output; lift them into <head>.
  const lead = html.match(/^((?:<title>[\s\S]*?<\/title>|<meta [^>]*>|<link [^>]*>)+)/)
  const headTags = lead ? lead[1] : ''
  const body = lead ? html.slice(lead[1].length) : html
  const title = (headTags.match(/<title>([\s\S]*?)<\/title>/) || [])[1]
  if (!title) throw new Error(`prerender: no title for ${url}`)
  const description = (headTags.match(/<meta name="description" content="([^"]*)"/) || [])[1]
  const s = seo(url)

  // Strip everything the page now supplies, so the template never leaks home-page values.
  let out = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta name="description"[^>]*>\s*/, '')
    .replace(/<meta property="og:(title|description|url|type|image|image:alt)"[^>]*>\s*/g, '')
    .replace(/<meta property="profile:[a-z_]+"[^>]*>\s*/g, '')
    .replace(/<meta name="twitter:(title|description|image|image:alt)"[^>]*>\s*/g, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '')
    .replace(/<link rel="canonical"[^>]*>\s*/, '')
  if (headTags.includes('name="robots"')) out = out.replace(/<meta name="robots"[^>]*>\s*/, '')

  const extra = [
    `<meta property="og:type" content="${s.type}"/>`,
    `<meta property="og:image" content="${s.image}"/>`,
    `<meta property="og:image:alt" content="${attr(s.imageAlt)}"/>`,
    `<meta name="twitter:title" content="${title}"/>`,
    description ? `<meta name="twitter:description" content="${description}"/>` : '',
    `<meta name="twitter:image" content="${s.image}"/>`,
    `<meta name="twitter:image:alt" content="${attr(s.imageAlt)}"/>`,
    ...(s.type === 'profile' ? ['<meta property="profile:first_name" content="Michael"/>', '<meta property="profile:last_name" content="Esema"/>'] : []),
    canonical ? `<link rel="canonical" href="${canonical}"/>` : '',
    ...s.jsonld.map(o => `<script type="application/ld+json">${json(o)}</script>`),
  ].filter(Boolean)

  out = out.replace('</head>', `  ${headTags}\n  ${extra.join('\n  ')}\n</head>`)
  out = out.replace('<div id="root"></div>', `<div id="root">${body}</div>`)
  return out
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, content)
}

const report = []
for (const url of routes) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url.slice(1)}.html`)
  write(file, page(url, url === '/' ? `${SITE}/` : `${SITE}${url}`))
  report.push(url)
}
// A real 404 page, served with a 404 status for any address that is not a page.
write(path.join(dist, '404.html'), page('/__not-found', null))
console.log(`prerendered ${report.length} pages + 404.html:`, report.join(' '))

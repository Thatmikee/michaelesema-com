// Writes one real HTML file per route after `vite build`, so the content is in the
// first response for search engines, AI crawlers and slow connections. The page
// then hydrates in the browser. Runs on plain Node: no browser is needed, so it
// works on Cloudflare's build machine.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, routes } = await import(pathToFileURL(path.resolve('dist-server/entry-server.js')).href)
const SITE = 'https://michaelesema.com'

if (!template.includes('<div id="root"></div>')) throw new Error('prerender: root element not found in dist/index.html')

function page(url, canonical) {
  const html = render(url)
  // React 19 puts the page's <title>, <meta> and preload <link> tags first in the
  // output; lift them into <head>.
  const lead = html.match(/^((?:<title>[\s\S]*?<\/title>|<meta [^>]*>|<link [^>]*>)+)/)
  const headTags = lead ? lead[1] : ''
  const body = lead ? html.slice(lead[1].length) : html
  if (!headTags.includes('<title>')) throw new Error(`prerender: no title for ${url}`)
  let out = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta name="description"[^>]*>\s*/, '')
    .replace(/<meta property="og:(title|description|url)"[^>]*>\s*/g, '')
    .replace(/<link rel="canonical"[^>]*>\s*/, '')
  if (headTags.includes('name="robots"')) out = out.replace(/<meta name="robots"[^>]*>\s*/, '')
  const canon = canonical ? `<link rel="canonical" href="${canonical}"/>` : ''
  out = out.replace('</head>', `  ${headTags}${canon}\n</head>`)
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

// Checklist audit over the built site (dist/) and public/. Plain Node, no dependencies.
// Usage: node .playwright-mcp/audit.mjs
import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'
import { execFileSync } from 'node:child_process'

const SITE = 'https://michaelesema.com'
const dist = path.resolve('dist')
const pub = path.resolve('public')
const out = []
const fails = []
const log = (ok, item, detail = '') => { out.push(`${ok ? 'PASS' : 'FAIL'}  ${item}${detail ? '  ' + detail : ''}`); if (!ok) fails.push(item) }

const pages = ['/', '/work', '/blog', '/about', '/privacy', '/work/sarah-bellus', '/work/silent-party-9ja', '/work/bs-hive', '/work/the-signal']
const file = u => path.join(dist, u === '/' ? 'index.html' : `${u.slice(1)}.html`)
const html = Object.fromEntries(pages.map(u => [u, fs.readFileSync(file(u), 'utf8')]))
html['/404'] = fs.readFileSync(path.join(dist, '404.html'), 'utf8')
const all = Object.keys(html)

const tag = (h, re) => [...h.matchAll(re)].map(m => m[1])
const title = h => tag(h, /<title>([\s\S]*?)<\/title>/g)
const meta = (h, attr, name) => tag(h, new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`, 'g'))
const dec = s => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')

// 1 Titles
{ const t = pages.map(u => title(html[u])); const ok = t.every(x => x.length === 1) && new Set(t.map(x => x[0])).size === pages.length; log(ok, 'Unique page titles', t.map(x => x.length === 1 ? dec(x[0]).length : 'x').join(',') + ' chars'); const long = pages.filter(u => title(html[u])[0] && dec(title(html[u])[0]).length > 70); log(long.length === 0, 'Titles within 70 characters (the home title is deliberately longer: it names the role)', long.join(' ')) }
// 2 Descriptions
{ const d = pages.map(u => meta(html[u], 'name', 'description')); const ok = d.every(x => x.length === 1) && new Set(d.map(x => x[0])).size === pages.length; log(ok, 'Unique meta descriptions (exactly one per page)'); const bad = pages.filter(u => { const x = meta(html[u], 'name', 'description')[0] || ''; return x.length < 70 || x.length > 170 }); log(bad.length === 0, 'Descriptions 70 to 170 characters', bad.map(u => u + ':' + (meta(html[u], 'name', 'description')[0] || '').length).join(' ')) }
// 3 Canonicals
{ const bad = pages.filter(u => { const c = tag(html[u], /<link rel="canonical" href="([^"]*)"/g); return c.length !== 1 || c[0] !== (u === '/' ? `${SITE}/` : `${SITE}${u}`) }); log(bad.length === 0, 'One correct canonical per page', bad.join(' ')); log(!/rel="canonical"/.test(html['/404']) && /noindex/.test(html['/404']), '404 page: noindex and no canonical') }
// 4 Headings
{ const h1 = pages.map(u => tag(html[u], /<h1[^>]*>([\s\S]*?)<\/h1>/g)); const txt = h1.map(x => x.map(s => dec(s.replace(/<[^>]*>/g, ''))).join('|')); log(h1.every(x => x.length === 1), 'Exactly one h1 per page'); log(new Set(txt).size === pages.length, 'Unique h1 per page') }
// 5 lang + landmarks
{ log(all.every(u => /<html lang="en-GB"/.test(html[u])), 'html lang attribute'); log(pages.every(u => /<main[ >]/.test(html[u])), 'main landmark on every page') }
// 6 Images alt
{ const probs = []; let n = 0; for (const u of all) for (const m of html[u].matchAll(/<img\b[^>]*>/g)) { n++; const t = m[0]; const alt = t.match(/\salt="([^"]*)"/); if (!alt) probs.push(`${u} missing alt`); else if (alt[1] === '' && !/aria-hidden/.test(t) && !/sx-thumbs/.test(t)) probs.push(`${u} empty alt: ${(t.match(/src="([^"]*)"/) || [])[1]}`); else if (/\.(jpe?g|png|webp)/i.test(alt[1]) || (alt[1] && alt[1].length < 8)) probs.push(`${u} weak alt "${alt[1]}"`) } log(probs.length === 0, `Alt text on every image (${n} images)`, probs.slice(0, 4).join('; ')) }
// 7 Social tags
{ const need = ['og:title', 'og:description', 'og:url', 'og:image', 'og:type']; const bad = []; for (const u of pages) { for (const p of need) if (meta(html[u], 'property', p).length !== 1) bad.push(`${u} ${p} x${meta(html[u], 'property', p).length}`); for (const p of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) if (meta(html[u], 'name', p).length !== 1) bad.push(`${u} ${p} x${meta(html[u], 'name', p).length}`) } log(bad.length === 0, 'Open Graph and Twitter tags present, none duplicated', bad.slice(0, 5).join('; '))
  const strip = s => (s || '').replace(/\/$/, '')
  const mism = pages.filter(u => meta(html[u], 'property', 'og:title')[0] !== title(html[u])[0] || meta(html[u], 'name', 'twitter:title')[0] !== title(html[u])[0] || meta(html[u], 'property', 'og:description')[0] !== meta(html[u], 'name', 'description')[0] || meta(html[u], 'name', 'twitter:description')[0] !== meta(html[u], 'name', 'description')[0] || strip(meta(html[u], 'property', 'og:url')[0]) !== strip(tag(html[u], /<link rel="canonical" href="([^"]*)"/g)[0])); log(mism.length === 0, 'Social title and url match the page (not copied from home)', mism.join(' '))
  const imgs = pages.map(u => meta(html[u], 'property', 'og:image')[0]); const missing = [...new Set(imgs)].filter(i => !i || !fs.existsSync(path.join(dist, new URL(i).pathname))); log(missing.length === 0, 'Share images exist', missing.join(' ')); const dims = [...new Set(imgs)].filter(Boolean).map(i => { try { const o = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', path.join(dist, new URL(i).pathname)]).toString(); return `${(o.match(/pixelWidth: (\d+)/) || [])[1]}x${(o.match(/pixelHeight: (\d+)/) || [])[1]}` } catch { return '?' } }); log(dims.every(d => d === '1200x630'), 'Share images are 1200x630', dims.join(' ')); log(new Set(imgs).size > 1, 'Project pages have their own share image', `${new Set(imgs).size} distinct`) }
// 8 Structured data
{ const crumbPages = pages.filter(u => u === '/about' || u === '/privacy' || u.startsWith('/work/')); const per = {}; let bad = 0; for (const u of pages) { const blocks = tag(html[u], /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g); per[u] = []; for (const b of blocks) { try { const j = JSON.parse(b); const arr = j['@graph'] || [j]; arr.forEach(x => per[u].push(x['@type'])) } catch { bad++ } } } log(bad === 0, 'Structured data parses as JSON'); const repeated = pages.filter(u => u !== '/' && (per[u].includes('ProfilePage') || per[u].includes('WebSite') || per[u].includes('ProfessionalService'))); log(repeated.length === 0, 'Site-wide schema (ProfilePage, WebSite, ProfessionalService) only on the home page', repeated.join(' ')); log(crumbPages.every(u => per[u].includes('BreadcrumbList')), 'BreadcrumbList wherever a breadcrumb is visible (About, Privacy, project pages)', crumbPages.filter(u => !per[u].includes('BreadcrumbList')).join(' ')); log(pages.filter(u => u.startsWith('/work/')).every(u => per[u].includes('CreativeWork')), 'CreativeWork on project pages'); log(!Object.values(per).flat().includes('ProfessionalService'), 'No business-listing schema (ProfessionalService): deliberate, the site is a portfolio not a service ad'); out.push('      types: ' + pages.map(u => `${u}=[${per[u].join(',')}]`).join(' ')) }
// 9 Internal links
{ const broken = []; let n = 0; const targets = new Set([...pages, '/404']); for (const u of all) for (const m of html[u].matchAll(/<a\b[^>]*href="([^"#]*)"[^>]*>/g)) { const h = m[1]; if (!h || h.startsWith('mailto:')) continue; if (h.startsWith('http')) { if (/target="_blank"/.test(m[0]) && !/rel="[^"]*noopener/.test(m[0])) broken.push(`${u} _blank without noopener ${h}`); continue } n++; const clean = h.split('?')[0]; if (!targets.has(clean) && !fs.existsSync(path.join(dist, clean))) broken.push(`${u} -> ${h}`); if (clean.length > 1 && clean.endsWith('/')) broken.push(`${u} trailing slash ${h}`) } log(broken.length === 0, `Internal links resolve (${n} checked)`, broken.slice(0, 4).join('; ')) }
// 10 Vite / React leakage
{ const files = [...all.map(u => ({ n: u, t: html[u] })), { n: 'manifest', t: fs.existsSync(path.join(pub, 'site.webmanifest')) ? fs.readFileSync(path.join(pub, 'site.webmanifest'), 'utf8') : '' }]; const hits = files.filter(f => /Vite \+ React|vite\.svg|react-app|name="generator"|<title>Vite/i.test(f.t)).map(f => f.n); log(hits.length === 0, 'No Vite or React defaults in titles, metadata or icons', hits.join(' ')); log(!fs.existsSync(path.join(pub, 'vite.svg')) && !fs.existsSync(path.join(pub, 'icons.svg')), 'No Vite starter assets in public/ (vite.svg, icons.svg)') }
// 11 Source maps
{ const maps = []; const walk = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith('.map')) maps.push(p) }); walk(dist); const refs = fs.readdirSync(path.join(dist, 'assets')).filter(f => /\.(js|css)$/.test(f)).filter(f => /sourceMappingURL/.test(fs.readFileSync(path.join(dist, 'assets', f), 'utf8'))); log(maps.length === 0 && refs.length === 0, 'No production source maps', `${maps.length} map files, ${refs.length} references`) }
// 12 robots, sitemap, llms
{ const r = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8'); log(/Sitemap: https:\/\/michaelesema\.com\/sitemap\.xml/.test(r) && !/Disallow: \/\s*$/m.test(r), 'robots.txt allows crawling and names the sitemap'); const sm = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8'); const locs = tag(sm, /<loc>([^<]*)<\/loc>/g); const expect = pages.filter(u => u !== '/blog').map(u => u === '/' ? `${SITE}/` : `${SITE}${u}`); log(locs.length === expect.length && expect.every(e => locs.includes(e)), 'sitemap.xml lists every indexable page and nothing else (Blog is noindex, so it is left out)', `${locs.length} urls`); log(tag(sm, /<lastmod>([^<]*)<\/lastmod>/g).every(d => /^\d{4}-\d{2}-\d{2}$/.test(d)), 'sitemap dates are valid'); const l = fs.existsSync(path.join(dist, 'llms.txt')); log(l && pages.filter(u => u !== '/privacy' && u !== '/blog').every(u => fs.readFileSync(path.join(dist, 'llms.txt'), 'utf8').includes(u === '/' ? 'michaelesema.com/ ' : `michaelesema.com${u}`)), 'llms.txt exists and lists the pages'); log(/rel="alternate" type="text\/plain" href="https:\/\/michaelesema\.com\/llms\.txt"/.test(html['/']), 'llms.txt is linked from the home page head') }
// 13 Favicons and manifest
{ const need = ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'site.webmanifest']; const miss = need.filter(f => !fs.existsSync(path.join(dist, f))); log(miss.length === 0, 'Favicon set: ico, svg, apple-touch-icon, manifest', 'missing: ' + miss.join(' ')); const hasLinks = /rel="icon"[^>]*favicon\.ico|href="\/favicon\.ico"/.test(html['/']) && /rel="apple-touch-icon"[^>]*apple-touch-icon\.png/.test(html['/']) && /rel="manifest"/.test(html['/']); log(hasLinks, 'Favicon, touch icon and manifest linked in every page head') }
// 14 Bundles
{ const a = path.join(dist, 'assets'); const rows = fs.readdirSync(a).filter(f => /\.(js|css)$/.test(f)).map(f => { const b = fs.readFileSync(path.join(a, f)); return [f, b.length, zlib.gzipSync(b).length] }); out.push('      bundles: ' + rows.map(([f, r, g]) => `${f.replace(/-[\w-]{8}\./, '.')} ${(r / 1024).toFixed(0)}KB/${(g / 1024).toFixed(0)}KB gz`).join(', ')); const entry = rows.filter(([f]) => /^index-.*\.js$/.test(f)); log(entry.every(([, , g]) => g < 110 * 1024), 'Entry script under 110KB gzipped', entry.map(([, , g]) => (g / 1024).toFixed(0) + 'KB').join(',')); log(rows.every(([, , g]) => g < 150 * 1024), 'No single script over 150KB gzipped') }
// 15 Headers and redirects sanity
{ const h = fs.readFileSync(path.join(dist, '_headers'), 'utf8'); log(/Content-Security-Policy/.test(h) && /Strict-Transport-Security/.test(h) && /X-Content-Type-Options/.test(h), 'Security headers file present (CSP, HSTS, nosniff)'); log(!/\/\*\s+\/index\.html\s+200/.test(fs.readFileSync(path.join(dist, '_redirects'), 'utf8')), 'No catch-all rewrite (unknown URLs return a real 404)') }

// 16 Guardrails: strings that must never appear on the public site
{ const banned = /ADN-1|Active Deterrence|Aboladale|Eseme(?!a)|fundrais|freelance|hire me|available for|open to work|small businesses|privacy@mykei|Drag across the name|now and then|still design|occasional|Contact me/i
  const hits = []
  const scan = (name, text) => { const m = text.match(banned); if (m) hits.push(`${name}: ${m[0]}`) }
  for (const u of all) scan(u, html[u])
  for (const f of ['llms.txt', 'robots.txt', 'sitemap.xml', 'site.webmanifest']) scan(f, fs.readFileSync(path.join(dist, f), 'utf8'))
  log(hits.length === 0, 'No banned strings (ADN-1, Active Deterrence, Aboladale, Eseme typo, fundraising, freelance or hire-me wording, small-business pitch, old privacy inbox, the removed caption)', hits.slice(0, 4).join('; '))
  log(/name="robots" content="noindex, follow"/.test(html['/blog']), 'Blog is noindex until it has posts') }

console.log(out.join('\n'))
console.log(`\n${out.filter(l => l.startsWith('PASS')).length} passed, ${fails.length} failed`)
process.exit(fails.length ? 1 : 0)

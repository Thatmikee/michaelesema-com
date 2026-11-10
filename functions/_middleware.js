// Cloudflare Pages middleware: per-route titles and descriptions for crawlers
// and link previews, which read the HTML before any JavaScript runs.
// Responses built here do not pass through public/_headers, so the security
// headers are set again below. Keep CSP identical to public/_headers.

const SITE = 'https://michaelesema.com'
const CARD = `${SITE}/michael-esema-card.png`

const ROUTE_META = {
  '/about': {
    title: 'About Michael Esema | Graphic and Multimedia Designer',
    description:
      'Michael Esema, graphic and multimedia designer. Designing since 2018. BSc Accounting, MBA, MSc International Business Management (Merit), Lean Six Sigma.',
  },
  '/thinking': {
    title: 'Writing | Michael Esema',
    description: 'Notes by Michael Esema on design, trust, and building businesses across Nigeria and the UK.',
  },
  '/privacy': {
    title: 'Privacy | Michael Esema',
    description: 'How michaelesema.com handles personal data and cookies.',
  },
}

const CSP = [
  "default-src 'self'",
  "script-src 'self' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ')

const SECURITY_HEADERS = {
  'Content-Security-Policy': CSP,
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
}

const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function injectMeta(html, path, meta) {
  const url = `${SITE}${path}`
  const t = esc(meta.title)
  const d = esc(meta.description)
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${d}"`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
    .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${t}"`)
    .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${d}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)
    .replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${CARD}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${t}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${d}"`)
}

export async function onRequest(context) {
  const url = new URL(context.request.url)
  const pathname = url.pathname.replace(/\/$/, '') || '/'
  const meta = ROUTE_META[pathname]
  if (!meta) return context.next()

  const response = await context.env.ASSETS.fetch(new URL('/index.html', context.request.url))
  const html = injectMeta(await response.text(), pathname, meta)

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=300',
      ...SECURITY_HEADERS,
    },
  })
}

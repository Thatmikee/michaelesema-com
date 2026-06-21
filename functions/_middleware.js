// Cloudflare Pages Middleware — route-level meta injection for all SPA routes
// Fixes: LinkedIn/WhatsApp/X previews all showing ADN-1 title regardless of route

const ROUTE_META = {
  '/protocol': {
    title: 'MarkProof Nigeria | Mykei Protocol',
    description:
      'A pre-pilot asset marking, ownership registry, and recovery evidence protocol for Nigerian solar, power, estate, construction, school, church, warehouse, and SME assets.',
    canonical: 'https://mykei.io/protocol',
    ogTitle: 'MarkProof Nigeria | Mykei Protocol',
    ogDescription: 'Make stolen assets harder to sell through marking, registration, stolen-status flagging, and recovery evidence.',
    ogUrl: 'https://mykei.io/protocol',
    ogImage: 'https://mykei.io/markproof-social.png',
    twitterTitle: 'MarkProof Nigeria | Mykei Protocol',
    twitterDescription: 'Make stolen assets harder to sell. Asset marking, ownership registry, and recovery evidence for Nigerian assets.',
  },
  '/about': {
    title: 'About Michael Esema | Founder & CEO, Mykei Securities',
    description:
      'Michael Esema — Nigerian-born entrepreneur based in Manchester. Founder of Mykei Securities Ltd, inventor of the ADN-1, originator of Economic Sterilisation. MBA, MSc. Patent GB2606630.8.',
    canonical: 'https://michaelesema.com/about',
    ogTitle: 'About Michael Esema | Founder & CEO, Mykei Securities',
    ogDescription: 'The founder behind Economic Sterilisation. Nigerian-born, Manchester-based. MBA, MSc. Patent No. 2606630.8 (UK).',
    ogUrl: 'https://michaelesema.com/about',
    ogImage: 'https://michaelesema.com/michael-esema-social.png',
    twitterTitle: 'About Michael Esema | Founder & CEO, Mykei Securities',
    twitterDescription: 'Founder of Mykei Securities. Originator of Economic Sterilisation. MBA, MSc. Patent GB2606630.8.',
  },
  '/philosophy': {
    title: 'Economic Sterilisation | The Philosophy | Mykei Securities',
    description:
      'Economic Sterilisation: the doctrine that makes stolen goods commercially worthless. The philosophy behind Mykei Securities and the ADN-1 by Michael Esema.',
    canonical: 'https://michaelesema.com/philosophy',
    ogTitle: 'Economic Sterilisation | The Philosophy',
    ogDescription: 'Theft becomes less attractive when stolen assets cannot be sold. The doctrine behind Mykei Securities.',
    ogUrl: 'https://michaelesema.com/philosophy',
    ogImage: 'https://michaelesema.com/michael-esema-social.png',
    twitterTitle: 'Economic Sterilisation | The Philosophy | Mykei Securities',
    twitterDescription: 'The doctrine that makes stolen goods commercially worthless.',
  },
  '/thesis': {
    title: 'The Thesis | Economic Sterilisation | Mykei Securities',
    description:
      'The evidence base and academic thesis behind Economic Sterilisation, the ADN-1, and the Mykei Securities retail crime prevention system.',
    canonical: 'https://michaelesema.com/thesis',
    ogTitle: 'The Thesis | Economic Sterilisation',
    ogDescription: 'Evidence, policy implications, and the academic case behind Economic Sterilisation by Michael Esema.',
    ogUrl: 'https://michaelesema.com/thesis',
    ogImage: 'https://michaelesema.com/michael-esema-social.png',
    twitterTitle: 'The Thesis | Economic Sterilisation | Mykei Securities',
    twitterDescription: 'Evidence base and policy implications behind Economic Sterilisation.',
  },
}

function injectMeta(html, meta) {
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
  html = html.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${meta.description}"`)
  html = html.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`)
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${meta.ogTitle}"`)
  html = html.replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${meta.ogDescription}"`)
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${meta.ogUrl}"`)
  html = html.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${meta.ogImage}"`)
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${meta.twitterTitle}"`)
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${meta.twitterDescription}"`)
  html = html.replace(/<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${meta.ogImage}"`)
  return html
}

export async function onRequest(context) {
  const url = new URL(context.request.url)
  const pathname = url.pathname.replace(/\/$/, '') || '/'
  const meta = ROUTE_META[pathname]

  // No meta override needed — pass through to static assets / index.html
  if (!meta) return context.next()

  // Fetch the SPA shell
  const indexUrl = new URL('/index.html', context.request.url)
  const response = await context.env.ASSETS.fetch(indexUrl)
  let html = await response.text()

  html = injectMeta(html, meta)

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=300',
    },
  })
}

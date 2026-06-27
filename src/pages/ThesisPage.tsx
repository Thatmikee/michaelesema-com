import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'From Market Reduction to Economic Sterilisation',
  alternativeHeadline:
    'A technology-enabled framework for reducing resale confidence and economic acceptability in stolen goods',
  description:
    "Economic Sterilisation is Michael Esema's proposed operational and commercial extension of Mike Sutton's Market Reduction Approach for modern asset marking, registry verification, evidence workflows and digitally mediated resale markets.",
  author: {
    '@type': 'Person',
    '@id': 'https://michaelesema.com/#person',
    name: 'Michael Esema',
    additionalName: 'Essien',
    url: 'https://michaelesema.com',
    jobTitle: 'Founder and CEO, Mykei Securities Ltd',
  },
  datePublished: '2026',
  dateModified: '2026-06-04',
  publisher: { '@type': 'Organization', name: 'Mykei Securities Ltd', url: 'https://mykei.io' },
  url: 'https://michaelesema.com/thesis',
  keywords:
    'Economic Sterilisation, Market Reduction Approach, Mike Sutton, stolen goods markets, anti-resale crime, asset marking, asset registry, evidence workflows, Mykei Securities',
  citation: [
    'Sutton, M. (1995). Supply by Theft: Does the Market for Second-hand Goods Play a Role in Keeping Crime Figures High? British Journal of Criminology, 35(3), 400-416.',
    'Sutton, M., Johnston, K., and Lockwood, H. (1998). Handling Stolen Goods and Theft: A Market Reduction Approach. Home Office Research Study 178.',
    'Sutton, M., Schneider, J., and Hetherington, S. (2001). Tackling Theft with the Market Reduction Approach. Home Office Crime Reduction Research Series Paper 8.',
  ],
}

const ACCENT = '#9a6a0c'   // readable ochre for label text and links (WCAG AA on white)
const RULE = '#f2a91c'     // brighter amber for rules and accent bars
const INK = '#161616'
const MUTED = '#565656'
const BORDER = '#E6E6E6'
const BG_WARM = '#FAFAF8'

const body: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 17,
  lineHeight: 1.9,
  color: MUTED,
  marginBottom: 22,
}

const h2: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: 27,
  fontWeight: 700,
  color: INK,
  marginTop: 56,
  marginBottom: 16,
  letterSpacing: '-0.01em',
  scrollMarginTop: 100,
}

const h3: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 16,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: INK,
  marginTop: 32,
  marginBottom: 12,
}

const list: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 16,
  lineHeight: 1.8,
  color: MUTED,
  paddingLeft: 22,
  marginBottom: 24,
}

const SECTIONS = [
  '1. Starting point',
  '2. Lineage',
  '3. Operating idea',
  '4. The Mykei Protocol',
  '5. ADN-1',
  '6. Scope and limits',
  '7. Research questions',
  '8. Conclusion',
]

export default function ThesisPage() {
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.title = 'From Market Reduction to Economic Sterilisation | Michael Esema'

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (canonical) {
      canonical.setAttribute('href', 'https://michaelesema.com/thesis')
    } else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = 'https://michaelesema.com/thesis'
      document.head.appendChild(link)
    }

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', SCHEMA.description)

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    scriptRef.current = script

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current)
        scriptRef.current = null
      }
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        {/* Title + metadata + abstract */}
        <section style={{
          background: '#FFFFFF',
          borderBottom: `1px solid ${BORDER}`,
          paddingTop: 132,
          paddingBottom: 64,
          paddingLeft: 24,
          paddingRight: 24,
        }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                marginBottom: 26,
                lineHeight: 1.9,
              }}
            >
              Working paper<br />Mykei Securities Ltd<br />Revised June 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(30px, 4.5vw, 50px)',
                fontWeight: 700,
                lineHeight: 1.18,
                color: INK,
                marginBottom: 18,
                letterSpacing: '-0.01em',
              }}
            >
              From Market Reduction to Economic Sterilisation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: 18, lineHeight: 1.6, color: MUTED, marginBottom: 36 }}
            >
              A technology-enabled framework for reducing resale confidence and economic acceptability in stolen goods.
            </motion.p>

            {/* Metadata block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 18,
                borderTop: `1px solid ${BORDER}`,
                borderBottom: `1px solid ${BORDER}`,
                padding: '20px 0',
                marginBottom: 32,
              }}
            >
              {[
                ['Author', 'Michael Esema'],
                ['Affiliation', 'Founder, Mykei Securities Ltd'],
                ['Status', 'Working paper, revised June 2026'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 6 }}>{k}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: INK, lineHeight: 1.5 }}>{v}</p>
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: MUTED, marginBottom: 40, lineHeight: 1.7 }}
            >
              Disclaimer: working paper. Not legal, policing, insurance or forensic-laboratory advice.
            </motion.p>

            {/* Abstract */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              style={{
                background: BG_WARM,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${RULE}`,
                borderRadius: 4,
                padding: '28px 32px',
              }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>
                Abstract
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, lineHeight: 1.85, color: MUTED, margin: 0 }}>
                Economic Sterilisation is not a claim to have discovered stolen-goods markets. That lineage is already
                established in criminology, especially through Mike Sutton&apos;s Market Reduction Approach and related work
                on rational choice, opportunity reduction, situational crime prevention and hot products. This paper uses
                Economic Sterilisation as an operating term for a practical question: how can asset owners, retailers and
                infrastructure operators reduce the confidence with which stolen goods can be used, sold, moved or denied?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section style={{ background: BG_WARM, paddingTop: 64, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
          <article style={{ maxWidth: 760, margin: '0 auto' }}>

            {/* Section index */}
            <nav aria-label="Section index" style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 6,
              padding: '22px 26px',
              background: '#FFFFFF',
              marginBottom: 20,
            }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>
                Contents
              </p>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px 24px' }}>
                {SECTIONS.map((s, i) => (
                  <li key={s}>
                    <a href={`#s${i + 1}`} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14.5, color: MUTED, textDecoration: 'none', borderBottom: `1px solid transparent`, transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                      onMouseLeave={e => (e.currentTarget.style.color = MUTED)}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <h2 id="s1" style={h2}>1. Starting point</h2>
            <p style={body}>
              This paper makes a deliberately narrow claim. I do not claim to have discovered that stolen-goods markets
              drive theft; criminology established that decades ago. I use Economic Sterilisation as a named operating term
              for turning that established theory into a practical model for contemporary physical and online resale
              environments.
            </p>
            <p style={body}>
              The underlying problem is simple. Theft continues while stolen goods stay easy to sell, authenticate, insure,
              store, move or launder. The question this paper addresses is how owners of valuable assets can reduce that
              resale confidence, both before and after a theft event.
            </p>

            <h2 id="s2" style={h2}>2. Lineage</h2>
            <p style={body}>
              Mike Sutton&apos;s 1995 British Journal of Criminology paper, <em>Supply by Theft</em>, asked whether the market
              for second-hand goods plays a role in keeping crime figures high. His later Home Office work with Katie Johnston
              and Heather Lockwood developed the Market Reduction Approach, a strategy for reducing theft by reducing demand
              for stolen goods and disrupting the markets that handle them.
            </p>
            <p style={body}>
              The 2001 Home Office guide, <em>Tackling Theft with the Market Reduction Approach</em>, presents MRA as a guide
              for interagency work against stolen-goods markets. This paper builds directly on that foundation and does not
              replace it.
            </p>

            <h2 id="s3" style={h2}>3. Operating idea</h2>
            <p style={body}>
              Economic Sterilisation is Mykei&apos;s term for reducing the resale confidence and economic acceptability of
              stolen goods. It extends the Market Reduction Approach into a modern operating layer:
            </p>
            <ol style={list}>
              <li>pre-theft deterrence through visible asset identity, marking and warnings,</li>
              <li>post-theft resale contamination by making stolen items riskier to handle or sell,</li>
              <li>registry verification through ownership, batch, location and incident records,</li>
              <li>evidence packaging for asset owners, insurers, police and lawful recovery channels,</li>
              <li>online resale adaptation, including verification and risk workflows for digital resale environments.</li>
            </ol>
            <p style={body}>
              The originality is not the observation that resale markets matter. It is the attempt to turn market-reduction
              logic into a practical asset-integrity system for an age of online resale, micro-marking, digital evidence and
              distributed asset ownership.
            </p>

            <h2 id="s4" style={h2}>4. The Mykei Protocol</h2>
            <p style={body}>
              The Mykei Protocol is the proposed operating sequence: mark, register, evidence, verify, report and reduce
              resale confidence. It can apply to construction tools, solar equipment, batteries, generators, telecoms
              equipment, retail stock, estate assets and other valuable movable goods.
            </p>

            <h2 id="s5" style={h2}>5. ADN-1</h2>
            <p style={body}>
              ADN-1 is part of this architecture, not the whole of it. It is a patent-pending R&amp;D pathway for
              event-triggered marking and registry-linked evidence, supported by controlled prototype demonstration and
              firmware evidence. A UK patent application, No. 2606630.8, has been filed covering this pathway. It is a pending
              application, not a granted patent.
            </p>

            <h2 id="s6" style={h2}>6. Scope and limits</h2>
            <h3 style={h3}>What the evidence currently supports</h3>
            <ul style={list}>
              <li>Economic Sterilisation is a named framework, published here and developed at Mykei Securities Ltd.</li>
              <li>A UK patent application, No. 2606630.8, has been filed covering the ADN-1 R&amp;D pathway.</li>
              <li>ADN-1 has controlled prototype demonstration evidence and firmware evidence.</li>
              <li>The Sutton and MRA literature supports the broader principle that stolen-goods markets influence theft.</li>
            </ul>
            <h3 style={h3}>What this paper does not claim</h3>
            <ul style={list}>
              <li>I did not invent stolen-goods market theory, and this framework does not depend on that claim.</li>
              <li>No field validation has been completed, and none is claimed here.</li>
              <li>No live marketplace integration exists with eBay, Vinted, Facebook Marketplace or any other platform.</li>
              <li>No police force, insurer, forensic supplier or public body has approved or endorsed this work.</li>
              <li>Patent application No. 2606630.8 is pending. It is not a granted patent.</li>
            </ul>

            <h2 id="s7" style={h2}>7. Research questions</h2>
            <ol style={list}>
              <li>Which asset categories combine theft pain, resale-market dependence and buyer budget most strongly?</li>
              <li>Which evidence records do insurers, police and asset owners actually need after a theft?</li>
              <li>Which marking and registration methods reduce resale confidence without creating GDPR, defamation or platform-risk problems?</li>
              <li>What pilot design can measure evidence readiness, asset traceability and buyer trust without overclaiming theft reduction?</li>
            </ol>

            <h2 id="s8" style={h2}>8. Conclusion</h2>
            <p style={body}>
              Sutton identified the market problem. This paper proposes an operating model for the market solution: marking,
              registration, evidence and verification, applied to asset-heavy organisations, insurers, infrastructure
              operators and resale-driven theft environments. The work ahead is empirical. Controlled pilots, evidence
              standards and honest measurement will have to earn the claims this paper deliberately does not make.
            </p>

            {/* References */}
            <div style={{ marginTop: 64, paddingTop: 36, borderTop: `1px solid ${BORDER}` }}>
              <h2 style={{ ...h2, marginTop: 0, fontSize: 22 }}>References</h2>
              <ol style={list}>
                <li>Sutton, M. (1995). <em>Supply by Theft: Does the Market for Second-hand Goods Play a Role in Keeping Crime Figures High?</em> British Journal of Criminology, 35(3), 400-416.</li>
                <li>Sutton, M., Johnston, K., and Lockwood, H. (1998). <em>Handling Stolen Goods and Theft: A Market Reduction Approach</em>. Home Office Research Study 178.</li>
                <li>Sutton, M., Schneider, J., and Hetherington, S. (2001). <em>Tackling Theft with the Market Reduction Approach</em>. Home Office Crime Reduction Research Series Paper 8.</li>
                <li>Clarke, R. V. (1999). <em>Hot Products</em>. Police Research Series Paper 112.</li>
                <li>Felson, M. and Cohen, L. E. (1979). Social change and crime rate trends. <em>American Sociological Review</em>, 44(4), 588-608.</li>
              </ol>
            </div>

            {/* Cite as */}
            <div style={{ marginTop: 40, padding: '20px 24px', background: 'rgba(242,169,28,0.10)', borderLeft: `3px solid ${RULE}`, borderRadius: 4 }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                Cite as
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.7 }}>
                Esema, M. (2026). From Market Reduction to Economic Sterilisation: a technology-enabled framework for reducing
                resale confidence and economic acceptability in stolen goods. Mykei Securities Ltd. Available at:
                https://michaelesema.com/thesis
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}

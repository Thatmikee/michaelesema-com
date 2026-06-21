import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'From Market Reduction to Economic Sterilisation',
  alternativeHeadline: 'A technology-enabled framework for reducing the resale value of stolen goods',
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

const GOLD = '#8A6D17'
const INK = '#1A1A1A'
const MUTED = '#5F5F5F'
const BORDER = '#E8E8E8'
const BG_WARM = '#F8F8F8'

const body: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 17,
  lineHeight: 1.9,
  color: MUTED,
  marginBottom: 24,
}

const h2: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: 28,
  fontWeight: 700,
  color: INK,
  marginTop: 56,
  marginBottom: 16,
  letterSpacing: '-0.01em',
}

const h3: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: 20,
  fontWeight: 600,
  fontStyle: 'italic',
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
    if (meta) {
      meta.setAttribute('content', SCHEMA.description)
    }

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
        <section
          style={{
            background: '#FFFFFF',
            borderBottom: `1px solid ${BORDER}`,
            paddingTop: 140,
            paddingBottom: 72,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: GOLD,
                marginBottom: 28,
              }}
            >
              Working Paper · Mykei Securities Ltd · Revised 4 June 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(30px, 4.5vw, 52px)',
                fontWeight: 700,
                fontStyle: 'italic',
                lineHeight: 1.2,
                color: INK,
                marginBottom: 20,
              }}
            >
              From Market Reduction to Economic Sterilisation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 18,
                lineHeight: 1.6,
                color: MUTED,
                marginBottom: 32,
              }}
            >
              A technology-enabled framework for reducing the resale confidence and economic acceptability of stolen goods.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: MUTED, marginBottom: 4 }}
            >
              Michael Esema, Founder and CEO, Mykei Securities Ltd
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: MUTED, marginBottom: 48 }}
            >
              Working paper. Not legal, policing, insurance or forensic-laboratory advice.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              style={{
                background: BG_WARM,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: 4,
                padding: '28px 32px',
              }}
            >
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  marginBottom: 14,
                }}
              >
                Abstract
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, lineHeight: 1.85, color: MUTED, margin: 0 }}>
                Economic Sterilisation does not claim that stolen-goods markets are a new discovery. That lineage already
                exists in criminology, especially through Mike Sutton's Market Reduction Approach and wider work on rational
                choice, opportunity reduction, situational crime prevention and hot products. This working paper proposes
                Economic Sterilisation as an operational and commercial extension of that lineage for modern resale-driven
                theft environments, using asset marking, digital records, evidence workflows, verification and carefully
                governed resale-risk intelligence to reduce the confidence with which stolen goods can be sold.
              </p>
            </motion.div>
          </div>
        </section>

        <section style={{ background: BG_WARM, paddingTop: 72, paddingBottom: 96, paddingLeft: 24, paddingRight: 24 }}>
          <article style={{ maxWidth: 780, margin: '0 auto' }}>
            <h2 style={h2}>1. Introduction</h2>
            <p style={body}>
              This paper makes a deliberately narrow claim. I do not claim to have discovered that stolen-goods markets
              drive theft; criminology established that decades ago. I propose Economic Sterilisation as a named framework
              for turning that established theory into a practical operating model for contemporary physical and online
              resale environments.
            </p>
            <p style={body}>
              The underlying problem is simple. Theft continues when stolen goods remain easy to sell, authenticate, insure,
              store, move or launder. The question this paper addresses is how owners of valuable assets can reduce that
              resale confidence, both before and after a theft event.
            </p>

            <h2 style={h2}>2. Academic Lineage</h2>
            <p style={body}>
              Mike Sutton's 1995 British Journal of Criminology paper, <em>Supply by Theft</em>, asked whether the market for
              second-hand goods plays a role in keeping crime figures high. His later Home Office work with Katie Johnston and
              Heather Lockwood developed the Market Reduction Approach, a strategy for reducing theft by reducing demand for
              stolen goods and disrupting the markets that handle them.
            </p>
            <p style={body}>
              The 2001 Home Office guide, <em>Tackling Theft with the Market Reduction Approach</em>, presents MRA as a guide
              for interagency work against stolen-goods markets. This paper builds directly on that foundation.
            </p>

            <h2 style={h2}>3. What Economic Sterilisation Adds</h2>
            <p style={body}>
              Economic Sterilisation is Mykei's term for reducing the resale confidence and economic acceptability of stolen
              goods. It extends MRA into a modern operating layer:
            </p>
            <ol style={list}>
              <li>pre-theft deterrence through visible asset identity, marking and warnings,</li>
              <li>post-theft resale contamination by making stolen items riskier to handle or sell,</li>
              <li>registry verification through ownership, batch, location and incident records,</li>
              <li>evidence packaging for asset owners, insurers, police and lawful recovery channels,</li>
              <li>online resale adaptation, including verification and risk workflows for digital resale environments.</li>
            </ol>
            <p style={body}>
              The originality is not "resale markets matter." The originality is the attempt to productise market-reduction
              logic as a practical asset-integrity system for the age of online resale, micro-marking, digital evidence and
              distributed asset ownership.
            </p>

            <h2 style={h2}>4. The Mykei Protocol</h2>
            <p style={body}>
              The Mykei Protocol is the proposed operating sequence: mark, register, evidence, verify, report and reduce resale
              confidence. It can apply to construction tools, solar equipment, batteries, generators, telecoms equipment,
              retail stock, estate assets and other valuable movable goods.
            </p>
            <p style={body}>
              ADN-1 remains part of this architecture, but it is not the whole company. ADN-1 is a patent-pending R&D pathway
              for event-triggered marking and registry-linked evidence. The wider company direction is anti-resale crime and
              asset integrity.
            </p>

            <h2 style={h2}>5. Scope and Limitations</h2>
            <h3 style={h3}>What the evidence currently supports</h3>
            <ul style={list}>
              <li>Economic Sterilisation is a named framework, published here and developed at Mykei Securities Ltd.</li>
              <li>A UK patent application, No. 2606630.8, has been filed covering the ADN-1 R&D pathway.</li>
              <li>ADN-1 has controlled prototype demonstration evidence and firmware evidence.</li>
              <li>The Sutton/MRA literature supports the broader principle that stolen-goods markets influence theft.</li>
            </ul>

            <h3 style={h3}>What this paper does not claim</h3>
            <ul style={list}>
              <li>I did not invent stolen-goods market theory, and this framework does not depend on that claim.</li>
              <li>No field validation has been completed, and none is claimed here.</li>
              <li>No live marketplace integration exists with eBay, Vinted, Facebook Marketplace or any other platform.</li>
              <li>No police force, insurer, forensic supplier or public body has approved or endorsed this work.</li>
              <li>Patent application No. 2606630.8 is pending. It is not a granted patent.</li>
            </ul>

            <h2 style={h2}>6. Research Questions</h2>
            <ol style={list}>
              <li>Which asset categories have the strongest combination of theft pain, resale-market dependence and buyer budget?</li>
              <li>Which evidence records do insurers, police and asset owners actually need after theft?</li>
              <li>Which marking and registration methods reduce resale confidence without creating GDPR, defamation or platform-risk problems?</li>
              <li>What pilot design can measure evidence readiness, asset traceability and buyer trust without overclaiming theft reduction?</li>
            </ol>

            <h2 style={h2}>7. Conclusion</h2>
            <p style={body}>
              Sutton identified the market problem. This paper proposes an operating model for the market solution: marking,
              registration, evidence and verification, applied to asset-heavy organisations, insurers, infrastructure
              operators and resale-driven theft environments. The work ahead is empirical. Controlled pilots, evidence
              standards and honest measurement will have to earn the claims this paper deliberately does not make.
            </p>

            <div style={{ marginTop: 64, paddingTop: 40, borderTop: `1px solid ${BORDER}` }}>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: INK,
                  marginBottom: 24,
                  marginTop: 0,
                }}
              >
                Core References
              </h2>
              <ol style={list}>
                <li>
                  Sutton, M. (1995). <em>Supply by Theft: Does the Market for Second-hand Goods Play a Role in Keeping Crime
                  Figures High?</em> British Journal of Criminology, 35(3), 400-416.
                </li>
                <li>
                  Sutton, M., Johnston, K., and Lockwood, H. (1998). <em>Handling Stolen Goods and Theft: A Market Reduction
                  Approach</em>. Home Office Research Study 178.
                </li>
                <li>
                  Sutton, M., Schneider, J., and Hetherington, S. (2001). <em>Tackling Theft with the Market Reduction
                  Approach</em>. Home Office Crime Reduction Research Series Paper 8.
                </li>
                <li>Clarke, R. V. (1999). <em>Hot Products</em>. Police Research Series Paper 112.</li>
                <li>Felson, M. and Cohen, L. E. (1979). Social change and crime rate trends. <em>American Sociological Review</em>, 44(4), 588-608.</li>
              </ol>
            </div>

            <div
              style={{
                marginTop: 48,
                padding: '20px 24px',
                background: 'rgba(184,150,46,0.07)',
                borderLeft: `3px solid ${GOLD}`,
                borderRadius: 4,
              }}
            >
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: MUTED, margin: 0, lineHeight: 1.7 }}>
                Cite as: Esema, M. (2026). From Market Reduction to Economic Sterilisation: A technology-enabled framework for
                reducing the resale value of stolen goods. Mykei Securities Ltd. Available at: https://michaelesema.com/thesis
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}

// src/pages/PhilosophyPage.tsx
// Route: /philosophy
// Michael Esema's 7 operating principles applied to Mykei Securities

import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const PRINCIPLES = [
  {
    n: '01',
    name: 'Purpose Beyond Profit',
    body: `Mykei exists to reduce the resale confidence of stolen goods. The business is not a single shelf device, a microdot kit, or a blog. Economic Sterilisation is the operating doctrine: make stolen assets harder to trust, harder to monetise, and easier to evidence.`,
  },
  {
    n: '02',
    name: 'First Principles Thinking',
    body: `The underlying criminology is not new. Mike Sutton's Market Reduction Approach already showed that stolen-goods markets help sustain theft. Mykei's first-principles question is different: how do we operationalise that logic today using marking, asset records, evidence workflows and verification across physical and online resale environments?`,
  },
  {
    n: '03',
    name: 'Net 7 Method',
    body: `Every commercial experiment must have a short evidence horizon. The first proof should not be a massive platform or another speculative build. It should be a bounded pilot with a real asset owner, network buyer, insurer-adjacent partner or infrastructure operator, measuring whether Mykei improves asset records, evidence readiness and resale-risk control.`,
  },
  {
    n: '04',
    name: 'Build Your Brand and Protect It',
    body: `"Economic Sterilisation" is a named Mykei framework. The term may be Michael's, but the underlying theory must be anchored honestly to Sutton, MRA, rational choice, situational crime prevention and stolen-goods market literature. Brand protection without claim safety is not protection. It is future damage.`,
  },
  {
    n: '05',
    name: 'Decision Velocity',
    body: `Speed and direction are both required. Decision velocity now means choosing the proof that can change the company's truth fastest: a serious asset-integrity pilot, not another round of beautiful copy. The website, Signal and white paper must follow the same evidence boundary.`,
  },
  {
    n: '06',
    name: 'Hot Dog Stand Effect',
    body: `The founder still has to touch the real problem. For Mykei, that means speaking directly with asset-heavy buyers, site operators, insurers, hire companies, facilities teams and infrastructure owners. The goal is not to look enterprise from a distance. It is to learn the evidence workflow from the people who carry the loss.`,
  },
  {
    n: '07',
    name: 'Asymmetric Endurance',
    body: `Documentation compounds only when it is true. The patent application documents one R&D path. The working paper documents the doctrine. The evidence vault documents what has actually been built. The claim-safety layer prevents public ambition from outrunning proof. That is how Mykei compounds without self-sabotage.`,
  },
]

export default function PhilosophyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.title = 'Operating Philosophy · Michael Esema'
  }, [])

  return (
    <>
      <Helmet>
        <title>Philosophy | Michael Esema 7 Operating Principles</title>
        <meta name="description" content="The 7 operating principles that guide Michael Esema and Mykei Securities Ltd. Frameworks for building, deciding, and operating under uncertainty." />
        <link rel="canonical" href="https://michaelesema.com/philosophy" />
        <meta property="og:title" content="Philosophy | Michael Esema 7 Operating Principles" />
        <meta property="og:url" content="https://michaelesema.com/philosophy" />
      </Helmet>

      <Nav />

      {/* ── Hero ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(100px, 14vw, 180px) clamp(24px, 7vw, 120px) clamp(60px, 8vw, 100px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle dot grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(rgba(198,164,78,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '60%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(198,164,78,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.22em',
              textTransform: 'uppercase' as const,
              color: 'var(--gold-text)',
              marginBottom: 32,
            }}
          >
            Operating Philosophy · Michael Esema
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(44px, 7vw, 90px)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1.06,
              letterSpacing: '-1.5px',
              color: 'var(--text-primary)',
              marginBottom: 32,
            }}
          >
            Seven principles.<br />
            <span style={{ color: 'var(--gold-text)' }}>One company.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              maxWidth: 560,
            }}
          >
            These are the operating rules I built Mykei Securities on. Not slogans, but constraints that keep doctrine, product, evidence and public claims aligned.
          </motion.p>
        </div>
      </motion.section>

      {/* ── Rule ── */}
      <div style={{ height: 1, background: 'var(--dark-border)', margin: '0 clamp(24px, 7vw, 120px)' }} />

      {/* ── Principles ── */}
      <section style={{ padding: 'clamp(60px, 8vw, 120px) clamp(24px, 7vw, 120px)' }}>
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(60px, 8vw, 100px) 1fr',
              gap: 'clamp(24px, 4vw, 64px)',
              paddingBottom: 'clamp(48px, 6vw, 80px)',
              marginBottom: 'clamp(48px, 6vw, 80px)',
              borderBottom: i < PRINCIPLES.length - 1 ? '1px solid var(--dark-border)' : 'none',
            }}
          >
            {/* Number */}
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(11px, 1.4vw, 13px)',
              letterSpacing: '0.15em',
              color: 'var(--gold-text)',
              paddingTop: 6,
            }}>
              {p.n}
            </div>

            {/* Content */}
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(22px, 3vw, 34px)',
                fontWeight: 600,
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                marginBottom: 20,
                lineHeight: 1.2,
              }}>
                {p.name}
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.5vw, 16px)',
                lineHeight: 1.85,
                color: 'var(--text-secondary)',
                maxWidth: 640,
              }}>
                {p.body}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── Footer link ── */}
      <div style={{
        padding: 'clamp(40px, 6vw, 80px) clamp(24px, 7vw, 120px)',
        borderTop: '1px solid var(--dark-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: 20,
      }}>
        <a
          href="/"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-muted)',
            textDecoration: 'none',
            transition: 'color 0.25s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          ← Back to michaelesema.com
        </a>
        <a
          href="https://mykei.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-muted)',
            textDecoration: 'none',
            transition: 'color 0.25s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          mykei.io ↗
        </a>
      </div>

      <Footer />
    </>
  )
}

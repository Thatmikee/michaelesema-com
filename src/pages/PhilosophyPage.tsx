// src/pages/PhilosophyPage.tsx
// Route: /philosophy
// Michael Esema's 7 operating principles — applied to Mykei Securities

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const PRINCIPLES = [
  {
    n: '01',
    name: 'Purpose Beyond Profit',
    body: `Mykei exists to make retail theft economically pointless — not to sell security hardware. The doctrine of Economic Sterilisation is a structural argument: if you remove the profit motive from crime, crime declines. The ADN-1 isn't measured by units sold. It's measured by whether organised retail crime stops paying in every store it enters. Revenue follows that outcome. It doesn't lead it.`,
  },
  {
    n: '02',
    name: 'First Principles Thinking',
    body: `Every existing retail security solution was built on one assumption: deterrence works. Cameras, tags, guards — all of them raise the cost of stealing. None of them ask the prior question: why does theft happen at all? The answer is that it pays. A thief sweeps cosmetics, sells them online, and clears a margin most legitimate businesses can't match. The ADN-1 was built by rejecting the deterrence assumption entirely and asking what actually needs to happen for theft to stop making sense. The answer is: remove the resale value. Everything else followed from that.`,
  },
  {
    n: '03',
    name: 'Net 7 Method',
    body: `Every cost and revenue decision at Mykei is modelled against a 7-day cash horizon. £149 setup + £40/month wasn't chosen arbitrarily. It was chosen because at 7 days of prevented loss — one bulk-sweep event — any independent retailer breaks even. Financial discipline is structural to the product. If the pricing doesn't work at the smallest viable customer, the business doesn't work. We don't model for investors. We model for the retailer who needs to know the answer before they sign anything.`,
  },
  {
    n: '04',
    name: 'Build Your Brand — and Protect It',
    body: `"Economic Sterilisation" is a coined term. It has a Wiktionary entry, a published white paper, a 17-claim patent application, and cross-referenced Schema.org definitions on two domains. Brand protection isn't deferred until the business is profitable — it's built alongside the product, from day one. The ADN-1 is named. The doctrine is named. The registry is named. Every term is documented, dated, and published. Names that exist in the record are harder to take than products that exist in a warehouse.`,
  },
  {
    n: '05',
    name: 'Decision Velocity',
    body: `Speed and direction are both required. A correct decision made slowly is still a loss. The Manchester Alpha Pilot makes every decision concrete: five retailers, Q2 2026, fixed pricing, direct founder support, no lock-in. There is no ambiguity in the offer and no waiting period in the response. Decision velocity means setting the terms of engagement before anyone asks, then holding to them. When someone asks "how does this work?", the answer is already live at mykei.io/pilot.`,
  },
  {
    n: '06',
    name: 'Hot Dog Stand Effect',
    body: `The best retailers know their customers by name. The best founders know their first customers by name too. In the pilot, every retailer gets a direct line to me. Not a support ticket, not a helpdesk — me. I stand in the store. I understand the problem from the counter, not from a pitch deck. Servant leadership in a startup means the founder does the hardest, most unglamorous work first. That's the hot dog stand effect: you build the stand, run the stand, clean the stand, before you hire anyone to help you run it.`,
  },
  {
    n: '07',
    name: 'Asymmetric Endurance',
    body: `The ADN-1 works while you sleep. Detection, marking, cloud record, marketplace flagging — fully automated, no staff intervention required. That's asymmetric endurance: the system's output doesn't scale with the hours you put in. Documentation is the product. The Forensic Digital Twin is an immutable legal record. The Toxic Inventory Registry is a permanent database. The patent application documents the invention. The white paper documents the doctrine. Every document compounds. The work done today still operates in court five years from now.`,
  },
]

export default function PhilosophyPage() {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.title = 'Operating Philosophy · Michael Esema'
  }, [])

  useEffect(() => {
    const dot = cursorDotRef.current
    const ring = cursorRingRef.current
    if (!dot || !ring) return
    let ringX = 0, ringY = 0, dotX = 0, dotY = 0
    let animId: number
    const move = (e: MouseEvent) => { dotX = e.clientX; dotY = e.clientY }
    const animate = () => {
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    document.addEventListener('mousemove', move)
    return () => { cancelAnimationFrame(animId); document.removeEventListener('mousemove', move) }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

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
              color: 'var(--gold)',
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
            <span style={{ color: 'var(--gold)' }}>One company.</span>
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
            These are the operating rules I built Mykei Securities on. Not aspirations — active constraints that shape every decision from product architecture to pilot pricing.
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
              color: 'var(--gold)',
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
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
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
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          mykei.io ↗
        </a>
      </div>

      <Footer />
    </>
  )
}

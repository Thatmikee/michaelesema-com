import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

export default function SystemExplained() {
  return (
    <section id="doctrine" style={{ background: 'var(--bg-section)', padding: 'clamp(80px, 10vw, 130px) clamp(24px, 7vw, 80px)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'var(--border)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="doctrine-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 'clamp(48px, 7vw, 110px)', alignItems: 'start' }}>

          {/* Left: large title */}
          <FadeIn>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(42px, 5.5vw, 72px)',
              fontWeight: 400,
              lineHeight: 1.0,
              color: 'var(--text-primary)',
              position: 'sticky',
              top: 80,
            }}>
              The<br /><em style={{ color: 'var(--red-text)', fontStyle: 'italic' }}>Doctrine</em>
            </h2>
          </FadeIn>

          {/* Right: flowing prose */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <FadeIn delay={0.1}>
              <p style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', fontWeight: 400, lineHeight: 1.75, color: 'var(--text-primary)', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                Economic Sterilisation came from a simple observation. Most deterrence in retail
                tries to make theft harder. Locks, guards, cameras. It does not try to make it pointless.
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p style={{ fontSize: 'clamp(14px, 1.35vw, 16px)', lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 300 }}>
                Mike Sutton's research showed in 1998 that stolen goods need a market to move through.
                If that market disappears, the incentive disappears. The doctrine I built is an attempt
                to take that seriously at an operational level: forensic identity on goods, registry
                infrastructure, resale interdiction. Not as security theatre. As market surgery.
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p style={{ fontSize: 'clamp(14px, 1.35vw, 16px)', lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 300 }}>
                The thesis is written. The patent application is filed under GB2606630.8 at the UK
                Intellectual Property Office. The company is registered. Every piece of this came
                from a conviction formed inside institutions that showed me exactly what happens when
                systems are built to record failure instead of prevent it.
              </p>
            </FadeIn>

            <FadeIn delay={0.28}>
              <p style={{ fontSize: 'clamp(14px, 1.35vw, 16px)', lineHeight: 1.95, color: 'var(--text-secondary)', fontWeight: 300 }}>
                The dream is an institution. Not a product line. Not a security company with a clever
                name. An intellectual contribution that outlasts all the individual proofs of concept
                and still has the same argument at its centre: remove the commercial reward from the
                crime and the crime loses its logic.
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <a href="/thesis" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--red-text)', textDecoration: 'none',
                marginTop: 4, transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Read the thesis
                <span aria-hidden="true">→</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .doctrine-grid { grid-template-columns: 1fr !important; }
          .doctrine-grid h2 { position: static !important; font-size: clamp(40px, 10vw, 60px) !important; margin-bottom: 32px; }
        }
      `}</style>
    </section>
  )
}

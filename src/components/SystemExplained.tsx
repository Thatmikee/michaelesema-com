import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

const AREAS = [
  { label: 'Retail Crime Economics', detail: 'Why stolen goods hold value, and what removes that value' },
  { label: 'Economic Sterilisation', detail: 'The doctrine that makes theft commercially pointless' },
  { label: 'Forensic Asset Marking', detail: 'Physical identity on goods that survives theft' },
  { label: 'Asset Registry Systems', detail: 'Infrastructure that proves ownership and tracks provenance' },
  { label: 'Market Reduction Theory', detail: 'Built on Mike Sutton\'s 1998 research into stolen-goods markets' },
  { label: 'Nigeria Infrastructure', detail: 'Asset-marking and registry programmes for Nigerian owners' },
]

export default function SystemExplained() {
  return (
    <section id="doctrine" style={{
      background: '#FFFFFF',
      padding: 'clamp(72px, 9vw, 110px) clamp(32px, 8vw, 100px)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="doctrine-header-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 'clamp(48px, 7vw, 100px)',
          alignItems: 'start',
        }}>

          {/* Left: heading */}
          <FadeIn>
            <div>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(11px, 1vw, 13px)',
                color: '#A01818',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 20,
              }}>
                What I work on
              </p>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 3.8vw, 48px)',
                fontWeight: 800,
                color: '#1A1A1A',
                lineHeight: 1.07,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}>
                Areas of Focus
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.35vw, 16px)',
                color: '#666',
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: 320,
              }}>
                Here are the problem areas I research, build in, and write about. Each one
                connects to the central question: why does theft pay, and how do you make it stop?
              </p>
            </div>
          </FadeIn>

          {/* Right: areas grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {AREAS.map((area, i) => (
              <FadeIn key={area.label} delay={0.08 + i * 0.06}>
                <div style={{
                  background: '#F4F4F4',
                  padding: '22px 24px',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#EAEAEA')}
                onMouseLeave={e => (e.currentTarget.style.background = '#F4F4F4')}
                >
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(13px, 1.2vw, 14.5px)',
                    color: '#1A1A1A',
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}>
                    {area.label}
                  </p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12.5,
                    color: '#777',
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}>
                    {area.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .doctrine-header-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .doctrine-header-grid > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

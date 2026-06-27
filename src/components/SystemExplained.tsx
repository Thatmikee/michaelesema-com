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
  { label: 'Economic Sterilisation', detail: 'The doctrine that removes the commercial incentive for theft' },
  { label: 'Retail Crime Deterrence', detail: 'Why retail crime persists and how to make it stop paying' },
  { label: 'Active Defense Node', detail: 'Patent-pending forensic deterrence hardware for retail environments' },
  { label: 'Asset Marking Intelligence', detail: 'Physical and digital identity on goods that survives theft' },
  { label: 'Security Systems', detail: 'Infrastructure that proves ownership and tracks provenance at scale' },
  { label: 'Research and Strategy', detail: 'Built on Mike Sutton\'s Market Reduction Approach, extended into doctrine' },
]

export default function SystemExplained() {
  return (
    <section id="doctrine" style={{
      background: '#ffffff',
      padding: 'clamp(80px, 10vw, 120px) clamp(32px, 8vw, 100px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ghost watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        left: '-2%', top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(80px, 15vw, 220px)',
        color: 'rgba(0,0,0,0.03)',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-3px',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}>
        Focus
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="doctrine-header-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: 'clamp(48px, 7vw, 100px)',
          alignItems: 'start',
        }}>

          <FadeIn>
            <div>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 3.8vw, 48px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.07,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                marginBottom: 24,
              }}>
                Focus Areas
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.35vw, 16px)',
                color: '#666',
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: 300,
              }}>
                The problem areas I research, build in, and write about. Each connects to the
                central question: why does theft pay, and how do you make it stop?
              </p>
            </div>
          </FadeIn>

          {/* 6 focus area tiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {AREAS.map((area, i) => (
              <FadeIn key={area.label} delay={0.06 + i * 0.05}>
                <div style={{
                  background: '#f4f4f2',
                  padding: '22px 24px',
                  borderRadius: 12,
                  borderLeft: '2px solid transparent',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderLeftColor = '#2457ff')}
                onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderLeftColor = 'transparent')}
                >
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(12.5px, 1.1vw, 14px)',
                    color: '#111111',
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}>
                    {area.label}
                  </p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 12.5,
                    color: '#555',
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

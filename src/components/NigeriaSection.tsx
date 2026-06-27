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

export default function NigeriaSection() {
  return (
    <section id="nigeria" style={{
      background: '#FFFFFF',
      padding: 'clamp(72px, 9vw, 110px) clamp(32px, 8vw, 100px)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="nigeria-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          <div>
            <FadeIn>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 3.8vw, 48px)',
                fontWeight: 800,
                color: '#1A1A1A',
                lineHeight: 1.07,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                marginBottom: 28,
              }}>
                Nigeria made me.<br />
                <span style={{ color: '#4d7cff' }}>I have not forgotten it.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: '#555',
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: 18,
                maxWidth: 500,
              }}>
                When a solar battery, an inverter, a generator or a cable reel is stolen in
                Nigeria, it usually becomes anonymous within hours. No serial record, no
                photographs, no proof of ownership. It surfaces in an open market or a repair
                shop, and the owner has nothing to point to. That anonymity is what makes the
                theft worth doing.
              </p>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: '#555',
                lineHeight: 1.85,
                fontWeight: 300,
                marginBottom: 36,
                maxWidth: 500,
              }}>
                Probata is what I am designing against that: a registry-first programme for
                Nigerian asset owners. Nigeria raised me, through Benson Idahosa University
                and the Nigerian Defence Academy. Every 12 June I mark Democracy Day with the
                same wish: opportunity and a better tomorrow for every Nigerian.
              </p>
              <a
                href="/protocol"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  background: '#1A1A1A',
                  color: '#fff',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  textDecoration: 'none',
                  borderRadius: 3,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#4d7cff')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = '#1A1A1A')}
              >
                See the Probata protocol →
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <figure style={{ margin: '0 auto', position: 'relative', maxWidth: 380 }}>
              <div style={{
                position: 'absolute',
                top: -12, left: -12,
                bottom: 12, right: 12,
                border: '2px solid #4d7cff',
                pointerEvents: 'none',
                opacity: 0.35,
              }} />
              <img
                src="/nigeria-democracy-day.jpg"
                alt="Democracy Day greeting card from Michael Esema with the Nigerian flag"
                loading="lazy"
                style={{
                  width: '100%',
                  display: 'block',
                  position: 'relative',
                }}
              />
              <figcaption style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#767676',
                marginTop: 14,
              }}>
                The greeting I share with the Nigerian community every 12 June
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nigeria-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

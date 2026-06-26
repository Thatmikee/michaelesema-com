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
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

const STATS = [
  { label: '3', sub: 'Degrees earned' },
  { label: '1', sub: 'Patent filed' },
]

export default function About() {
  return (
    <section id="about" style={{
      background: '#F2F2F2',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(72px, 9vw, 110px) clamp(32px, 8vw, 100px)',
    }}>

      {/* Watermark */}
      <div style={{
        position: 'absolute',
        right: '-2%', top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(72px, 14vw, 200px)',
        color: 'rgba(0,0,0,0.04)',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-3px',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}>
        About me
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <FadeIn>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(11px, 1vw, 13px)',
            color: '#A01818',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: 52,
          }}>
            About me
          </p>
        </FadeIn>

        <div className="about-main-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          gap: 'clamp(48px, 7vw, 90px)',
          alignItems: 'start',
        }}>

          {/* Photo with geometric accent */}
          <FadeIn delay={0.12}>
            <figure style={{ position: 'relative', margin: 0, paddingBottom: 20, paddingRight: 20 }}>
              {/* Red geometric block */}
              <div style={{
                position: 'absolute',
                top: -18, right: -18,
                width: '72%', height: '72%',
                background: '#A01818',
                zIndex: 0,
              }} />
              <img
                src="/michael-esema-hero.jpg"
                alt="Michael Esema, founder of Mykei Securities Ltd"
                style={{
                  width: '100%',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  maxHeight: 500,
                }}
              />
            </figure>
          </FadeIn>

          {/* Bio and stats */}
          <FadeIn delay={0.22}>
            <div>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 42px)',
                fontWeight: 800,
                color: '#1A1A1A',
                lineHeight: 1.08,
                marginBottom: 28,
                textTransform: 'uppercase',
                letterSpacing: '-0.5px',
              }}>
                About me
              </h2>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: '#555',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: 18,
              }}>
                Michael Esema grew up in Abuja. He studied at Benson Idahosa University in Benin City,
                earned an MBA from the Nigerian Defence Academy in Kaduna, and completed an MSc in
                International Business Management at Manchester Metropolitan University in 2024.
              </p>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: '#555',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: 18,
              }}>
                Before any of that, he was building things. Student government at BIU, emergency
                response work with NEMA, running B's Hive and the Silent Lounge. Each taught
                him the same lesson: institutions move slowly, so the people inside them have to move first.
              </p>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: '#555',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: 44,
              }}>
                In Manchester he walked into shops. Corner stores, jewellers, off-licences. Sat with
                owners absorbing losses every week. The question Mike Sutton's research first raised
                and the industry had stopped asking: why does theft pay? His answer became the doctrine.
                The patent is filed. The company is registered. The doctorate is the next step.
              </p>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {STATS.map(stat => (
                  <div key={stat.sub} style={{
                    background: '#1A1A1A',
                    padding: '22px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    minWidth: 140,
                  }}>
                    <span style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 800, fontSize: 36,
                      color: '#A01818', lineHeight: 1,
                    }}>
                      {stat.label}
                    </span>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12.5, color: 'rgba(255,255,255,0.6)',
                      fontWeight: 400, letterSpacing: '0.04em',
                    }}>
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

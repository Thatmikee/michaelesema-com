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

const PROOF_CARDS = [
  { title: 'Founder', label: 'Mykei Securities Ltd' },
  { title: 'Patent filed', label: 'UK IPO, March 2026' },
  { title: 'Research', label: 'Security, incentives and asset integrity' },
  { title: 'Builder', label: 'From idea to prototype' },
]

export default function About() {
  return (
    <section id="about" style={{
      background: 'var(--page-bg)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(88px, 11vw, 140px) clamp(32px, 8vw, 100px)',
    }}>

      {/* Large pale ghost heading */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        right: '4%', top: 'clamp(28px, 5vw, 56px)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(64px, 13vw, 190px)',
        color: 'rgba(14,18,38,0.045)',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-4px',
        lineHeight: 1,
      }}>
        About me
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="about-main-grid" style={{
          display: 'grid',
          gridTemplateColumns: '0.95fr 1.15fr',
          gap: 'clamp(48px, 7vw, 96px)',
          alignItems: 'center',
        }}>

          {/* Portrait framed by geometric blocks */}
          <FadeIn delay={0.1}>
            <figure className="about-portrait" style={{ position: 'relative', margin: 0, padding: '26px 0 26px 26px' }}>
              {/* Yellow block (signature, behind, lower-left) */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                left: 0, bottom: 0,
                width: '74%', height: '82%',
                background: 'var(--yellow)',
                zIndex: 0,
              }} />
              {/* Navy block (depth, behind, upper-right) */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                right: -14, top: 0,
                width: '34%', height: '46%',
                background: 'var(--navy)',
                zIndex: 0,
              }} />
              <img
                src="/michael-esema-hero.jpg"
                alt="Portrait of Michael Esema, founder of Mykei Securities Ltd, based in Manchester"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  display: 'block',
                  aspectRatio: '4 / 5',
                  objectFit: 'cover',
                  objectPosition: 'center 12%',
                  borderRadius: 4,
                }}
              />
            </figure>
          </FadeIn>

          {/* Bio and proof cards */}
          <FadeIn delay={0.2}>
            <div>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(12px, 1.1vw, 14px)',
                color: 'var(--accent)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 22,
              }}>
                About me
              </p>

              {[
                'Michael Esema is a founder, researcher and builder behind Mykei Securities Ltd, a UK-first security venture working on asset protection, resale-driven theft and evidence-led prevention.',
                'His work asks a practical question: what happens after something is stolen, and how can that resale route be made weaker before the theft happens?',
                'He grew up in Nigeria, studied Accounting at Benson Idahosa University, completed an MBA at the Nigerian Defence Academy, and later earned an MSc in International Business Management at Manchester Metropolitan University. Before Mykei, his path moved through student leadership, emergency-management exposure, hospitality operations, finance and frontline support work in the UK.',
                'The common thread is practical systems: where they fail, who they leave exposed, and how they can be redesigned so harm is harder to profit from.',
              ].map((para, i) => (
                <p key={i} style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(14px, 1.35vw, 16px)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.85,
                  fontWeight: 300,
                  marginBottom: i === 3 ? 40 : 18,
                }}>
                  {para}
                </p>
              ))}

              {/* 4 compact proof cards */}
              <div className="proof-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 12,
              }}>
                {PROOF_CARDS.map(card => (
                  <div key={card.title} style={{
                    background: 'var(--navy)',
                    padding: '16px 18px',
                    borderRadius: 12,
                  }}>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 800,
                      fontSize: 'clamp(13px, 1.2vw, 15px)',
                      color: 'var(--accent)',
                      lineHeight: 1.2,
                      marginBottom: 6,
                    }}>
                      {card.title}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: 400,
                      lineHeight: 1.45,
                    }}>
                      {card.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-main-grid { grid-template-columns: 1fr !important; }
          .about-portrait { max-width: 420px; }
        }
        @media (max-width: 420px) {
          .proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

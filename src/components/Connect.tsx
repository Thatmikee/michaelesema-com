import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  )
}

const LINKS = [
  { label: 'LinkedIn', sub: 'Writing about doctrine, theft economics, and the build', href: 'https://www.linkedin.com/in/michaelesema' },
  { label: 'The Signal', sub: 'Mykei field notes and the real story', href: 'https://mykei.io/signal' },
  { label: 'Mykei.io', sub: 'The company behind the doctrine', href: 'https://mykei.io' },
]

export default function Connect() {
  return (
    <section id="connect" style={{
      background: '#0A0B18',
      padding: 'clamp(72px, 9vw, 110px) clamp(32px, 8vw, 100px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(160,24,24,0.06) 1px, transparent 1px)`,
        backgroundSize: '44px 44px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="connect-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 7vw, 100px)',
          alignItems: 'start',
        }}>

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
                Contact
              </p>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.07,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: 28,
              }}>
                I write.<br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>I read everything sent to me.</span>
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 300,
                maxWidth: 380,
              }}>
                No newsletter. No funnel. I write on LinkedIn about Economic Sterilisation,
                stolen-goods markets, and building a doctrine-company from Manchester.
                The Signal carries field notes from the Mykei side.
                If you have something real to say, I will read it.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: 8 }}>
              {LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '24px 0',
                    borderBottom: i < LINKS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <div>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(16px, 1.6vw, 20px)',
                      color: '#FFFFFF',
                      marginBottom: 5,
                      letterSpacing: '-0.2px',
                    }}>
                      {link.label}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.4)',
                      fontWeight: 300,
                    }}>
                      {link.sub}
                    </p>
                  </div>
                  <span style={{ color: '#A01818', fontSize: 20, flexShrink: 0, marginTop: 2 }}>↗</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .connect-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

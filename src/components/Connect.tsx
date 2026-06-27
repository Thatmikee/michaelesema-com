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
  {
    label: 'LinkedIn',
    sub: 'Investors, researchers, and retail security stakeholders',
    href: 'https://www.linkedin.com/in/michaelesema',
    external: true,
  },
  {
    label: 'The Signal',
    sub: 'Field notes from the Mykei build, published on mykei.io',
    href: 'https://mykei.io/signal',
    external: true,
  },
  {
    label: 'Mykei.io',
    sub: 'The company, the doctrine, and the R&D pathway',
    href: 'https://mykei.io',
    external: true,
  },
]

export default function Connect() {
  return (
    <section id="connect" style={{
      background: '#f4f4f2',
      padding: 'clamp(80px, 10vw, 120px) clamp(32px, 8vw, 100px)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="connect-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 7vw, 100px)',
          alignItems: 'start',
        }}>

          <FadeIn>
            <div>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.07,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                color: '#111111',
                marginBottom: 28,
              }}>
                Let&apos;s talk<br />
                about something<br />
                <span style={{ color: '#4d7cff' }}>worth building.</span>
              </h2>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                lineHeight: 1.9,
                color: '#666',
                fontWeight: 300,
                maxWidth: 380,
              }}>
                Investors, researchers, retail and security professionals,
                journalists covering organised crime and loss prevention,
                founders building nearby. If you have something real to say,
                I will read it.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: 8 }}>
              {LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  style={{
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '24px 0',
                    borderBottom: i < LINKS.length - 1 ? '1px solid rgba(0,0,0,0.09)' : 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.55')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  <div>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(16px, 1.6vw, 20px)',
                      color: '#111111',
                      marginBottom: 5,
                      letterSpacing: '-0.2px',
                    }}>
                      {link.label}
                    </p>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13,
                      color: '#888',
                      fontWeight: 300,
                    }}>
                      {link.sub}
                    </p>
                  </div>
                  <span style={{ color: '#4d7cff', fontSize: 20, flexShrink: 0, marginTop: 2 }}>&#8599;</span>
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

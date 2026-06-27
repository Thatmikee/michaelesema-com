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
  { label: 'LinkedIn',  sub: 'Where I post and connect', href: 'https://www.linkedin.com/in/michaelesema', external: true },
  { label: 'Mykei.io',  sub: 'The company and the R&D pathway', href: 'https://mykei.io', external: true },
  { label: 'Email',     sub: 'hello@michaelesema.com', href: 'mailto:hello@michaelesema.com', external: false },
  { label: 'Paper',     sub: 'From Market Reduction to Economic Sterilisation', href: '/thesis', external: false },
]

export default function Connect() {
  return (
    <section id="connect" style={{
      background: 'var(--page-bg)',
      padding: 'clamp(80px, 10vw, 124px) clamp(32px, 8vw, 100px)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="connect-grid" style={{
        maxWidth: 1100, margin: '0 auto',
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
              color: 'var(--text-primary)',
              marginBottom: 26,
            }}>
              Let&apos;s talk about<br />
              <span style={{ color: 'var(--accent)' }}>work worth building.</span>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              fontWeight: 300,
              maxWidth: 380,
            }}>
              Investors, researchers, retail and security professionals, and journalists covering
              organised crime and loss prevention. If there is something real to discuss, I would
              like to hear it.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 6 }}>
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="connect-row"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '22px 0',
                  borderBottom: i < LINKS.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.7vw, 21px)',
                    color: 'var(--text-primary)',
                    marginBottom: 5,
                    letterSpacing: '-0.2px',
                  }}>
                    {link.label}
                  </p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13,
                    color: 'var(--text-muted)',
                    fontWeight: 300,
                  }}>
                    {link.sub}
                  </p>
                </div>
                <span className="connect-mark" style={{
                  width: 30, height: 30, flexShrink: 0,
                  borderRadius: '50%',
                  border: '1.5px solid var(--border-mid)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'background 0.25s, color 0.25s, border-color 0.25s, transform 0.25s',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    {link.external
                      ? <path d="M7 17 17 7M9 7h8v8" />
                      : <path d="M5 12h14M13 6l6 6-6 6" />}
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        .connect-row:hover .connect-mark {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
          transform: translateX(2px);
        }
        @media (max-width: 768px) {
          .connect-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .connect-mark { transition: none !important; }
        }
      `}</style>
    </section>
  )
}

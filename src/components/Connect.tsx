import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const LINKS = [
  {
    label: 'LinkedIn',
    sub: 'Writing about doctrine, theft economics, and the build',
    href: 'https://www.linkedin.com/in/michaelesema',
    external: true,
  },
  {
    label: 'The Signal',
    sub: 'Mykei field notes, product updates, and the real story',
    href: 'https://mykei.io/signal',
    external: true,
  },
  {
    label: 'Mykei.io',
    sub: 'The company behind the doctrine',
    href: 'https://mykei.io',
    external: true,
  },
]

export default function Connect() {
  return (
    <section
      id="connect"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(80px, 11vw, 130px) clamp(24px, 7vw, 80px)',
        position: 'relative',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px, 7vw, 100px)', alignItems: 'start' }} className="connect-grid">

          {/* Left: editorial statement */}
          <div>
            <FadeIn>
              <span style={{
                display: 'block',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--red-text)',
                marginBottom: 20,
              }}>
                Correspondence
              </span>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 400,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: 28,
              }}>
                I write.<br />
                <em style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>I read everything sent to me.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p style={{
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                lineHeight: 1.9,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                maxWidth: 400,
              }}>
                No newsletter. No funnel. I write on LinkedIn about Economic Sterilisation,
                stolen-goods markets, and what it looks like to build a doctrine-company from
                Manchester. The Signal carries field notes from the Mykei side.
                If you have something real to say, I will read it.
              </p>
            </FadeIn>
          </div>

          {/* Right: link list */}
          <FadeIn delay={0.15}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {LINKS.map((link, i) => (
                <li
                  key={link.href}
                  style={{ borderBottom: i < LINKS.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '22px 0',
                      textDecoration: 'none',
                      gap: 16,
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    <div>
                      <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(17px, 1.6vw, 20px)',
                        fontWeight: 400,
                        color: 'var(--text-primary)',
                        marginBottom: 4,
                      }}>
                        {link.label}
                      </p>
                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 12.5,
                        color: 'var(--text-muted)',
                        fontWeight: 300,
                      }}>
                        {link.sub}
                      </p>
                    </div>
                    <span style={{ color: 'var(--red-text)', fontSize: 16, flexShrink: 0 }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .connect-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    tag: 'Product',
    title: 'ADN-1 Active Forensic Defence Node',
    body: 'A shelf-mounted device that detects bulk-sweep theft in under two seconds and deploys a forensic DNA mist onto stolen goods automatically. Every event logs to a cloud database with a timestamp and store ID. No staff. No panic button. No guesswork.',
    meta: 'Manchester Alpha Pilot — Q2 2026',
    href: 'https://mykei.io/adn-1',
    external: true,
  },
  {
    tag: 'Intellectual Property',
    title: 'Patent No. 2606630.8 (UK)',
    body: 'Filed 23 March 2026 at the UK Intellectual Property Office. Seventeen claims covering the detection architecture, deployment mechanism, and cloud-logging chain of evidence. The doctrine is the product. The patent protects the doctrine.',
    meta: 'UK IPO · 17 Claims · Filed 2026',
    href: 'https://mykei.io/certification',
    external: true,
  },
  {
    tag: 'Doctrine',
    title: 'Economic Sterilisation',
    body: 'The principle that organised retail crime can be made structurally unprofitable by removing the resale value of stolen goods rather than attempting to prevent theft at point of sale. Coined 2025. White paper published. Patent filed. Registry live.',
    meta: 'White Paper · michaelesema.com/thesis',
    href: '/thesis',
    external: false,
  },
  {
    tag: 'Pilot',
    title: 'Manchester Founding Partner Programme',
    body: 'Five independent retailers in Greater Manchester signed as founding partners. Permanent pricing locked. Direct founder support. Every result from this pilot becomes the evidence base that changes UK retail security policy.',
    meta: '5 Partners · £149 setup · £40/month',
    href: 'https://mykei.io/pilot',
    external: true,
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(72px, 10vw, 120px) clamp(24px, 7vw, 80px)',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'var(--border)' }} />
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'block' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>The work</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 3.5vw, 42px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: 56,
          }}>
            What I have built.
          </h2>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1px, 0.15vw, 1px)',
          border: '1px solid var(--border)',
        }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block',
                  padding: 'clamp(28px, 4vw, 44px)',
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                  textDecoration: 'none',
                  background: 'var(--bg)',
                  transition: 'background 0.2s',
                  height: '100%',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-warm)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
              >
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: 14,
                }}>
                  {item.tag}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(17px, 1.8vw, 20px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(13px, 1.3vw, 14.5px)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: 20,
                }}>
                  {item.body}
                </p>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                }}>
                  {item.meta}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

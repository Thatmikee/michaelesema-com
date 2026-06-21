import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    num: '01',
    title: 'Mykei Securities Ltd',
    body: 'A UK company built on one idea: that retail theft is a market problem, not a security one. The doctrine is Economic Sterilisation. The first R&D pathway is the Active Deterrence Node, a patent-pending forensic deterrence device.',
    href: 'https://mykei.io',
    external: true,
  },
  {
    num: '02',
    title: 'Economic Sterilisation',
    body: 'A framework built from Mike Sutton\'s Market Reduction Approach. Make stolen goods commercially worthless and the incentive for theft dissolves. Written as a thesis, filed as a patent, now being built as infrastructure.',
    href: '/thesis',
    external: false,
  },
  {
    num: '03',
    title: 'The Signal',
    body: 'Field notes from the build. How the thinking developed, what changed, what the data shows. The actual process as it is happening, published on the Mykei website.',
    href: 'https://mykei.io/signal',
    external: true,
  },
  {
    num: '04',
    title: 'Probata',
    body: 'A registry-first programme in early design for Nigerian asset owners. In Nigeria, high-value equipment becomes anonymous within hours of theft. Probata is the proof layer, the record that survives the disappearance.',
    href: '/protocol',
    external: false,
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--bg)', padding: 'clamp(44px, 6vw, 72px) clamp(24px, 7vw, 80px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <FadeIn>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: 'clamp(40px, 5vw, 64px)', lineHeight: 1.15 }}>
            What I am doing.
          </h2>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: 'clamp(20px, 3vw, 48px)',
                  padding: 'clamp(24px, 3vw, 36px) 0',
                  borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
                  textDecoration: 'none',
                  alignItems: 'start',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                className="work-row"
              >
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  paddingTop: 4,
                }}>
                  {item.num}
                </span>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'start' }} className="work-inner">
                  <div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: 10,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 'clamp(13.5px, 1.3vw, 15px)',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.85,
                      fontWeight: 300,
                      maxWidth: 560,
                    }}>
                      {item.body}
                    </p>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: 14, flexShrink: 0, paddingTop: 4 }}>
                    {item.external ? '↗' : '→'}
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .work-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

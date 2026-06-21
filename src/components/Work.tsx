import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    tag: 'Company',
    title: 'Mykei Securities Ltd',
    body: 'A UK company (No. 16984969) built on one idea: that retail theft is a market problem, not a security one. The doctrine is Economic Sterilisation. The first R&D pathway is the Active Deterrence Node, a patent-pending forensic deterrence device.',
    href: 'https://mykei.io',
    external: true,
    featured: true,
  },
  {
    tag: 'Doctrine',
    title: 'Economic Sterilisation',
    body: 'A framework built from Mike Sutton\'s Market Reduction Approach. Make stolen goods commercially worthless and the incentive for theft dissolves. Written as a thesis, filed as a patent, and now being built as infrastructure.',
    href: '/thesis',
    external: false,
    featured: false,
  },
  {
    tag: 'Writing',
    title: 'The Signal',
    body: 'Field notes from the build. How the thinking developed, what changed, what the data shows. Not polished post-mortems. The actual process as it is happening, published on the Mykei website.',
    href: 'https://mykei.io/signal',
    external: true,
    featured: false,
  },
  {
    tag: 'Nigeria',
    title: 'Probata',
    body: 'A registry-first programme in early design for Nigerian asset owners. In Nigeria, high-value equipment becomes anonymous within hours of theft. Probata is the proof layer, the record that survives the disappearance.',
    href: '/protocol',
    external: false,
    featured: false,
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ background: 'var(--bg)', padding: 'clamp(44px, 6vw, 72px) clamp(24px, 7vw, 80px)', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--red)' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red-text)' }}>
              Work
            </span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: 56, lineHeight: 1.15 }}>
            What I am doing.
          </h2>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'clamp(20px, 2.5vw, 32px)' }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block', position: 'relative',
                  padding: 'clamp(24px, 3.5vw, 38px)',
                  textDecoration: 'none',
                  background: item.featured ? 'var(--bg-surface)' : 'var(--bg-section)',
                  height: '100%',
                  border: item.featured ? `1px solid rgba(160,24,24,0.2)` : '1px solid var(--border)',
                  transition: 'background 0.25s, border-color 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg-surface)'
                  e.currentTarget.style.borderColor = 'rgba(160,24,24,0.25)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = item.featured ? 'var(--bg-surface)' : 'var(--bg-section)'
                  e.currentTarget.style.borderColor = item.featured ? 'rgba(160,24,24,0.2)' : 'var(--border)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red-text)' }}>
                    {item.tag}
                  </span>
                  {item.external && <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>↗</span>}
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 1.7vw, 20px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: 14 }}>
                  {item.title}
                </h3>

                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(13px, 1.2vw, 14px)', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300 }}>
                  {item.body}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

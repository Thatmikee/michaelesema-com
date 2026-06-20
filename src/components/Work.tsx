import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BorderBeam from './ui/BorderBeam'

const items = [
  {
    tag: 'Patent-pending',
    title: 'ADN-1 Active Defence Node',
    body: 'An R&D pathway for event-triggered marking and registry-linked evidence. Controlled prototype demonstrations exist. Field validation is still required before any deployment claims.',
    meta: 'UK Patent App. 2606630.8 · Prototype stage',
    href: 'https://mykei.io/adn-1',
    external: true,
    featured: true,
  },
  {
    tag: 'Intellectual property',
    title: 'UK Patent Application 2606630.8',
    body: 'Filed 23 March 2026 at the UK Intellectual Property Office. Seventeen claims covering the detection architecture, deployment mechanism and cloud-logging evidence path. This is an application, not a granted patent.',
    meta: 'UK IPO · Filed 23 March 2026 · 17 claims',
    href: 'https://mykei.io',
    external: true,
    featured: false,
  },
  {
    tag: 'Doctrine',
    title: 'Economic Sterilisation',
    body: "The named framework behind everything here. Published as a working paper: its origins, what it adds to the Market Reduction Approach and what it does not claim. A revised white paper is in preparation for academic submission.",
    meta: 'Working paper published · White paper in preparation',
    href: '/thesis',
    external: false,
    featured: false,
  },
  {
    tag: 'Infrastructure',
    title: 'The Mykei Registry',
    body: 'The record layer under design. Events linked to time, location, device and batch context, so an incident becomes a verifiable record. No live integrations with police or insurers are claimed.',
    meta: 'In design · No live integrations claimed',
    href: 'https://mykei.io',
    external: true,
    featured: false,
  },
  {
    tag: 'Nigeria',
    title: 'Probata',
    body: 'A registry-first programme for Nigerian asset owners where high-value equipment moves into open resale markets faster than anyone can prove ownership. Probata is the proof layer.',
    meta: 'Registry-first · Early design phase',
    href: '/protocol',
    external: false,
    featured: false,
  },
  {
    tag: 'Commercial direction',
    title: 'Asset Integrity Pilot',
    body: 'The next serious proof should be an enterprise or infrastructure pilot around valuable physical assets: construction, contractor, solar or estate. The goal is evidence, not theatre.',
    meta: 'Enterprise pilot · Under review',
    href: 'https://mykei.io',
    external: true,
    featured: false,
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--red)' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--red-text)',
            }}>The Work</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: 56,
            lineHeight: 1.15,
          }}>
            What I am building.
          </h2>
        </FadeIn>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 1,
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block',
                  position: 'relative',
                  padding: 'clamp(28px, 4vw, 44px)',
                  textDecoration: 'none',
                  background: item.featured ? 'var(--bg-surface)' : 'var(--bg)',
                  height: '100%',
                  overflow: 'hidden',
                  transition: 'background 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = item.featured ? 'var(--bg-surface)' : 'var(--bg)')}
              >
                {/* BorderBeam on featured card */}
                {item.featured && (
                  <BorderBeam
                    size={180}
                    duration={10}
                    colorFrom="transparent"
                    colorTo="#C0392B"
                    borderWidth={1}
                  />
                )}

                {/* Top row: tag + external arrow */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 18,
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--red-text)',
                  }}>
                    {item.tag}
                  </span>
                  {item.external && (
                    <span style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1 }}>↗</span>
                  )}
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(17px, 1.7vw, 20px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(13px, 1.2vw, 14px)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontWeight: 300,
                  marginBottom: 24,
                }}>
                  {item.body}
                </p>

                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  lineHeight: 1.6,
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

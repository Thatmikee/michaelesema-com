import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import BorderBeam from './ui/BorderBeam'

const items = [
  {
    tag: 'Company',
    title: 'Mykei Securities Ltd',
    body: 'A UK-registered company (No. 16984969) built around a single idea: that retail theft is a market problem, not a security one. The doctrine is called Economic Sterilisation. The first R&D pathway is ADN-1, a patent-pending forensic deterrence node.',
    meta: 'Founded 2025 · Manchester, UK · Patent pending',
    href: 'https://mykei.io',
    external: true,
    featured: true,
  },
  {
    tag: 'Doctrine',
    title: 'Economic Sterilisation',
    body: 'A framework I developed from Mike Sutton\'s Market Reduction Approach. The argument: make stolen goods commercially worthless and the incentive for theft dissolves. Written up as a working paper and published. A revised academic white paper is in preparation.',
    meta: 'Working paper published · Thesis available',
    href: '/thesis',
    external: false,
    featured: false,
  },
  {
    tag: 'Writing',
    title: 'The Signal',
    body: 'Field notes from the build. How the thinking developed, what changed, what the data shows. Published on the Mykei website. Not polished post-mortems. The actual process as it happens.',
    meta: 'Published on mykei.io/signal',
    href: 'https://mykei.io/signal',
    external: true,
    featured: false,
  },
  {
    tag: 'Nigeria',
    title: 'Probata',
    body: 'A registry-first programme in early design for Nigerian asset owners. In Nigeria, high-value equipment disappears into open markets faster than any owner can prove it was theirs. Probata is the proof layer.',
    meta: 'Early design · Registry-first',
    href: '/protocol',
    external: false,
    featured: false,
  },
  {
    tag: 'Community',
    title: 'BIU Alumni Coordinator, UK',
    body: 'I serve as the UK diaspora coordinator for the Department of Accounting at Benson Idahosa University, where I studied. Connecting the community, marking Democracy Day each 12 June, keeping the network alive from Manchester.',
    meta: 'Diaspora chapter · UK',
    href: '/about',
    external: false,
    featured: false,
  },
  {
    tag: 'Philosophy',
    title: 'How I Think',
    body: 'A longer account of the intellectual positions that shape my work: on institutions, on markets, on what building from Manchester as a Nigerian actually looks like. Available on the Philosophy page.',
    meta: 'Read the full account',
    href: '/philosophy',
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
    <section id="work" style={{ background: 'var(--bg)', padding: 'clamp(72px, 10vw, 120px) clamp(24px, 7vw, 80px)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'var(--border)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--red)' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red-text)' }}>
              Work
            </span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: 56, lineHeight: 1.15 }}>
            What I am doing.
          </h2>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block', position: 'relative',
                  padding: 'clamp(26px, 4vw, 42px)',
                  textDecoration: 'none',
                  background: item.featured ? 'var(--bg-surface)' : 'var(--bg)',
                  height: '100%', overflow: 'hidden',
                  transition: 'background 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = item.featured ? 'var(--bg-surface)' : 'var(--bg)')}
              >
                {item.featured && <BorderBeam size={180} duration={10} colorFrom="transparent" colorTo="#C0392B" borderWidth={1} />}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red-text)' }}>
                    {item.tag}
                  </span>
                  {item.external && <span style={{ color: 'var(--text-muted)', fontSize: 12, lineHeight: 1 }}>↗</span>}
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 1.7vw, 20px)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: 14 }}>
                  {item.title}
                </h3>

                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(13px, 1.2vw, 14px)', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>
                  {item.body}
                </p>

                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', lineHeight: 1.6 }}>
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

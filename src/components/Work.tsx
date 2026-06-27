import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Thumbnails live in /public/work and are served by URL (not module imports).
const mykeiThumb = '/work/mykei-securities.svg'
const adnThumb = '/work/adn-1.svg'
const esThumb = '/work/economic-sterilisation.svg'
const registryThumb = '/work/mykei-registry.svg'
const retailThumb = '/work/retail-deterrence.svg'
const writingThumb = '/work/writing.svg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

type Item = {
  title: string
  body: string
  thumb: string
  alt: string
  kind: 'external' | 'internal' | 'status'
  href?: string
  action?: string
  status?: string
}

const ITEMS: Item[] = [
  {
    title: 'Mykei Securities Ltd',
    body: 'A UK-first security venture working on asset integrity, retail crime and resale deterrence.',
    thumb: mykeiThumb,
    alt: 'A sealed, marked asset representing Mykei Securities asset protection',
    kind: 'external', href: 'https://mykei.io', action: 'mykei.io',
  },
  {
    title: 'ADN',
    body: 'Active defence architecture for event-linked marking, asset protection and evidence records.',
    thumb: adnThumb,
    alt: 'Technical sketch of the ADN defence module with a sensor lens',
    kind: 'status', status: 'In development',
  },
  {
    title: 'Economic Sterilisation',
    body: 'An applied framework for reducing resale confidence and commercial acceptability in stolen goods.',
    thumb: esThumb,
    alt: 'A working paper in an evidence folder with a highlighted line',
    kind: 'internal', href: '/thesis', action: 'Read paper',
  },
  {
    title: 'Mykei Registry',
    body: 'A proposed evidence-record layer for ownership, provenance, incidents and chain of custody.',
    thumb: registryThumb,
    alt: 'An ownership registry ledger with verification marks and a chain-of-custody link',
    kind: 'status', status: 'Concept note',
  },
  {
    title: 'Retail Crime and Resale Deterrence',
    body: 'Public thinking on shrinkage, colleague safety, resale markets and incentive design.',
    thumb: retailThumb,
    alt: 'A retail shelf with tagged products and a printed receipt',
    kind: 'internal', href: '#thinking', action: 'See thinking',
  },
  {
    title: 'Writing and Public Thinking',
    body: 'Founder notes, essays and field observations from building Mykei.',
    thumb: writingThumb,
    alt: 'A desk still life with a cup of tea, an open notebook and a pen',
    kind: 'internal', href: '#thinking', action: 'See thinking',
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}>
      {children}
    </motion.div>
  )
}

function CardFooter({ item }: { item: Item }) {
  if (item.kind === 'status') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center',
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 500, fontSize: 10.5,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: 'var(--text-muted)',
        border: '1px solid var(--border-mid)',
        borderRadius: 50, padding: '5px 14px',
      }}>
        {item.status}
      </span>
    )
  }
  if (item.kind === 'external') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12.5, color: 'var(--ink)' }}>
          {item.action}
        </span>
        <span className="open-mark" style={{
          width: 26, height: 26, borderRadius: '50%',
          border: '1.5px solid var(--accent)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent-hover)',
          transition: 'background 0.25s, color 0.25s',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </span>
    )
  }
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-hover)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" />
      </svg>
      <span className="reveal-underline" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 12.5 }}>
        {item.action}
      </span>
    </span>
  )
}

export default function Work() {
  return (
    <section id="work" style={{
      background: 'var(--bg)',
      padding: 'clamp(80px, 10vw, 124px) clamp(28px, 8vw, 100px)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(44px, 6vw, 64px)' }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800, color: 'var(--ink)',
              letterSpacing: '-1px', margin: 0,
            }}>
              Recent work<span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: 'var(--text-secondary)', fontWeight: 300,
              marginTop: 16, maxWidth: 460, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7,
            }}>
              Some of what I am building, researching and writing right now.
            </p>
          </div>
        </FadeIn>

        <div className="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {ITEMS.map((item, i) => {
            const inner = (
              <>
                <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
                  <img src={item.thumb} alt={item.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '22px 24px 24px' }}>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'var(--ink)', marginBottom: 10, lineHeight: 1.25 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(13px, 1.2vw, 14.5px)', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
                    {item.body}
                  </p>
                  <CardFooter item={item} />
                </div>
              </>
            )
            const cardStyle: React.CSSProperties = {
              display: 'block', background: 'var(--bg-surface)', textDecoration: 'none',
              overflow: 'hidden', borderRadius: 14, border: '1px solid var(--border)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', height: '100%',
            }
            return (
              <FadeIn key={item.title} delay={0.06 + i * 0.06}>
                {item.kind === 'status' ? (
                  <div className="work-card" style={cardStyle}>{inner}</div>
                ) : (
                  <a className="work-card" href={item.href}
                    target={item.kind === 'external' ? '_blank' : undefined}
                    rel={item.kind === 'external' ? 'noopener noreferrer' : undefined}
                    style={cardStyle}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 34px rgba(0,0,0,0.09)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)' }}
                  >
                    {inner}
                  </a>
                )}
              </FadeIn>
            )
          })}
        </div>
      </div>

      <style>{`
        .work-card .reveal-underline {
          background-image: linear-gradient(var(--accent), var(--accent));
          background-repeat: no-repeat; background-position: 0 100%;
          background-size: 0% 2px; padding-bottom: 3px;
          transition: background-size 0.35s ease;
        }
        .work-card:hover .reveal-underline { background-size: 100% 2px; }
        .work-card:hover .open-mark { background: var(--accent); color: var(--ink); }
        @media (max-width: 900px) { .work-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .work-grid { grid-template-columns: 1fr !important; } }
        @media (prefers-reduced-motion: reduce) {
          .work-card, .work-card .reveal-underline, .work-card .open-mark { transition: none !important; }
        }
      `}</style>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

const PIECES = [
  {
    number: '01',
    title: 'Crime as an incentives problem',
    excerpt: 'Most security responses treat crime as a behaviour problem. It is not. It is an economics problem. Change the incentive structure and the behaviour follows.',
    href: '/thesis',
  },
  {
    number: '02',
    title: 'Making stolen goods harder to monetise',
    excerpt: 'The resale market is not a side effect of theft. It is the reason theft happens at all. Remove the buyer, remove the cash-out route, and the whole chain loses its logic.',
    href: '/thesis',
  },
  {
    number: '03',
    title: 'Retail loss, colleague safety and resale markets',
    excerpt: 'Shrinkage data understates the damage. The real cost is in staff morale, insurance drift, stock inaccuracy and the quiet accumulation of unrecorded harm.',
    href: '/thesis',
  },
  {
    number: '04',
    title: 'Industrial intelligence and future security infrastructure',
    excerpt: 'The next generation of security systems will not be passive. They will sense, record, mark, and create friction at every step of an attempted crime.',
    href: 'https://mykei.io/signal',
  },
  {
    number: '05',
    title: 'Founder notes from building Mykei',
    excerpt: 'What it actually looks like to turn research into a company. The decisions, the wrong turns, the moments where the theory met something harder.',
    href: 'https://mykei.io/signal',
  },
]

export default function Writing() {
  return (
    <section id="thinking" style={{
      background: '#050817',
      padding: 'clamp(80px, 10vw, 120px) clamp(32px, 8vw, 100px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(36,87,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="thinking-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 60,
          gap: 24,
          flexWrap: 'wrap',
        }}>
          <FadeIn>
            <div>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(11px, 1vw, 13px)',
                color: '#4d7cff',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Thinking
              </p>
              <h2 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(28px, 3.8vw, 48px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.07,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
              }}>
                Ideas in public
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <a
              href="https://mykei.io/signal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: 12,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingBottom: 2,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = '#ffffff'
                el.style.borderBottomColor = 'rgba(255,255,255,0.5)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = 'rgba(255,255,255,0.45)'
                el.style.borderBottomColor = 'rgba(255,255,255,0.2)'
              }}
            >
              The Signal &#8599;
            </a>
          </FadeIn>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PIECES.map((piece, i) => (
            <FadeIn key={piece.number} delay={0.06 + i * 0.06}>
              <a
                href={piece.href}
                target={piece.href.startsWith('http') ? '_blank' : undefined}
                rel={piece.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  textDecoration: 'none',
                  display: 'grid',
                  gridTemplateColumns: '52px 1fr',
                  gap: '0 28px',
                  alignItems: 'start',
                  padding: '30px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  transition: 'opacity 0.2s',
                }}
                className="thinking-row"
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.6')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 12,
                  color: '#4d7cff',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                  paddingTop: 5,
                }}>
                  {piece.number}
                </p>
                <div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(14px, 1.5vw, 18px)',
                    color: '#ffffff',
                    lineHeight: 1.25,
                    marginBottom: 10,
                    letterSpacing: '-0.2px',
                  }}>
                    {piece.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(13px, 1.2vw, 14.5px)',
                    color: 'rgba(255,255,255,0.42)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    maxWidth: 580,
                  }}>
                    {piece.excerpt}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 500px) {
          .thinking-row { grid-template-columns: 36px 1fr !important; gap: 0 16px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .thinking-row { transition: none !important; }
        }
      `}</style>
    </section>
  )
}

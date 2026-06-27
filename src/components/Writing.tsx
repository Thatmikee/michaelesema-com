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

const ESSAYS = [
  {
    number: '01',
    title: 'Why Stolen Goods Have Value: A Market Analysis',
    excerpt: 'Theft persists because stolen goods find buyers. The value chain that makes retail crime rational, and why disrupting it starts with understanding resale markets.',
    href: '/thesis',
    status: 'Read',
  },
  {
    number: '02',
    title: 'Economic Sterilisation: The Doctrine',
    excerpt: 'The full intellectual case for removing the commercial utility of stolen goods. Built on Sutton\'s 1998 research, extended into a workable infrastructure doctrine.',
    href: '/thesis',
    status: 'Read',
  },
  {
    number: '03',
    title: 'What Retail Crime Actually Costs',
    excerpt: 'Beyond the shrinkage line in the accounts. The second-order costs: insurance premium drift, stock inaccuracy, staff retention, and community damage.',
    href: '/thesis',
    status: 'Read',
  },
]

export default function Writing() {
  return (
    <section id="writing" style={{
      background: '#050817',
      padding: 'clamp(80px, 10vw, 120px) clamp(32px, 8vw, 100px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Circuit dot texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(36,87,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="writing-header" style={{
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
                color: '#2457ff',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}>
                Writing
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
                Thinking in public
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {ESSAYS.map((essay, i) => (
            <FadeIn key={essay.number} delay={0.08 + i * 0.07}>
              <a
                href={essay.href}
                style={{
                  textDecoration: 'none',
                  display: 'grid',
                  gridTemplateColumns: '64px 1fr auto',
                  gap: 32,
                  alignItems: 'start',
                  padding: '36px 0',
                  borderBottom: i < ESSAYS.length - 1
                    ? '1px solid rgba(255,255,255,0.07)'
                    : '1px solid rgba(255,255,255,0.07)',
                  transition: 'opacity 0.2s',
                }}
                className="essay-row"
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.65')}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '1')}
              >
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 13,
                  color: '#2457ff',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                  paddingTop: 4,
                }}>
                  {essay.number}
                </p>
                <div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(15px, 1.6vw, 19px)',
                    color: '#ffffff',
                    lineHeight: 1.25,
                    marginBottom: 12,
                    letterSpacing: '-0.2px',
                  }}>
                    {essay.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(13px, 1.2vw, 14.5px)',
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    maxWidth: 540,
                  }}>
                    {essay.excerpt}
                  </p>
                </div>
                <p style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 11.5,
                  color: '#2457ff',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  paddingTop: 4,
                  whiteSpace: 'nowrap',
                }}>
                  {essay.status} &rarr;
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .essay-row { grid-template-columns: 40px 1fr !important; }
          .essay-row > p:last-child { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .essay-row { transition: none !important; }
        }
      `}</style>
    </section>
  )
}

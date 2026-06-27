import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

const items = [
  {
    title: 'Mykei Securities Ltd',
    body: 'A UK company built on one idea: that retail theft is a market problem, not a security one. The doctrine is Economic Sterilisation.',
    href: 'https://mykei.io',
    external: true,
    tag: 'Company',
    visual: 'mykei',
  },
  {
    title: 'Economic Sterilisation Research',
    body: 'A framework built from Mike Sutton\'s Market Reduction Approach. Make stolen goods commercially worthless and the incentive for theft dissolves.',
    href: '/thesis',
    external: false,
    tag: 'Doctrine',
    visual: 'research',
  },
  {
    title: 'ADN-1 Active Defense Node',
    body: 'Patent-pending forensic deterrence hardware for retail. Designed to make removal costly, traceable, and commercially pointless for would-be thieves.',
    href: 'https://mykei.io',
    external: true,
    tag: 'Hardware',
    visual: 'adn',
  },
  {
    title: 'Mykei Registry / Event Record',
    body: 'An asset registry and event-log infrastructure for tracking ownership, provenance, and chain of custody across the supply chain.',
    href: 'https://mykei.io/signal',
    external: true,
    tag: 'Infrastructure',
    visual: 'registry',
  },
]

function CardVisual({ type }: { type: string }) {
  const styles: React.CSSProperties = {
    width: '100%', height: '100%',
    position: 'absolute', inset: 0,
  }

  if (type === 'mykei') return (
    <div style={{ ...styles, background: '#050817', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }} />
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 80, height: 80,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(36,87,255,0.3) 0%, transparent 70%)',
        border: '1.5px solid rgba(36,87,255,0.4)',
      }} />
    </div>
  )

  if (type === 'research') return (
    <div style={{ ...styles, background: '#f8f8f6', overflow: 'hidden' }}>
      {[0,1,2,3,4,5].map(i => (
        <div key={i} style={{
          position: 'absolute',
          left: 24, right: 24,
          top: 24 + i * 26,
          height: 1.5,
          background: i === 2 ? '#2457ff' : 'rgba(0,0,0,0.1)',
          borderRadius: 2,
        }} />
      ))}
      <div style={{
        position: 'absolute', left: 24, top: 24,
        width: 40, height: 40,
        background: '#2457ff',
        opacity: 0.12,
        borderRadius: 4,
      }} />
    </div>
  )

  if (type === 'adn') return (
    <div style={{ ...styles, background: '#0e1020', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 60, height: 60,
        border: '1.5px solid rgba(36,87,255,0.5)',
        borderRadius: 8,
      }} />
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 36, height: 36,
        border: '1.5px solid rgba(36,87,255,0.3)',
        borderRadius: 5,
      }} />
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 12, height: 12,
        background: '#2457ff',
        borderRadius: 2,
        opacity: 0.8,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(36,87,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />
    </div>
  )

  if (type === 'registry') return (
    <div style={{ ...styles, background: '#f4f4f2', overflow: 'hidden' }}>
      {[0,1,2].map(row => (
        [0,1,2,3].map(col => (
          <div key={`${row}-${col}`} style={{
            position: 'absolute',
            left: 24 + col * 44,
            top: 24 + row * 38,
            width: 28, height: 20,
            border: '1.5px solid',
            borderColor: (row === 0 && col === 1) ? '#2457ff' : 'rgba(0,0,0,0.12)',
            borderRadius: 4,
            background: (row === 0 && col === 1) ? 'rgba(36,87,255,0.08)' : 'transparent',
          }} />
        ))
      ))}
    </div>
  )

  return null
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{
      background: '#f4f4f2',
      padding: 'clamp(80px, 10vw, 120px) clamp(32px, 8vw, 100px)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(11px, 1vw, 13px)',
              color: '#2457ff',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 16,
              display: 'inline-block',
              border: '1.5px solid #2457ff',
              borderRadius: 50,
              padding: '6px 20px',
            }}>
              Projects
            </p>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(28px, 3.8vw, 48px)',
              fontWeight: 800,
              color: '#111111',
              lineHeight: 1.07,
              letterSpacing: '-0.5px',
              textTransform: 'uppercase',
              maxWidth: 480,
            }}>
              What I am building
            </h2>
          </div>
        </FadeIn>

        <div className="work-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.08 + i * 0.07}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="work-card"
                style={{
                  display: 'block',
                  background: '#FFFFFF',
                  textDecoration: 'none',
                  overflow: 'hidden',
                  borderRadius: 16,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 10px 36px rgba(0,0,0,0.10)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
                }}
              >
                {/* Abstract visual */}
                <div style={{ position: 'relative', height: 200 }}>
                  <CardVisual type={item.visual} />
                  {/* Tag */}
                  <span style={{
                    position: 'absolute', top: 14, left: 14, zIndex: 2,
                    background: '#2457ff', color: '#fff',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700, fontSize: 10,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 12px', borderRadius: 50,
                  }}>
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 26px 28px' }}>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(15px, 1.5vw, 18px)',
                    color: '#111111',
                    marginBottom: 10,
                    lineHeight: 1.25,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(13px, 1.2vw, 14.5px)',
                    color: '#666',
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}>
                    {item.body}
                  </p>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    color: '#2457ff',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginTop: 18,
                  }}>
                    {item.external ? 'Visit' : 'Read more'} &rarr;
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .work-card { transition: none !important; }
        }
      `}</style>
    </section>
  )
}

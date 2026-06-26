import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

const items = [
  {
    title: 'Mykei Securities Ltd',
    body: 'A UK company built on one idea: that retail theft is a market problem, not a security one. The doctrine is Economic Sterilisation. The first R&D pathway is the Active Deterrence Node, a patent-pending forensic deterrence device.',
    href: 'https://mykei.io',
    external: true,
    img: 'https://picsum.photos/seed/retail-security-store-uk/800/480',
    tag: 'Company',
  },
  {
    title: 'Economic Sterilisation',
    body: 'A framework built from Mike Sutton\'s Market Reduction Approach. Make stolen goods commercially worthless and the incentive for theft dissolves. Written as a thesis, filed as a patent, now being built as infrastructure.',
    href: '/thesis',
    external: false,
    img: 'https://picsum.photos/seed/research-doctrine-economics/800/480',
    tag: 'Doctrine',
  },
  {
    title: 'The Signal',
    body: 'Field notes from the build. How the thinking developed, what changed, what the data shows. The actual process as it is happening, published on the Mykei website.',
    href: 'https://mykei.io/signal',
    external: true,
    img: 'https://picsum.photos/seed/writing-notes-journal/800/480',
    tag: 'Writing',
  },
  {
    title: 'Probata',
    body: 'A registry-first programme in early design for Nigerian asset owners. In Nigeria, high-value equipment becomes anonymous within hours of theft. Probata is the proof layer, the record that survives the disappearance.',
    href: '/protocol',
    external: false,
    img: 'https://picsum.photos/seed/nigeria-city-assets/800/480',
    tag: 'Nigeria',
  },
]

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
      background: '#F2F2F2',
      padding: 'clamp(72px, 9vw, 110px) clamp(32px, 8vw, 100px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Watermark */}
      <div style={{
        position: 'absolute',
        left: '-2%', top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(72px, 14vw, 200px)',
        color: 'rgba(0,0,0,0.04)',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-3px',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}>
        My Work
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <FadeIn>
          <div style={{ marginBottom: 60 }}>
            <p style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(11px, 1vw, 13px)',
              color: '#A01818',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Recent Projects
            </p>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(28px, 3.8vw, 48px)',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.07,
              letterSpacing: '-0.5px',
              textTransform: 'uppercase',
              maxWidth: 500,
            }}>
              What I am building
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(14px, 1.35vw, 16px)',
              color: '#666',
              lineHeight: 1.8,
              fontWeight: 300,
              marginTop: 14,
              maxWidth: 420,
            }}>
              These are the projects that form the infrastructure around the doctrine.
              Feel free to visit any of them.
            </p>
          </div>
        </FadeIn>

        <div className="work-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
        }}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.08 + i * 0.07}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block',
                  background: '#FFFFFF',
                  textDecoration: 'none',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Tag */}
                  <span style={{
                    position: 'absolute', top: 14, left: 14,
                    background: '#A01818', color: '#fff',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700, fontSize: 10,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 10px',
                  }}>
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 26px 28px' }}>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 1.6vw, 19px)',
                    color: '#1A1A1A',
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
                    color: '#A01818',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginTop: 18,
                  }}>
                    {item.external ? 'Visit ↗' : 'Read more →'}
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
      `}</style>
    </section>
  )
}

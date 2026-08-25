import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  )
}

// Qualitative emphasis (not fake percentages): a 5-segment strength meter + a label.
const ITEMS: { name: string; tag: string; level: number }[] = [
  { name: 'Product design',   tag: 'Structure and interface', level: 5 },
  { name: 'Websites',         tag: 'Design and front end',  level: 5 },
  { name: 'Brand systems',    tag: 'Identity and type',             level: 5 },
  { name: 'Product building', tag: 'Idea to first version',      level: 4 },
]


export default function FocusAreas() {
  return (
    <section id="focus" style={{
      background: 'var(--bg-surface)',
      padding: 'clamp(80px, 10vw, 124px) clamp(28px, 8vw, 100px)',
    }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ marginBottom: 'clamp(36px, 5vw, 56px)', maxWidth: 560 }}>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 800,
              color: 'var(--ink)',
              letterSpacing: '-1px',
              marginBottom: 14,
            }}>
              What I do<span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(14px, 1.35vw, 16px)',
              color: 'var(--text-secondary)',
              fontWeight: 300, lineHeight: 1.75,
            }}>
              Four things I do, and what each one actually involves.
            </p>
          </div>
        </FadeIn>

        <div className="focus-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 'clamp(28px, 5vw, 64px)',
          rowGap: 0,
        }}>
          {ITEMS.map((item, i) => (
            <FadeIn key={item.name} delay={0.04 + (i % 4) * 0.05}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18,
                padding: '20px 0',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 1.4vw, 16.5px)',
                  color: 'var(--ink)',
                  letterSpacing: '-0.2px',
                }}>
                  {item.name}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10.5,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    minWidth: 0, textAlign: 'right', whiteSpace: 'normal',
                  }}>
                    {item.tag}
                  </span>
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .focus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  )
}

const ENTRIES = [
  { n: '01', title: 'Crime as an incentives problem', line: 'Why theft persists while the payoff still rewards it, and what shifts when you change the maths.' },
  { n: '02', title: 'Making stolen goods harder to monetise', line: 'Practical ways to strip resale value out of an item, both before and after it is taken.' },
  { n: '03', title: 'Retail loss, colleague safety and resale markets', line: 'What shrinkage costs the people on the floor, and how resale demand keeps the pressure on.' },
  { n: '04', title: 'Industrial intelligence and future security infrastructure', line: 'Where evidence records, asset intelligence and hardware meet the next decade of prevention.' },
  { n: '05', title: 'Founder notes from building Mykei', line: 'Field notes on turning a single question into research, a patent filing and a company.' },
]

export default function Thinking() {
  return (
    <section id="thinking" style={{
      background: 'var(--page-bg)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(80px, 10vw, 124px) clamp(32px, 8vw, 100px)',
      borderTop: '1px solid var(--border)',
    }}>
      {/* Ghost word */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        left: '2%', bottom: '-2%',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(70px, 15vw, 220px)',
        color: 'rgba(14,18,38,0.04)',
        userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap', letterSpacing: '-4px', lineHeight: 1,
      }}>
        Thinking
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 3.8vw, 46px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px',
            lineHeight: 1.1,
            textAlign: 'center',
            marginBottom: 'clamp(40px, 5vw, 64px)',
          }}>
            Thinking in public
          </h2>
        </FadeIn>

        <div>
          {ENTRIES.map((e, i) => (
            <FadeIn key={e.n} delay={0.05 + i * 0.05}>
              <div className="thinking-row" style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr',
                gap: 'clamp(16px, 3vw, 36px)',
                alignItems: 'baseline',
                padding: 'clamp(22px, 3vw, 30px) 0',
                borderBottom: i < ENTRIES.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  color: 'var(--accent)',
                  letterSpacing: '-0.5px',
                }}>
                  {e.n}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(17px, 1.9vw, 23px)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.3px',
                    lineHeight: 1.25,
                    marginBottom: 8,
                  }}>
                    {e.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(14px, 1.3vw, 16px)',
                    color: 'var(--text-secondary)',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: 620,
                  }}>
                    {e.line}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

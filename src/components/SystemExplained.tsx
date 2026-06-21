import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  )
}

const POSITIONS = [
  {
    number: '01',
    label: 'On institutions',
    title: 'Most systems are better at recording failure than preventing it.',
    body: 'I grew up inside Nigerian public institutions. What I observed was not corruption in the simple sense. It was architecture. Systems designed to document what went wrong rather than catch it before it did. That observation followed me to Manchester and shaped everything I built after.',
  },
  {
    number: '02',
    label: 'On crime as a market',
    title: 'Theft pays because it has buyers. Remove the buyer and the logic collapses.',
    body: 'Mike Sutton\'s Market Reduction Approach made a simple argument in 1998: stolen goods need a market to move. Disrupt the market and you disrupt the crime. That framing changed how I thought about the entire deterrence industry. Most of it is built around the wrong problem.',
  },
  {
    number: '03',
    label: 'On building in public',
    title: 'A founder who cannot explain the doctrine is not a founder. They are a product manager.',
    body: 'I write publicly about what I am building and why. Not the polished version. The actual thinking, the wrong turns, the questions I have not answered yet. I believe the argument matters as much as the product. If the idea cannot survive scrutiny it should not survive at all.',
  },
]

export default function SystemExplained() {
  return (
    <section id="thinking" style={{ background: 'var(--bg-section)', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 7vw, 80px)', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'var(--border)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span style={{ display: 'block', width: 28, height: 1, background: 'var(--red)' }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red-text)' }}>
              How I Think
            </span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: 16, maxWidth: 520, lineHeight: 1.15 }}>
            Three positions I hold.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'var(--text-secondary)', lineHeight: 1.9, maxWidth: 480, marginBottom: 72, fontWeight: 300 }}>
            Not principles. Positions. Meaning I arrived at them through experience and I
            am willing to revise them if the evidence changes.
          </p>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {POSITIONS.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.1}>
              <div className="thinking-row" style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: 'clamp(28px, 5vw, 68px)',
                padding: 'clamp(40px, 5vw, 60px) 0',
                borderBottom: '1px solid var(--border)',
                alignItems: 'start',
              }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 400, color: 'var(--red)', opacity: 0.28, lineHeight: 1, marginBottom: 10 }}>
                    {p.number}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    {p.label}
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 1.9vw, 22px)', fontStyle: 'italic', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.45, marginBottom: 20 }}>
                    {p.title}
                  </p>
                  <p style={{ fontSize: 'clamp(14px, 1.3vw, 15.5px)', color: 'var(--text-secondary)', lineHeight: 1.9, fontWeight: 300, maxWidth: 600 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .thinking-row { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  )
}

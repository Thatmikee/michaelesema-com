import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const pillars = [
  {
    number: '01',
    label: 'The Mark',
    title: 'Forensic Marking',
    body: 'A stolen good that carries a trace is no longer anonymous. ADN-1 explores event-triggered marking as one mechanism to bind a physical trace to an asset at the moment a threshold is crossed. The compound is sourced from certified forensic marking manufacturers. Mykei builds the system that deploys it.',
    note: 'Marker selection, persistence, detectability and safety depend on supplier specification and deployment environment assessment. Controlled prototype evidence exists.',
  },
  {
    number: '02',
    label: 'The Record',
    title: 'Mykei Registry',
    body: 'Marking without a record is just a stain. The registry layer is designed to connect a marking event to time, location, device and batch context so the trace has provenance. That combination is what supports an evidence workflow. A mark alone does not.',
    note: 'No live platform or insurer integrations are claimed. The registry is in design. Its value is structural: it makes the mark meaningful beyond the moment it is applied.',
  },
  {
    number: '03',
    label: 'The Doctrine',
    title: 'Economic Sterilisation',
    body: 'Theft is also a market problem. Goods move because there is a buyer. Economic Sterilisation builds on Mike Sutton\'s Market Reduction Approach and asks how modern tracing infrastructure can remove the commercial viability of handling stolen goods. ADN-1 is one R&D pathway inside that wider doctrine.',
    note: 'Economic Sterilisation is Mykei\'s named framework. The underlying stolen-goods market theory predates Mykei and is properly credited to Sutton and the MRA literature.',
  },
]

export default function SystemExplained() {
  return (
    <section
      id="how-it-works"
      style={{
        background: 'var(--bg-section)',
        padding: 'clamp(80px, 10vw, 120px) clamp(24px, 7vw, 80px)',
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'var(--border)' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{
              display: 'block', width: 28, height: 1, background: 'var(--red)',
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--red-text)',
            }}>The System</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: 18,
            maxWidth: 560,
            lineHeight: 1.15,
          }}>
            Three components. One outcome.
          </h2>
          <p style={{
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.9,
            maxWidth: 520,
            marginBottom: 72,
            fontWeight: 300,
          }}>
            A theft event should produce three things at once: a trace on the goods, a record that ties the event to time and place, and a file the owner can actually use.
          </p>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.number} delay={i * 0.1}>
              <div
                className="system-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: 'clamp(32px, 5vw, 72px)',
                  padding: 'clamp(40px, 5vw, 64px) 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 52,
                    fontWeight: 400,
                    color: 'var(--red)',
                    opacity: 0.35,
                    lineHeight: 1,
                    marginBottom: 10,
                  }}>
                    {pillar.number}
                  </div>
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}>
                    {pillar.label}
                  </div>
                </div>

                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(19px, 2.2vw, 26px)',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: 20,
                    lineHeight: 1.25,
                  }}>
                    {pillar.title}
                  </h3>
                  <p style={{
                    fontSize: 'clamp(14px, 1.3vw, 15.5px)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.9,
                    fontWeight: 300,
                    marginBottom: 22,
                    maxWidth: 620,
                  }}>
                    {pillar.body}
                  </p>
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10.5,
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    maxWidth: 560,
                    borderLeft: '2px solid var(--red-line)',
                    paddingLeft: 14,
                  }}>
                    {pillar.note}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .system-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}

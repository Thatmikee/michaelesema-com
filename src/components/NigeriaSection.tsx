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

export default function NigeriaSection() {
  return (
    <section style={{
      background: 'var(--page-bg)',
      padding: 'clamp(72px, 9vw, 116px) clamp(32px, 8vw, 100px)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="origin-grid" style={{
        maxWidth: 1000, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1.3fr 0.7fr',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }}>
        <FadeIn>
          <div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(24px, 3.2vw, 38px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.5px',
              lineHeight: 1.12,
              textTransform: 'uppercase',
              marginBottom: 22,
            }}>
              Rooted in Nigeria.<br />
              <span style={{ color: 'var(--accent)' }}>Building from the UK.</span>
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(14px, 1.35vw, 16px)',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: 560,
            }}>
              Nigeria shaped Michael&apos;s understanding of asset loss, informal markets and the
              cost of weak ownership records. Mykei&apos;s current operational focus is UK-first,
              but the long-term vision includes practical asset-integrity systems for markets where
              proof of ownership, resale confidence and recovery evidence are still fragile.
            </p>
          </div>
        </FadeIn>

        {/* Small editorial artefact: an abstract ownership ledger, framed */}
        <FadeIn delay={0.12}>
          <div className="origin-artefact" style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            padding: 18,
            boxShadow: '0 2px 16px rgba(14,18,38,0.05)',
            maxWidth: 280,
          }}>
            <svg viewBox="0 0 240 200" role="img" aria-label="An abstract ownership ledger linking two markets" style={{ width: '100%', display: 'block' }}>
              <rect width="240" height="200" rx="6" fill="#f4f1ea" />
              <g stroke="#0e1226" strokeWidth="2" opacity="0.22">
                <path d="M30 40 H210 M30 96 H210" />
              </g>
              <circle cx="62" cy="64" r="9" fill="none" stroke="#0e1226" strokeWidth="2.5" />
              <circle cx="62" cy="64" r="3" fill="#f5c518" />
              <circle cx="184" cy="120" r="9" fill="none" stroke="#0e1226" strokeWidth="2.5" />
              <circle cx="184" cy="120" r="3" fill="#2457ff" />
              <path d="M70 70 C 110 100, 140 96, 176 116" fill="none" stroke="#2457ff" strokeWidth="2" strokeDasharray="4 5" />
              <g stroke="#0e1226" strokeWidth="2" opacity="0.5" strokeLinecap="round">
                <path d="M30 158 H150" />
                <path d="M30 172 H120" />
              </g>
            </svg>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10.5,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              marginTop: 12,
              textAlign: 'center',
            }}>
              Ownership, recorded across markets
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .origin-grid { grid-template-columns: 1fr !important; }
          .origin-artefact { margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}

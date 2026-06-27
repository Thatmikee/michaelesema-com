import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  )
}

const ink = '#0e1226'
const blue = '#2457ff'
const S = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', stroke: ink, strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

// Small custom marks — restrained line work, one accent touch each
const MARKS: Record<string, React.ReactNode> = {
  tag: (
    <svg {...S}><path d="M3 12.5 11 4.5h6.5V11l-8 8z" /><circle cx="14.5" cy="7.5" r="1.4" fill={blue} stroke="none" /></svg>
  ),
  shelf: (
    <svg {...S}><rect x="3.5" y="5" width="17" height="5" rx="1" /><rect x="3.5" y="13" width="17" height="5" rx="1" /><line x1="8" y1="13" x2="8" y2="18" stroke={blue} /></svg>
  ),
  receipt: (
    <svg {...S}><path d="M6 3.5h12v17l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="11.5" x2="15" y2="11.5" stroke={blue} /><line x1="9" y1="15" x2="13" y2="15" /></svg>
  ),
  fingerprint: (
    <svg {...S}><path d="M12 11a2 2 0 0 1 2 2c0 2-.4 4-1 5.5" /><path d="M8.5 13a3.5 3.5 0 0 1 7 0c0 2.2-.5 3.6-1 5" /><path d="M5.5 13a6.5 6.5 0 0 1 13 0c0 1.4-.2 2.6-.5 3.8" /><circle cx="12" cy="13" r="0.9" fill={blue} stroke="none" /></svg>
  ),
  stamp: (
    <svg {...S}><path d="M9 4.5h6l-1 5h2.5a2 2 0 0 1 2 2V14H5.5v-2.5a2 2 0 0 1 2-2H10z" /><line x1="4.5" y1="18" x2="19.5" y2="18" stroke={blue} /></svg>
  ),
  grid: (
    <svg {...S}><rect x="4" y="4" width="6.5" height="6.5" rx="1" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" fill={blue} stroke="none" /></svg>
  ),
}

const ITEMS = [
  { name: 'Asset Integrity',        mark: 'tag' },
  { name: 'Retail Crime',           mark: 'shelf' },
  { name: 'Resale Markets',         mark: 'receipt' },
  { name: 'Proof of Ownership',     mark: 'fingerprint' },
  { name: 'Evidence Records',       mark: 'stamp' },
  { name: 'Security Infrastructure', mark: 'grid' },
]

export default function FocusAreas() {
  return (
    <section id="focus" style={{
      background: 'var(--page-bg)',
      padding: 'clamp(72px, 9vw, 116px) clamp(32px, 8vw, 100px)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="focus-grid" style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'start',
      }}>
        <FadeIn>
          <div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(26px, 3.4vw, 40px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              marginBottom: 18,
            }}>
              Focus areas
            </h2>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: 'var(--text-secondary)',
              fontWeight: 300,
              lineHeight: 1.8,
              maxWidth: 320,
            }}>
              The problem areas I research, build and write around.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="focus-items" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: 'clamp(20px, 3vw, 40px)',
            rowGap: 0,
          }}>
            {ITEMS.map((item, i) => (
              <div key={item.name} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '20px 0',
                borderBottom: i < ITEMS.length - 2 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{
                  flexShrink: 0,
                  width: 44, height: 44,
                  borderRadius: 10,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {MARKS[item.mark]}
                </span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 1.3vw, 16px)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.2px',
                }}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .focus-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 520px) {
          .focus-items { grid-template-columns: 1fr !important; }
          .focus-items > div { border-bottom: 1px solid var(--border) !important; }
          .focus-items > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}

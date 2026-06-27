import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

const S = { width: 30, height: 30, viewBox: '0 0 24 24', fill: 'none', stroke: 'var(--accent)', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const ITEMS: { icon: React.ReactNode; title: string; label: string }[] = [
  {
    icon: <svg {...S}><circle cx="12" cy="8" r="3.4" /><path d="M5.5 19a6.5 6.5 0 0 1 13 0" /></svg>,
    title: 'Founder', label: 'Mykei Securities Ltd',
  },
  {
    icon: <svg {...S}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9.5 13.5l1.6 1.6 3.4-3.6" /></svg>,
    title: 'Patent filed', label: 'UK IPO, March 2026',
  },
  {
    icon: <svg {...S}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>,
    title: 'Research', label: 'Security and asset integrity',
  },
  {
    icon: <svg {...S}><path d="M3 21h18" /><path d="M5 21V8l7-4 7 4v13" /><path d="M10 21v-6h4v6" /></svg>,
    title: 'Builder', label: 'Doctrine to prototype',
  },
  {
    icon: <svg {...S}><path d="M12 21s-6.5-5.2-6.5-10A6.5 6.5 0 0 1 18.5 11c0 4.8-6.5 10-6.5 10z" /><circle cx="12" cy="11" r="2.2" /></svg>,
    title: 'UK-first', label: 'Current operating focus',
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  )
}

export default function Milestones() {
  return (
    <section aria-label="Milestones" style={{
      background: 'var(--bg)',
      padding: 'clamp(56px, 7vw, 84px) clamp(24px, 6vw, 80px)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="milestones-row" style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
      }}>
        {ITEMS.map((item, i) => (
          <FadeIn key={item.title} delay={0.05 + i * 0.06}>
            <div className="milestone-cell" style={{
              textAlign: 'center',
              padding: '6px clamp(8px, 1.5vw, 20px)',
              borderLeft: i === 0 ? 'none' : '1px solid var(--border)',
              height: '100%',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>{item.icon}</div>
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(15px, 1.6vw, 19px)',
                color: 'var(--ink)',
                marginBottom: 5,
                letterSpacing: '-0.3px',
              }}>
                {item.title}
              </p>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 12.5,
                color: 'var(--text-muted)',
                lineHeight: 1.4,
                fontWeight: 400,
              }}>
                {item.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 760px) {
          .milestones-row { grid-template-columns: repeat(2, 1fr) !important; gap: 28px 0; }
          .milestone-cell { border-left: none !important; }
          .milestone-cell:nth-child(even) { border-left: 1px solid var(--border) !important; }
        }
        @media (max-width: 380px) {
          .milestones-row { grid-template-columns: 1fr !important; }
          .milestone-cell:nth-child(even) { border-left: none !important; }
        }
      `}</style>
    </section>
  )
}

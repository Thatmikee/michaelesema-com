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

const col: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 'clamp(14px, 1.35vw, 16px)',
  color: 'var(--text-secondary)',
  lineHeight: 1.85,
  fontWeight: 300,
}

export default function About() {
  return (
    <section id="about" style={{
      background: 'var(--bg-surface)',
      padding: 'clamp(80px, 10vw, 130px) clamp(28px, 8vw, 100px)',
    }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <FadeIn>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(30px, 4.4vw, 52px)',
            fontWeight: 800,
            color: 'var(--ink)',
            letterSpacing: '-1px',
            textAlign: 'center',
            marginBottom: 28,
          }}>
            About me<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(17px, 2vw, 22px)',
            color: 'var(--ink)',
            lineHeight: 1.55,
            fontWeight: 400,
            textAlign: 'center',
            maxWidth: 720,
            margin: '0 auto clamp(44px, 6vw, 64px)',
          }}>
            Michael Esema is the founder behind Mykei Securities Ltd, a UK-first security venture
            working on asset protection, resale-driven theft and evidence-led prevention.
          </p>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="about-cols" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(36px, 5vw, 64px)',
          }}>
            <div>
              <p style={{ ...col, marginBottom: 18 }}>
                His work asks a practical question: what happens after something is stolen, and how
                can that resale route be made weaker before the theft happens?
              </p>
              <p style={{ ...col, margin: 0 }}>
                He grew up in Nigeria, studied Accounting at Benson Idahosa University, completed an
                MBA at the Nigerian Defence Academy, and later earned an MSc in International Business
                Management at Manchester Metropolitan University.
              </p>
            </div>
            <div>
              <p style={{ ...col, marginBottom: 18 }}>
                Before Mykei, his path moved through student leadership, emergency-management
                exposure, hospitality operations, finance and frontline support work in the UK.
              </p>
              <p style={{ ...col, margin: 0 }}>
                The common thread is practical systems: where they fail, who they leave exposed, and
                how they can be redesigned so harm is harder to profit from.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .about-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

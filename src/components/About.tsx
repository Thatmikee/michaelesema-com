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
      background: 'var(--section-tint)',
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
            I grew up in Nigeria and now live and work in Manchester. I look at how something
            works before how it looks, which is usually where the money leaks.
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
                I studied Accounting at Benson Idahosa University, did an MBA at the Nigerian
                Defence Academy, then an MSc in International Business Management at Manchester
                Metropolitan University.
              </p>
              <p style={{ ...col, margin: 0 }}>
                My working life has run through student leadership, emergency management
                administration, hotel finance and operations as Head Accountant, frontline
                support work in the UK, and design. The thread through all of it is the same:
                how systems work, where they fail, and what it costs when they do.
              </p>
            </div>
            <div>
              <p style={{ ...col, margin: 0 }}>
                Next is finance and international business: commercial finance, and the
                institutions that move money across borders. I&apos;m building Power BI skills
                towards PL-300 and considering CIMA.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.22}>
          <div style={{ marginTop: 'clamp(44px, 6vw, 64px)', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ ...col, fontWeight: 500, color: 'var(--ink)', marginBottom: 12 }}>
              The work is the evidence.
            </p>
            <p style={{ ...col, margin: 0 }}>
              I&apos;d rather show a finished thing than list a title. A working website. A
              prototype. A piece of research that survives scrutiny. Something another person
              can pick up and use.
            </p>
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

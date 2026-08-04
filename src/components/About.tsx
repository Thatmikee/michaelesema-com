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
            Michael Esema is a graphics and multimedia designer working out of Manchester,
            building brand identities and websites for small businesses through his studio,
            Teal Sand Studios.
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
                He designs the whole object, not a screen of it. Identity, type system, layout,
                motion and the front end that ships it, on the theory that a brand only exists
                once someone can actually visit it.
              </p>
              <p style={{ ...col, margin: 0 }}>
                He grew up in Nigeria, studied Accounting at Benson Idahosa University, completed an
                MBA at the Nigerian Defence Academy, and later earned an MSc in International Business
                Management at Manchester Metropolitan University.
              </p>
            </div>
            <div>
              <p style={{ ...col, marginBottom: 18 }}>
                Before design became the work, his path moved through student leadership,
                emergency-management exposure, hospitality operations, finance and frontline
                support work in the UK. He also founded a UK security company and took a system
                from idea to a filed patent application.
              </p>
              <p style={{ ...col, margin: 0 }}>
                The common thread is practical systems: where they fail, who they leave exposed,
                and how they can be rebuilt so they hold. Design is the same problem with a
                different surface.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.22}>
          <div style={{ marginTop: 'clamp(44px, 6vw, 64px)', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            <p style={{ ...col, fontWeight: 500, color: 'var(--ink)', marginBottom: 12 }}>
              Before this.
            </p>
            <p style={{ ...col, marginBottom: 14 }}>
              I founded Mykei Securities Ltd, a UK security venture working on asset integrity
              and resale-driven theft, and took it from a written thesis to a filed UK patent
              application. I built the research, the brand, the product architecture and both
              websites myself.
            </p>
            <p style={{ ...col, marginBottom: 14 }}>
              Mykei is paused. The company still exists and the patent application is being
              held, but there is no active product and no active outreach while I focus on
              design work.
            </p>
            <p style={{ ...col, margin: 0 }}>
              I keep it here because it is the honest answer to whether I can finish things. I
              have run a company, defended an idea in writing, filed IP and shipped the sites
              that carried all of it. When I say I will build your site and hand it over
              working, that is what the claim is standing on.
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

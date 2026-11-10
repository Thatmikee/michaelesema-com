import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const up = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  })

  return (
    <section aria-label="Introduction" style={{ position: 'relative', overflow: 'hidden', minHeight: '100dvh', display: 'flex', alignItems: 'center', paddingTop: 96, paddingBottom: 48 }}>
      <div className="wrap hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'center', position: 'relative' }}>
        <div>
          <motion.h1 {...up(0.1)} style={{ font: '600 clamp(34px, 4.5vw, 62px)/1.05 var(--font-sans)', letterSpacing: '-0.035em', color: 'var(--ink)' }}>
            Michael Esema.
            <span style={{ display: 'block', color: 'var(--text-muted)', maxWidth: '14em' }}>Graphic and multimedia designer.</span>
          </motion.h1>
          <motion.p {...up(0.25)} style={{ font: '400 clamp(17px, 1.5vw, 20px)/1.55 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '44ch', marginTop: 26 }}>
            Identity, print, web and film since 2018. Trained as an accountant, so the work lands on brief and on budget.
          </motion.p>
          <motion.div {...up(0.38)} style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <a href="#work" className="pill pill-solid">See the work</a>
            <a href="mailto:hello@michaelesema.com" className="pill pill-glass glass">Email me</a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? {} : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
          className="hero-portrait"
          style={{ borderRadius: 'var(--radius-hero)', overflow: 'hidden', aspectRatio: '4 / 5', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border)' }}
        >
          <img src="/michael-esema-portrait.jpg" alt="Michael Esema" width={1000} height={1249} fetchPriority="high"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-portrait { order: -1; max-width: 360px; aspect-ratio: 1 / 1 !important; }
        }
      `}</style>
    </section>
  )
}

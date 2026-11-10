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
      {/* Soft light behind the portrait. Decorative only. */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(60% 55% at 72% 50%, rgba(92,200,211,0.16), transparent 70%), radial-gradient(40% 40% at 20% 90%, rgba(255,255,255,0.05), transparent 70%)',
      }} />
      <div className="wrap hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'center', position: 'relative' }}>
        <div>
          <motion.p {...up(0.05)} style={{ font: '500 15px/1.4 var(--font-sans)', color: 'var(--accent)', marginBottom: 22 }}>
            Graphic and multimedia designer, Manchester
          </motion.p>
          <motion.h1 {...up(0.15)} style={{ font: '600 clamp(40px, 6vw, 76px)/1.02 var(--font-sans)', letterSpacing: '-0.035em', color: 'var(--ink)', maxWidth: '12ch' }}>
            Brand, print, web and motion. Made to be used.
          </motion.h1>
          <motion.p {...up(0.28)} style={{ font: '400 clamp(17px, 1.5vw, 20px)/1.55 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '46ch', marginTop: 24 }}>
            I have designed for businesses since 2018, from a hotel's whole visual identity to short films people actually finish.
          </motion.p>
          <motion.div {...up(0.4)} style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
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

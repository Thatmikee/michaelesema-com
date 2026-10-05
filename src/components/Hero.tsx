import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const fadeUp = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  })

  return (
    <section
      aria-label="Introduction"
      style={{
        background: 'var(--hero-bg)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'min(94vh, 860px)',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <div className="hero-grid" style={{
        maxWidth: 1280, margin: '0 auto', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        alignItems: 'end',
        minHeight: 'inherit',
      }}>
        {/* Left: statement */}
        <div className="hero-copy" style={{
          padding: 'clamp(120px, 14vw, 170px) clamp(28px, 5vw, 56px) clamp(64px, 9vw, 110px)',
          zIndex: 2,
        }}>
          <motion.p {...fadeUp(0.05)} style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            margin: 0,
          }}>
            Michael Esema
          </motion.p>

          <motion.h1 {...fadeUp(0.16)} style={{
            fontFamily: "'Fraunces', serif",
            fontOpticalSizing: 'auto',
            fontSize: 'clamp(32px, 4.6vw, 54px)',
            fontWeight: 650,
            lineHeight: 1.18,
            letterSpacing: '-0.4px',
            color: 'var(--ink)',
            margin: '10px 0 0',
            maxWidth: 560,
          }}>
            I started in accounting because I wanted to understand how businesses
            actually work. Now I use that to{' '}
            <span style={{
              backgroundImage: 'linear-gradient(var(--highlight), var(--highlight))',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 92%',
              backgroundSize: '100% 0.28em',
            }}>
              build and lead them
            </span>
            .
          </motion.h1>

          <motion.div {...fadeUp(0.46)}>
            <a href="#work" className="hero-link" style={{
              display: 'inline-flex', alignItems: 'center',
              color: 'var(--accent)',
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: 600, fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: 40,
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
            }}>
              Selected work <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        {/* Right: integrated portrait (grey background blends into hero) */}
        <motion.div
          className="hero-portrait"
          initial={reduce ? {} : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease }}
          style={{ position: 'relative', alignSelf: 'end', height: '100%', minHeight: 360 }}
        >
          <img
            src="/michael-esema-portrait.jpg"
            alt="Michael Esema, in a black leather jacket"
            style={{
              position: 'absolute',
              right: 0, bottom: 0,
              height: '100%', width: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </motion.div>
      </div>

      <style>{`
        .hero-link:hover, .hero-link:focus-visible { border-bottom-color: var(--accent); }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-copy { order: 2; padding-top: 24px !important; }
          .hero-portrait { order: 1; height: auto !important; min-height: 0 !important; }
          .hero-portrait img {
            position: relative !important;
            height: auto !important;
            max-height: 56vh;
            object-position: center 18% !important;
          }
        }
      `}</style>
    </section>
  )
}

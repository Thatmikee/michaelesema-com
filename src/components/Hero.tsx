import { motion, useReducedMotion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

// Existing verified LinkedIn URL (also in index.html JSON-LD sameAs).
const LINKEDIN = 'https://www.linkedin.com/in/michaelesema'

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
          <motion.div {...fadeUp(0.05)} aria-hidden="true" style={{
            width: 46, height: 6, background: 'var(--accent)', borderRadius: 3, marginBottom: 26,
          }} />

          <motion.h1 {...fadeUp(0.12)} style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(40px, 7vw, 84px)',
            fontWeight: 900,
            lineHeight: 0.98,
            letterSpacing: '-1.5px',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            margin: 0,
          }}>
            Michael<br />Esema
          </motion.h1>

          <motion.p {...fadeUp(0.26)} style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(17px, 2vw, 23px)',
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'var(--ink)',
            marginTop: 26,
            maxWidth: 460,
            letterSpacing: '-0.3px',
          }}>
            Founder, researcher and builder working where{' '}
            <span style={{
              backgroundImage: 'linear-gradient(var(--accent), var(--accent))',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 88%',
              backgroundSize: '100% 0.32em',
            }}>
              security, ownership and resale markets
            </span>
            {' '}meet.
          </motion.p>

          <motion.p {...fadeUp(0.36)} style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            fontWeight: 300,
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            marginTop: 20,
            maxWidth: 430,
          }}>
            I build practical security ideas and systems that make stolen assets
            harder to sell, move, use or deny.
          </motion.p>

          <motion.div {...fadeUp(0.46)} style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#work"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'var(--accent)', color: 'var(--ink)',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700, fontSize: 13,
                letterSpacing: '0.01em',
                padding: '15px 30px', textDecoration: 'none',
                borderRadius: 8,
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--accent-hover)'; el.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--accent)'; el.style.transform = 'translateY(0)' }}
            >
              View my work
            </a>
            {/* Connect opens LinkedIn in a new tab */}
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                color: 'var(--ink)',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600, fontSize: 13,
                padding: '15px 6px', textDecoration: 'none',
                borderBottom: '2px solid var(--border-mid)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'var(--border-mid)' }}
            >
              Connect
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
            alt="Michael Esema, founder of Mykei Securities Ltd, in a black leather jacket"
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

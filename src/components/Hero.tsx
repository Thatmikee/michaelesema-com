import { motion, useReducedMotion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease },
  })

  return (
    <section
      aria-label="Introduction"
      style={{
        background: '#050817',
        borderRadius: '0 0 80px 0',
        padding: 'clamp(100px, 13vw, 160px) clamp(28px, 7vw, 90px) clamp(72px, 9vw, 110px)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* Grid texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px),
          radial-gradient(circle, rgba(36,87,255,0.07) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '64px 64px, 64px 64px, 32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Blue glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', left: '-5%', top: '-10%',
        width: '55vw', height: '55vw',
        background: 'radial-gradient(circle, rgba(36,87,255,0.10) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, position: 'relative', zIndex: 2 }}>
        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(30px, 4.8vw, 64px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-1px',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          margin: 0,
        }}>
          Michael Esema.<br />
          Founder. Researcher. Builder.<br />
          Working where{' '}
          <span style={{ color: '#4d7cff' }}>security,<br />incentives and systems</span>
          {' '}meet.
        </motion.h1>

        <motion.p {...fadeUp(0.4)} style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(14px, 1.4vw, 17px)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.48)',
          marginTop: 32,
          maxWidth: 520,
          lineHeight: 1.85,
        }}>
          I build ideas, ventures and security systems for a world where crime is
          harder to monetise, assets are harder to exploit, and prevention is
          designed into the system.
        </motion.p>

        <motion.div {...fadeUp(0.55)} style={{
          display: 'flex', gap: 14, marginTop: 48, flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <a
            href="#work"
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#4d7cff', color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, fontSize: 12.5,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              padding: '15px 32px', textDecoration: 'none',
              borderRadius: 6,
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#3d6aff'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#4d7cff'
              el.style.transform = 'translateY(0)'
            }}
          >
            View my work
          </a>
          <a
            href="https://www.linkedin.com/in/michaelesema"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600, fontSize: 12.5,
              letterSpacing: '0.07em', textTransform: 'uppercase',
              padding: '15px 0', textDecoration: 'none',
              borderBottom: '1.5px solid rgba(255,255,255,0.25)',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = '#ffffff'
              el.style.borderBottomColor = 'rgba(255,255,255,0.6)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.color = 'rgba(255,255,255,0.7)'
              el.style.borderBottomColor = 'rgba(255,255,255,0.25)'
            }}
          >
            Connect
          </a>
        </motion.div>
      </div>
    </section>
  )
}

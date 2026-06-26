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
    <section style={{
      minHeight: '100dvh',
      background: '#0A0B18',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(110px, 13vw, 150px) clamp(32px, 8vw, 100px) clamp(64px, 8vw, 100px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(160,24,24,0.07) 1px, transparent 1px)`,
        backgroundSize: '44px 44px',
        pointerEvents: 'none',
      }} />

      {/* Red glow accent — bottom right */}
      <div style={{
        position: 'absolute', right: '-10%', bottom: '-20%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(160,24,24,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, position: 'relative', zIndex: 1 }}>

        <motion.p {...fadeUp(0.05)} style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(13px, 1.3vw, 16px)',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}>
          Hi,
        </motion.p>

        <motion.h1 {...fadeUp(0.15)} style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: 'clamp(40px, 7.5vw, 96px)',
          fontWeight: 900,
          lineHeight: 1.02,
          letterSpacing: '-1.5px',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          margin: 0,
        }}>
          I am Michael,<br />
          a Business<br />
          Thinker &amp; Founder.<br />
          <span style={{ color: '#A01818' }}>I wrote the Doctrine<br />for Economic<br className="hero-br-mobile" /> Sterilisation.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.45)} style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(14.5px, 1.4vw, 17px)',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.5)',
          marginTop: 36,
          maxWidth: 460,
          lineHeight: 1.85,
        }}>
          MBA. MSc International Business Management. Founder of Mykei Securities Ltd.
          The patent is filed. Manchester is where I built the proof.
        </motion.p>

        <motion.div {...fadeUp(0.6)} style={{
          display: 'flex', gap: 16, marginTop: 44, flexWrap: 'wrap',
        }}>
          <a
            href="#work"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#A01818', color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, fontSize: 13,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '15px 32px', textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
              borderRadius: 3,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#C0392B'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#A01818'
              el.style.transform = 'translateY(0)'
            }}
          >
            View My Work
          </a>
          <a
            href="https://www.linkedin.com/in/michaelesema"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, fontSize: 13,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '15px 32px', textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.25)',
              borderRadius: 3,
              transition: 'border-color 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.65)'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.25)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Connect ↗
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-br-mobile { display: none; }
        }
      `}</style>
    </section>
  )
}

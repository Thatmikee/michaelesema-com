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

      {/* Circuit grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
          radial-gradient(circle, rgba(59,91,219,0.08) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '60px 60px, 60px 60px, 30px 30px',
        pointerEvents: 'none',
      }} />

      {/* Red glow accent — bottom right */}
      <div style={{
        position: 'absolute', right: '-10%', bottom: '-20%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(59,91,219,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Curved swoosh — bleeds next section colour into hero bottom-right */}
      <div className="hero-swoosh" style={{
        position: 'absolute',
        bottom: 0, right: 0,
        background: '#F2F2F2',
        borderRadius: '80px 0 0 0',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, position: 'relative', zIndex: 2 }}>

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
          <span style={{ color: '#3B5BDB' }}>I wrote the Doctrine<br />for Economic<br className="hero-br-mobile" /> Sterilisation.</span>
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
              background: '#3B5BDB', color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, fontSize: 13,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '15px 32px', textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
              borderRadius: 3,
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#4D7AFF'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#3B5BDB'
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
              background: '#0A66C2', color: '#fff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700, fontSize: 13,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              padding: '14px 28px', textDecoration: 'none',
              borderRadius: 3,
              transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#004182'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#0A66C2'
              el.style.transform = 'translateY(0)'
            }}
          >
            {/* LinkedIn official "in" logo */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-br-mobile { display: none; }
        }
        .hero-swoosh {
          width: 58%;
          height: 130px;
        }
        @media (max-width: 768px) {
          .hero-swoosh {
            width: 72%;
            height: 90px;
            border-radius: 60px 0 0 0;
          }
        }
      `}</style>
    </section>
  )
}

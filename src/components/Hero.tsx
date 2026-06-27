import { motion, useReducedMotion } from 'framer-motion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

// Existing verified LinkedIn URL (also present in index.html JSON-LD sameAs).
const LINKEDIN = 'https://www.linkedin.com/in/michaelesema'

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  })

  return (
    <section aria-label="Introduction" style={{ background: 'var(--page-bg)', padding: 0 }}>
      {/* Dark navy card, flush to the top so the fixed nav always sits on dark,
          with a sculptural asymmetric bottom-right sweep into the light page. */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--navy)',
          margin: '0 clamp(0px, 1.4vw, 18px)',
          borderRadius: '0 0 clamp(56px, 11vw, 128px) 28px',
          minHeight: 'min(92vh, 820px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(120px, 15vw, 180px) clamp(28px, 7vw, 96px) clamp(64px, 8vw, 104px)',
        }}
      >
        {/* Faint grid texture only — no glows, no gradients */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: '68px 68px',
          maskImage: 'radial-gradient(120% 100% at 30% 20%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(120% 100% at 30% 20%, #000 40%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1080, position: 'relative', zIndex: 2, width: '100%', margin: '0 auto' }}>
          <motion.h1 {...fadeUp(0.08)} style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(28px, 4.5vw, 58px)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.5px',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            margin: 0,
          }}>
            Michael Esema.<br />
            Founder. Researcher. Builder.<br />
            Working where{' '}
            <span style={{ color: 'var(--accent)' }}>
              security,<br />incentives and asset protection
            </span>
            {' '}meet.
          </motion.h1>

          <motion.p {...fadeUp(0.32)} style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            marginTop: 30,
            maxWidth: 540,
            lineHeight: 1.8,
          }}>
            I build security ideas and practical systems that make stolen assets
            harder to sell, move, use or deny.
          </motion.p>

          <motion.div {...fadeUp(0.46)} style={{
            display: 'flex', gap: 18, marginTop: 42, flexWrap: 'wrap', alignItems: 'center',
          }}>
            <a
              href="#work"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'var(--accent)', color: '#fff',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700, fontSize: 12.5,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '15px 30px', textDecoration: 'none',
                borderRadius: 8,
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = 'var(--accent-hover)'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = 'var(--accent)'
                el.style.transform = 'translateY(0)'
              }}
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
                color: 'rgba(255,255,255,0.72)',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600, fontSize: 12.5,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                padding: '15px 4px', textDecoration: 'none',
                borderBottom: '1.5px solid rgba(255,255,255,0.22)',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = '#ffffff'
                el.style.borderBottomColor = 'rgba(255,255,255,0.6)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.color = 'rgba(255,255,255,0.72)'
                el.style.borderBottomColor = 'rgba(255,255,255,0.22)'
              }}
            >
              Connect
            </a>
          </motion.div>
        </div>

        {/* Tasteful circular scroll control (icon only) */}
        <motion.a
          href="#about"
          aria-label="Scroll to about section"
          initial={reduce ? {} : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          style={{
            position: 'absolute',
            right: 'clamp(26px, 6vw, 72px)',
            bottom: 'clamp(40px, 7vw, 80px)',
            width: 52, height: 52,
            borderRadius: '50%',
            border: '1.5px solid rgba(255,255,255,0.28)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.85)',
            zIndex: 3,
            transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
          }}
          className="hero-scroll-dot"
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'var(--accent)'
            el.style.borderColor = 'var(--accent)'
            el.style.transform = 'translateY(3px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.background = 'transparent'
            el.style.borderColor = 'rgba(255,255,255,0.28)'
            el.style.transform = 'translateY(0)'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  )
}

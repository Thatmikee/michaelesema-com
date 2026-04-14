import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TheftCounter from './TheftCounter'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const photoY   = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border-light) 1px, transparent 1px), linear-gradient(90deg, var(--border-light) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.4,
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 5vw, 60px) clamp(60px, 8vw, 100px)',
        display: 'grid',
        gridTemplateColumns: '400px 1fr',
        gap: 'clamp(40px, 6vw, 96px)',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }} className="hero-grid">

        {/* Photo — LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Corner accent */}
          <div style={{
            position: 'absolute',
            top: -10, left: -10,
            bottom: 16, right: 16,
            border: '1px solid var(--gold-line)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          <motion.div style={{ y: photoY, position: 'relative', zIndex: 1 }}>
            <div style={{ overflow: 'hidden', aspectRatio: '3/3.8', position: 'relative' }}>
              <img
                src="/michael-esema-hero.jpg"
                alt="Michael Esema, Founder of Mykei Securities Ltd"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'grayscale(100%) contrast(1.06) brightness(0.96)',
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '18px 20px 16px',
                background: 'linear-gradient(transparent, rgba(10,10,10,0.82))',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,245,240,0.55)',
                }}>Manchester, UK</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-light)',
                }}>Est. 2025</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content — RIGHT */}
        <motion.div style={{ y: contentY }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}
          >
            <span style={{ width: 32, height: 1, background: 'var(--gold)', display: 'block' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>
              Founder, Mykei Securities Ltd
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(40px, 5.5vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.08,
              color: 'var(--text-primary)',
              marginBottom: 16,
            }}
          >
            I proved stolen goods<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>can be made worthless.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(15px, 1.6vw, 17px)',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              maxWidth: 480,
              marginBottom: 36,
            }}
          >
            Every retail security system ever built assumed you had to stop the thief.
            I asked a different question: what if the goods they take have no value once they leave?
            The ADN-1 is the answer. This is{' '}
            <strong style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Economic Sterilisation</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44 }}
          >
            <TheftCounter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.58 }}
            style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}
          >
            <a
              href="https://mykei.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--text-primary)',
                color: '#fff',
                padding: '13px 28px',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                borderRadius: 2,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--text-primary)')}
            >
              See the ADN-1
              <span style={{ opacity: 0.7 }}>↗</span>
            </a>
            <a
              href="/thesis"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: 'var(--text-secondary)',
                padding: '13px 20px',
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                border: '1px solid var(--border)',
                borderRadius: 2,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              Read the thesis
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}
      >
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 8,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 28, background: `linear-gradient(var(--gold), transparent)` }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-grid > div:first-child {
            max-width: 280px;
          }
        }
        @media (max-width: 600px) {
          .hero-grid {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

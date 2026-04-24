import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Connect() {
  return (
    <section
      id="connect"
      style={{
        background: 'var(--dark)',
        padding: 'clamp(72px, 10vw, 120px) clamp(24px, 7vw, 80px)',
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <FadeIn>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 16,
          }}>
            <span style={{ width: 24, height: 1, background: 'var(--gold-light)' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-light)',
            }}>Connect</span>
            <span style={{ width: 24, height: 1, background: 'var(--gold-light)' }} />
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 400,
            color: '#F5F5F0',
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            The pilot is running.<br />
            <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>The data is coming in.</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p style={{
            fontSize: 15.5,
            lineHeight: 1.8,
            color: 'rgba(245,245,240,0.55)',
            marginBottom: 36,
            fontWeight: 300,
          }}>
            Five retailers in Manchester. Five weeks of live theft data from the ADN-1 system.
            I document what happens: the numbers, the problems, what the retailers actually say.
            No PR department. No polished version. Just what is true.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.linkedin.com/in/michaelesema"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'var(--gold-light)',
                color: '#0A0B0A',
                padding: '13px 28px',
                fontSize: 13,
                fontWeight: 700,
                borderRadius: 2,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Follow on LinkedIn
            </a>
            <a
              href="https://mykei.io/pilot"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: 'rgba(245,245,240,0.65)',
                padding: '13px 24px',
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 2,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                border: '1px solid rgba(245,245,240,0.2)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-light)'; e.currentTarget.style.color = 'var(--gold-light)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,245,240,0.2)'; e.currentTarget.style.color = 'rgba(245,245,240,0.65)' }}
            >
              Join the Pilot ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '29', label: 'Years old' },
  { value: '3', label: 'Degrees earned' },
  { value: '1', label: 'Patent pending' },
  { value: '5', label: 'Pilot partners' },
]

function StatCounter({ value }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const num = parseInt(value)
    if (isNaN(num)) return
    const el = ref.current
    if (!el) return

    let start = 0
    const duration = 1200
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.round(start + (num - start) * eased).toString()
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [value])

  return <span ref={ref}>{value}</span>
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--dark)',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-5%',
        width: 700,
        height: 700,
        background: 'radial-gradient(circle, rgba(198,164,78,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(198,164,78,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '120px 40px 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: 80,
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }} className="hero-grid">

        {/* Content */}
        <motion.div style={{ y: contentY }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
          >
            <span style={{ width: 40, height: 1, background: 'var(--gold)', display: 'block' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>
              Founder & CEO, Mykei Securities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(52px, 7vw, 80px)',
              fontWeight: 400,
              lineHeight: 1.04,
              color: 'var(--text-primary)',
              marginBottom: 14,
            }}
          >
            Michael
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Esema</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
              marginBottom: 28,
              fontWeight: 400,
            }}
          >
            The man making stolen goods worthless.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.85,
              color: 'var(--text-secondary)',
              maxWidth: 500,
            }}
          >
            I identified a structural failure in UK retail security and built the solution
            myself. <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>ADN-1 Active Forensic Defence</strong> detects
            organised theft in real time and deploys synthetic DNA forensic markers —
            making every stolen item traceable, identifiable, and{' '}
            <strong style={{ fontWeight: 500, color: 'var(--text-primary)' }}>commercially dead</strong>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 44,
              paddingTop: 28,
              borderTop: '1px solid var(--dark-border)',
              flexWrap: 'wrap',
            }}
          >
            {stats.map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 38,
                  fontWeight: 400,
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}>
                  <StatCounter value={stat.value} label={stat.label} />
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--text-muted)',
                  marginTop: 6,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Corner frame accent */}
          <div style={{
            position: 'absolute',
            top: -10, right: -10,
            bottom: 18, left: 18,
            border: '1px solid rgba(198,164,78,0.25)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          <motion.div
            style={{ y: photoY, position: 'relative', zIndex: 1 }}
          >
            <div style={{
              overflow: 'hidden',
              aspectRatio: '3/3.8',
              position: 'relative',
            }}>
              <img
                src="/michael-esema-hero.jpg"
                alt="Michael Esema — Founder and CEO of Mykei Securities Ltd"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(0.97)',
                }}
              />
              {/* Photo overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '20px 22px 18px',
                background: 'linear-gradient(transparent, rgba(8,8,8,0.88))',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>
                  Manchester, UK
                </span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}>
                  EST. 2025
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(var(--gold), transparent)' }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding-top: 100px !important;
          }
          .hero-grid > div:last-child {
            max-width: 300px;
            order: -1;
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

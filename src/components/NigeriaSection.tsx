import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function NigeriaSection() {
  return (
    <section
      id="nigeria"
      style={{
        background: 'var(--bg-section)',
        padding: 'clamp(72px, 10vw, 120px) clamp(24px, 7vw, 80px)',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}
        className="nigeria-grid"
      >
        <div>
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <span aria-hidden="true" style={{ color: 'var(--gold-text)', fontSize: 8, lineHeight: 1 }}>◆</span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-text)',
                }}
              >
                Nigeria
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Nigeria made me.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold-text)' }}>I have not forgotten it.</em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: 18,
                maxWidth: 520,
              }}
            >
              When a solar battery, an inverter, a generator or a cable reel is stolen in
              Nigeria, it usually becomes anonymous within hours. No serial record, no
              photographs, no proof of ownership. It surfaces in an open market or a repair
              shop, and the owner has nothing to point to. That anonymity is what makes the
              theft worth doing.
            </p>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: 28,
                maxWidth: 520,
              }}
            >
              Probata is what I am designing against that: a registry-first programme for
              Nigerian asset owners. Mark the asset, register it, photograph it, and if it
              is stolen, flag it and give the owner an evidence pack designed to support
              recovery. It is in early design and follows the UK work in sequence. Nigeria
              raised me, through Benson Idahosa University and the Nigerian Defence Academy,
              and I still serve the BIU diaspora community from the UK. Every 12 June I mark
              Democracy Day with the same wish: opportunity and a better tomorrow for every
              Nigerian.
            </p>
            <a
              href="/protocol"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'var(--gold-text)',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                borderBottom: '1px solid var(--gold-line)',
                paddingBottom: 3,
              }}
            >
              See the Probata protocol
              <span aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <figure style={{ margin: '0 auto', position: 'relative', maxWidth: 380 }}>
            <div
              style={{
                position: 'absolute',
                top: -10,
                right: -10,
                bottom: 16,
                left: 16,
                border: '1px solid var(--gold-line)',
                pointerEvents: 'none',
              }}
            />
            <img
              src="/nigeria-democracy-day.jpg"
              alt="Democracy Day greeting card from Michael Esema with the Nigerian flag, reading Happy Democracy Day Nigeria"
              loading="lazy"
              style={{
                width: '100%',
                display: 'block',
                position: 'relative',
                borderRadius: 2,
              }}
            />
            <figcaption
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: 12,
              }}
            >
              The greeting I share with the Nigerian community every 12 June
            </figcaption>
          </figure>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nigeria-grid {
            grid-template-columns: 1fr !important;
          }
          .nigeria-grid figure {
            max-width: 440px;
          }
        }
      `}</style>
    </section>
  )
}

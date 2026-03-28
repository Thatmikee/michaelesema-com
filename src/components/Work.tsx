import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { value: '5', label: 'Pilot Partners' },
  { value: '17', label: 'Patent Claims' },
  { value: '£40', label: 'Monthly / Unit' },
  { value: '1', label: 'Live Prototype' },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      style={{
        background: 'var(--dark)',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '100px 40px',
      }}>
        {/* Section header */}
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 56 }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 52,
              fontWeight: 400,
              color: 'var(--gold)',
              lineHeight: 1,
              opacity: 0.55,
            }}>
              02
            </span>
            <div>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 4,
              }}>
                Current Work
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.2,
              }}>
                What I'm building & doing
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* Product card */}
        <FadeIn delay={0.1}>
          <div style={{
            background: 'var(--dark-card)',
            border: '1px solid var(--dark-border)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top gold gradient line */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: 2,
              background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            }} />

            <div style={{ padding: '52px 56px' }} className="product-inner">
              {/* Live badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                background: 'rgba(198,164,78,0.08)',
                border: '1px solid rgba(198,164,78,0.18)',
                borderRadius: 100,
                marginBottom: 24,
              }}>
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  style={{
                    width: 6, height: 6,
                    background: 'var(--gold)',
                    borderRadius: '50%',
                    display: 'block',
                  }}
                />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10.5,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}>
                  Patent Pending — MYK-PAT-001
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(24px, 2.5vw, 34px)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: 8,
                lineHeight: 1.2,
              }}>
                ADN-1 Active Forensic Defence Node
              </h3>

              <p style={{
                fontSize: 15,
                color: 'var(--text-muted)',
                marginBottom: 28,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.04em',
              }}>
                Mykei Securities Ltd — Hardware-Enabled SaaS
              </p>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.85,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                maxWidth: 720,
                marginBottom: 16,
              }}>
                A shelf-mounted IoT device for independent jewellers, off-licences, and convenience
                stores. Dual VL53L0X Time-of-Flight sensors detect when multiple items are swept
                simultaneously — the signature of organised retail crime. Upon detection, the device
                autonomously deploys a synthetic DNA forensic marker mist onto the stolen goods.
              </p>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.85,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                maxWidth: 720,
                marginBottom: 28,
              }}>
                The forensic marker is invisible, non-toxic, and permanent. It links every tagged
                item to the specific crime event, store, and timestamp. Tagged goods become
                commercially worthless — any attempt to resell creates a forensic trail directly
                to the handler.
              </p>

              {/* Core concept callout */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 16,
                padding: '14px 22px',
                background: 'rgba(198,164,78,0.05)',
                borderLeft: '2px solid var(--gold)',
                marginBottom: 48,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>
                  Core concept
                </span>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 20,
                  color: 'var(--gold)',
                }}>
                  Economic Sterilisation
                </span>
              </div>

              {/* Metrics */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                background: 'var(--dark-border)',
                borderTop: '1px solid var(--dark-border)',
                borderBottom: '1px solid var(--dark-border)',
                marginBottom: 40,
              }} className="metrics-grid">
                {metrics.map(m => (
                  <div key={m.label} style={{
                    background: 'var(--dark-card)',
                    padding: '28px 20px',
                    textAlign: 'center',
                  }}>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 34,
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      display: 'block',
                      lineHeight: 1,
                    }}>
                      {m.value}
                    </span>
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      color: 'var(--text-muted)',
                      marginTop: 6,
                      display: 'block',
                      letterSpacing: '0.06em',
                    }}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://mykei.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '13px 28px',
                  background: 'var(--gold)',
                  color: 'var(--dark)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: 13.5,
                  letterSpacing: '0.03em',
                  transition: 'background 0.25s, transform 0.25s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'var(--gold)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                Explore mykei.io
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Alumni role card */}
        <FadeIn delay={0.25}>
          <div style={{
            marginTop: 12,
            background: 'var(--dark-card)',
            border: '1px solid var(--dark-border)',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }} className="alumni-card">
            <div style={{
              width: 3,
              alignSelf: 'stretch',
              background: 'linear-gradient(180deg, var(--gold) 0%, transparent 100%)',
              flexShrink: 0,
            }} />
            <div style={{
              padding: '28px 36px',
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              flexWrap: 'wrap',
              flex: 1,
            }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9.5,
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: 8,
                }}>
                  Alumni Leadership
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(18px, 1.8vw, 22px)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}>
                  Alumni Coordinator (Diaspora)
                </h3>
                <p style={{
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.04em',
                }}>
                  Dept. of Accounting · Benson Idahosa University
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  UK Chapter · Manchester
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .product-inner {
            padding: 32px 24px !important;
          }
        }
        @media (max-width: 700px) {
          .alumni-card > div:last-child {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .alumni-card > div:last-child > div:last-child {
            text-align: left !important;
          }
        }
        @media (max-width: 600px) {
          #work > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

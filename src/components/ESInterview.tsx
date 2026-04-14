// ESInterview.tsx
// "Why Economic Sterilisation?" — interview format section

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const QA = [
  {
    q: 'Every security company says they solve retail theft. What makes this different?',
    a: `They are all solving the wrong problem. Every product on the market assumes the goal is to stop the thief at the point of theft. CCTV, tags, guards, alarms. Raise the cost, raise the friction, hope they go somewhere else. None of them ask why theft is profitable in the first place. It is profitable because stolen goods can be sold. Remove that and the whole business case for organised retail crime collapses. That is what the ADN-1 does. Not deterrence. An economic kill switch.`,
  },
  {
    q: 'Where did the idea actually come from?',
    a: `I was reading about SelectaDNA and SmartWater, which are both DNA marking products used by police forces. They work. But they are passive. You mark your property and hope it turns up. I kept thinking: what if the device deployed the marker automatically, at the exact moment of a theft, onto the goods themselves? And what if that event was logged to a cloud database before the thief left the building? The legal chain of evidence exists before anyone has called the police. That was the insight. From that one question, everything else followed.`,
  },
  {
    q: 'Why file a patent? Most startups move fast and worry about IP later.',
    a: `Because the doctrine is the product. Economic Sterilisation as a named concept, a filed claim, a published paper, a registered term, is harder to take than a physical device in a warehouse. I filed the patent on the same day I filed the company. Patent Number 2606630.8, seventeen claims, UK Intellectual Property Office. The white paper documents the theory. The patent documents the implementation. I am not building a gadget. I am building a new category of retail security and I intend to own that category.`,
  },
  {
    q: 'What does winning look like to you?',
    a: `In ten years, organised retail crime in the UK is economically unviable. Not because we arrested everyone or because every shop has a guard. Because the goods stop paying out. Insurers price Mykei certification into their premiums. Marketplaces run our registry checks at point of listing. The ADN-1 is standard fitting in independent retail the way a smoke alarm is standard in a house. I am not trying to sell a product. I am trying to change the economics of crime. That is what winning looks like.`,
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
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

export default function ESInterview() {
  return (
    <section
      id="interview"
      style={{
        background: 'var(--bg-section)',
        padding: 'clamp(72px, 10vw, 120px) clamp(24px, 7vw, 80px)',
        position: 'relative',
      }}
    >
      {/* Gold top line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'var(--border)' }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'block' }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
            }}>
              In conversation
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(30px, 4vw, 46px)',
            fontWeight: 400,
            lineHeight: 1.15,
            color: 'var(--text-primary)',
            marginBottom: 12,
          }}>
            Why Economic<br />
            <em style={{ color: 'var(--gold)' }}>Sterilisation?</em>
          </h2>
          <p style={{
            fontSize: 15,
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            marginBottom: 56,
            fontFamily: "'Outfit', sans-serif",
          }}>
            Michael Esema on building a doctrine, not a product.
          </p>
        </FadeIn>

        {QA.map((item, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div style={{
              paddingBottom: 'clamp(36px, 5vw, 56px)',
              marginBottom: 'clamp(36px, 5vw, 56px)',
              borderBottom: i < QA.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              {/* Question */}
              <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 14, marginBottom: 18 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--gold)',
                  fontWeight: 500,
                  paddingTop: 3,
                }}>Q</span>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(16px, 1.8vw, 19px)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                }}>
                  {item.q}
                </p>
              </div>

              {/* Answer */}
              <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 14 }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  paddingTop: 3,
                }}>A</span>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.85,
                }}>
                  {item.a}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.1}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            paddingTop: 16,
          }}>
            <a
              href="/thesis"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Read the full thesis
              <span>→</span>
            </a>
            <a
              href="https://mykei.io/signal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              The Signal blog ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

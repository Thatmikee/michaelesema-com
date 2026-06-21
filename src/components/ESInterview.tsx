// ESInterview.tsx
// "Why Economic Sterilisation?" interview format section

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const QA = [
  {
    q: 'Every security company says they solve retail theft. What makes this different?',
    a: `Most security products watch the moment of theft. Cameras record it, tags scream about it, guards chase it. None of that changes the reason it happens: a stolen item can be sold quickly, anonymously and at a good price. Mykei works on that reason. Make the selling slow, risky and cheap, and the stealing loses its point.`,
  },
  {
    q: 'Mykei is your own name, Michael E. Did you really name the company after yourself?',
    a: `That is where it started, and I would rather own that than hide it. Plenty of serious companies carry a founder's name: Dangote, Dyson, Ferrari, Boeing. But the reason the name stayed is what it reads as in English: my key. That is the whole company in two words. Your assets, your proof, your key. The day people hear Mykei and think of that before they think of me, the name has done its job.`,
  },
  {
    q: 'Where did the idea actually come from?',
    a: `The theory lineage matters. Mike Sutton's Market Reduction Approach showed that theft is sustained by markets that absorb stolen goods. My question was commercial and technical: how do we operationalise that logic now, in a world of online resale, asset registries, micro-marking and digital evidence? That is where Mykei starts.`,
  },
  {
    q: 'Why file a patent? Most startups move fast and worry about IP later.',
    a: `Because a serious company needs a serious evidence trail. The term, the working paper, the UK patent application, the prototype evidence and the registry work all document different layers of the system. Patent application No. 2606630.8 covers the ADN-1 implementation path. The wider company is not just a gadget. It is an anti-resale crime and asset integrity architecture.`,
  },
  {
    q: 'You are building in Manchester. Where does Nigeria fit?',
    a: `Nigeria is where I was formed: my accounting degree, my MBA, my first leadership roles. I still serve the Benson Idahosa University alumni community from the UK, and I want the work to travel home. Probata is the registry-first programme in early design for that. The UK work comes first in sequence, but Nigeria is part of the plan, not an afterthought.`,
  },
  {
    q: 'What does winning look like to you?',
    a: `Winning means valuable physical assets become easier to prove, harder to launder through resale and less attractive to steal. In the long run, I want buyers, insurers, asset owners and lawful recovery channels to ask a simple question before trust is granted: is this asset registered, marked and evidence-ready?`,
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
            <span aria-hidden="true" style={{ color: 'var(--gold-text)', fontSize: 8, lineHeight: 1 }}>◆</span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-text)',
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
            <em style={{ color: 'var(--gold-text)' }}>Sterilisation?</em>
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
                  color: 'var(--gold-text)',
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
                color: 'var(--gold-text)',
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
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-text)')}
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

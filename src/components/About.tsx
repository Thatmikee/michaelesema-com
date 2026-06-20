import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import TypingText from './ui/TypingText'

const QUOTE = "Theft works because stolen goods hold value. Remove that value and the crime stops making sense. That is not a security problem. It is a commercial one."

const credentials = [
  {
    group: 'Formation',
    items: [
      { title: 'MSc International Business Management', sub: 'Manchester Metropolitan University', note: '2024, Merit' },
      { title: 'Master of Business Administration', sub: 'Nigerian Defence Academy', note: '2022' },
      { title: 'BSc (Hons) Accounting', sub: 'Benson Idahosa University', note: '2018' },
    ],
  },
  {
    group: 'Certifications',
    items: [
      { title: 'Lean Six Sigma', sub: '', note: '2025' },
      { title: 'Level 7 Advanced Diploma, Project Management', sub: '', note: '2025' },
    ],
  },
  {
    group: 'Roles',
    items: [
      { title: 'Founder and CEO', sub: 'Mykei Securities Ltd (Co. 16984969)', note: 'Manchester, United Kingdom' },
      { title: 'Alumni Coordinator, Diaspora', sub: 'Dept. of Accounting, Benson Idahosa University', note: 'UK Chapter' },
    ],
  },
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref    = useRef<HTMLDivElement>(null)
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

export default function About() {
  const [quoteDone, setQuoteDone] = useState(false)

  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-section)',
        position: 'relative',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Descending red line */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 1, height: 56,
        background: 'linear-gradient(var(--red), transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 80px)' }}>

        <FadeIn>
          <div style={{ marginBottom: 64 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--red-text)',
              display: 'block',
              marginBottom: 12,
            }}>
              Dossier
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3vw, 40px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              maxWidth: 480,
            }}>
              Who Michael is.<br />
              <em style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>Not what he sells.</em>
            </h2>
          </div>
        </FadeIn>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'clamp(40px, 6vw, 88px)' }}>

          {/* Prose column */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>

              <p style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', lineHeight: 1.85, color: 'var(--text-primary)', fontWeight: 400 }}>
                Accounting graduate. Two postgraduate degrees. Built his first institution at 21
                as President of NUASA at Benson Idahosa University. Spent formative years inside
                Nigerian public institutions learning one thing: most systems are better at
                recording failure than preventing it.
              </p>

              <p style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.9, color: 'var(--text-secondary)', fontWeight: 300 }}>
                Relocated to Manchester in 2023. Walked into corner shops, off-licences, and
                jewellers. Sat with owners who had cameras, tags, and guard contracts and were
                still absorbing losses every month. Kept returning to the question Mike Sutton's
                research first put on the table and the industry had stopped asking: why does
                theft pay?
              </p>

              <p style={{ fontSize: 'clamp(14px, 1.3vw, 16px)', lineHeight: 1.9, color: 'var(--text-secondary)', fontWeight: 300 }}>
                Built the answer from the component level. The firmware, the detection logic,
                17 claims filed at the UK Intellectual Property Office on 23 March 2026.
                Patent application number 2606630.8, pending. The doctrine he named Economic
                Sterilisation came first. The patent is one proof of concept inside it.
              </p>

              {/* Typewriter blockquote */}
              <blockquote style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(16px, 1.6vw, 19px)',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                lineHeight: 1.65,
                padding: '22px 0 22px 22px',
                borderLeft: '2px solid var(--red)',
                margin: '8px 0',
                minHeight: 96,
              }}>
                <TypingText
                  text={QUOTE}
                  speed={22}
                  delay={0.2}
                  onDone={() => setQuoteDone(true)}
                />
              </blockquote>

              {quoteDone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <span style={{ display: 'block', width: 20, height: 1, background: 'var(--red)' }} />
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}>
                    Michael Esema, 2026
                  </span>
                </motion.div>
              )}

              <a
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--red-text)',
                  textDecoration: 'none',
                  marginTop: 4,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Full dossier
                <span aria-hidden="true" style={{ display: 'inline-block', transition: 'transform 0.2s' }}>→</span>
              </a>
            </div>
          </FadeIn>

          {/* Credentials sidebar */}
          <FadeIn delay={0.22}>
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              padding: 'clamp(24px, 3vw, 40px)',
            }}>
              {credentials.map((group, gi) => (
                <div
                  key={group.group}
                  style={{
                    marginBottom: gi < credentials.length - 1 ? 32 : 0,
                    paddingBottom: gi < credentials.length - 1 ? 32 : 0,
                    borderBottom: gi < credentials.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 8.5,
                    fontWeight: 500,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--red-text)',
                    marginBottom: 16,
                  }}>
                    {group.group}
                  </p>
                  {group.items.map(item => (
                    <div key={item.title} style={{ marginBottom: 14 }}>
                      <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35 }}>
                        {item.title}
                      </p>
                      {item.sub && (
                        <p style={{ fontSize: 12.5, color: 'var(--text-secondary)', fontWeight: 300, marginTop: 2 }}>
                          {item.sub}
                        </p>
                      )}
                      <p style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: 'var(--text-muted)',
                        marginTop: 4,
                      }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

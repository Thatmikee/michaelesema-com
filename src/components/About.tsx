import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const credentials = [
  {
    group: 'Education',
    items: [
      { title: 'MSc International Business Management', sub: 'Manchester Metropolitan University', note: '2024 — Merit' },
      { title: 'Master of Business Administration', sub: 'Nigerian Defence Academy', note: '2022' },
      { title: 'BSc (Hons) Accounting', sub: 'Benson Idahosa University', note: '2018' },
    ],
  },
  {
    group: 'Certifications',
    items: [
      { title: 'Lean Six Sigma', sub: '', note: '2025' },
      { title: 'Level 7 Advanced Diploma — Project Management', sub: '', note: '2025' },
    ],
  },
  {
    group: 'Roles',
    items: [
      { title: 'Founder & CEO', sub: 'Mykei Securities Ltd — Co. 16984969', note: 'Manchester, United Kingdom' },
      { title: 'Alumni Coordinator (Diaspora)', sub: 'Dept. of Accounting, Benson Idahosa University', note: 'UK Chapter' },
    ],
  },
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

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--light-bg)',
        position: 'relative',
        color: 'var(--text-dark)',
      }}
    >
      {/* Gold divider line from top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1,
        height: 64,
        background: 'linear-gradient(var(--gold), transparent)',
      }} />

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
              01
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
                Background
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px, 3vw, 38px)',
                fontWeight: 400,
                color: 'var(--text-dark)',
                lineHeight: 1.2,
              }}>
                The founder behind the system
              </h2>
            </div>
          </div>
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 80,
        }} className="about-grid">

          {/* Prose */}
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{
                fontSize: 18,
                lineHeight: 1.85,
                color: 'var(--text-dark)',
                fontWeight: 400,
              }}>
                Michael Esema grew up in Nigeria and built his early career inside government —
                auditing systems, managing emergency budgets, and running operations at the
                National Emergency Management Agency. He learned something there that never left him:
                most institutions are better at recording failure than preventing it.
              </p>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.9,
                color: 'var(--text-dark-secondary)',
                fontWeight: 300,
              }}>
                He came to Manchester in 2023. What he found in the UK retail sector was the same
                pattern at a smaller scale — CCTV recording theft, security tags beeping as thieves
                walked out, retailers absorbing the losses and calling it the cost of doing business.
                Every system built to respond. None built to remove the reason.
              </p>

              <blockquote style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 19,
                fontStyle: 'italic',
                color: 'var(--text-dark)',
                lineHeight: 1.6,
                padding: '22px 0 22px 22px',
                borderLeft: '2px solid var(--gold)',
                margin: '12px 0',
              }}>
                "Theft works because stolen goods hold value. Remove that value and the crime
                stops making sense. That's not a security problem. It's a commercial one."
              </blockquote>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.9,
                color: 'var(--text-dark-secondary)',
                fontWeight: 300,
              }}>
                In early 2026 he incorporated Mykei Securities Ltd and began building the ADN-1 from
                the component level up. The firmware is his. The detection algorithm is his.
                The business architecture, the patent application — 17 claims — all built from
                first principles by one founder who refused to wait for someone else to solve it.
                In the process, he coined the term <em>Economic Sterilisation</em> — the doctrine
                that stolen goods, once forensically marked and marketplace-flagged, have no resale
                value and therefore no theft value.
              </p>

              {/* Economic Sterilisation definition note */}
              <div style={{
                borderLeft: '2px solid var(--gold)',
                paddingLeft: 18,
                marginTop: 8,
                opacity: 0.72,
              }}>
                <p style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  lineHeight: 1.75,
                  color: 'var(--text-dark-secondary)',
                  fontWeight: 400,
                  margin: 0,
                }}>
                  <em style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: 500 }}>Economic Sterilisation</em>
                  {' '}
                  <span style={{ opacity: 0.5 }}>n.</span>
                  {' '}— The systematic removal of resale value from stolen goods through forensic marking and real-time marketplace flagging, eliminating the commercial incentive for theft at the point it occurs.
                  {' '}
                  <span style={{ opacity: 0.55 }}>Coined: M. Esema, 2025.</span>
                </p>
              </div>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.9,
                color: 'var(--text-dark-secondary)',
                fontWeight: 300,
              }}>
                He holds an MSc in International Business Management from Manchester Metropolitan
                University, an MBA from the Nigerian Defence Academy, and a BSc in Accounting
                from Benson Idahosa University. He is Lean Six Sigma certified, a Level 7 Project
                Management practitioner, and serves as Alumni Coordinator (Diaspora) for the
                Department of Accounting at BIU.
              </p>
            </div>
          </FadeIn>

          {/* Credentials sidebar */}
          <FadeIn delay={0.2}>
            <div>
              {credentials.map((group, gi) => (
                <div
                  key={group.group}
                  style={{
                    marginBottom: gi < credentials.length - 1 ? 32 : 0,
                    paddingBottom: gi < credentials.length - 1 ? 32 : 0,
                    borderBottom: gi < credentials.length - 1 ? '1px solid var(--light-border)' : 'none',
                  }}
                >
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9.5,
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    marginBottom: 16,
                  }}>
                    {group.group}
                  </p>
                  {group.items.map(item => (
                    <div key={item.title} style={{ marginBottom: 14 }}>
                      <p style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.3 }}>
                        {item.title}
                      </p>
                      {item.sub && (
                        <p style={{ fontSize: 13, color: 'var(--text-dark-secondary)', fontWeight: 400, marginTop: 2 }}>
                          {item.sub}
                        </p>
                      )}
                      <p style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: '#999',
                        marginTop: 3,
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
        @media (max-width: 920px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 600px) {
          #about > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

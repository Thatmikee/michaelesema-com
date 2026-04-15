import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const credentials = [
  {
    group: 'Education',
    items: [
      { title: 'MSc International Business Management', sub: 'Manchester Metropolitan University', note: '2024, Merit' },
      { title: 'Master of Business Administration (MBA)', sub: 'Nigerian Defence Academy', note: '2022' },
      { title: 'BSc (Hons) Accounting', sub: 'Benson Idahosa University', note: '2018' },
    ],
  },
  {
    group: 'Certifications',
    items: [
      { title: 'National Youth Service Corps (NYSC)', sub: 'Federal Government of Nigeria', note: '2018-2019' },
      { title: 'Lean Six Sigma', sub: '', note: '2025' },
      { title: 'Level 7 Advanced Diploma, Project Management', sub: '', note: '2025' },
      { title: 'Leadership Certificate', sub: 'Life Success Centre', note: '2018' },
      { title: 'Poise & Employability Skills Certificate', sub: 'Poise Nigeria Ltd', note: '2018' },
      { title: 'Health, Safety and Environment 1 & 2', sub: '', note: '2018' },
      { title: 'Google Digital Skills Training', sub: 'Rene Digital Hub', note: '2016' },
    ],
  },
  {
    group: 'Awards',
    items: [
      { title: 'Most Influential Male', sub: 'Nigerian Universities Accounting Students Association', note: '2018' },
      { title: 'Student Leader of the Year', sub: 'Nigerian Universities Accounting Students Association', note: '2018' },
      { title: 'Most Assiduous Student Leader of the Year', sub: 'Benson Idahosa University', note: '2018' },
      { title: 'Most Innovative Student Leader of the Year', sub: 'Connex Award', note: '2018' },
      { title: 'Recognition & Appreciation of Leadership Roles', sub: 'BIU Faculty of Social & Management Sciences', note: '2018' },
      { title: 'Dedication to Service of Humanity', sub: 'Eagles Wings Motivation Award', note: '2018' },
      { title: 'Most Innovative Leader of the Year', sub: 'Clover Conglomerate Awards', note: '2017' },
      { title: 'Most Influential Male', sub: 'Accounting Students Association, Uniben Chapter', note: '2017' },
    ],
  },
  {
    group: 'Honorary Roles',
    items: [
      { title: 'President, NUASA BIU Chapter', sub: 'Nigerian Universities Accounting Students Association', note: '2017-2018' },
      { title: 'Vice-President, NUASA BIU Chapter', sub: 'Nigerian Universities Accounting Students Association', note: '2016-2017' },
      { title: 'Alumni Coordinator (Diaspora)', sub: 'Dept. of Accounting, Benson Idahosa University', note: 'Current · UK Chapter' },
      { title: 'Founder & CEO', sub: 'Mykei Securities Ltd (Co. 16984969)', note: 'Manchester, United Kingdom' },
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
                Michael Esema was born in Nsit Ubium, Akwa Ibom State, Nigeria, into the family of
                Obong (Barr) Essien Esema, a respected lawyer, and Dr. Mary Esema, a public health
                leader. Growing up in a household defined by law and medicine shaped an early instinct
                that problems worth solving are structural, not superficial. He moved through
                Nigeria's academic landscape with distinction, studying accounting at Benson Idahosa
                University in Benin City, where he graduated with honours in 2018. There, he served
                as President of the Nigerian Universities Accounting Students Association (NUASA) and
                was recognised as the Most Influential Male of his graduating class.
              </p>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.9,
                color: 'var(--text-dark-secondary)',
                fontWeight: 300,
              }}>
                After graduating, Esema completed his National Youth Service Corps year before
                building a career in hospitality finance. At B's Hive Hotel and Suites, he moved from
                Head Accountant to Assistant Manager between 2019 and 2023, running financial
                operations, overseeing accounts, and managing the systems that kept a live business
                running. He completed a Master of Business Administration at the Nigerian Defence
                Academy in Kaduna in 2022 alongside that work. What the years in hospitality sharpened
                was a practical understanding of how institutions handle loss: they record it, report
                it, absorb the cost, and carry on. The conditions that produced it rarely change.
              </p>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.9,
                color: 'var(--text-dark-secondary)',
                fontWeight: 300,
              }}>
                Esema relocated to Manchester, United Kingdom in 2023, enrolling at Manchester
                Metropolitan University. He completed an MSc in International Business Management in
                2024, graduating with Merit. In Manchester, he encountered the UK independent retail
                sector in a way that few security professionals had. He visited corner shops,
                off-licences, and jewellers. He sat with owners who had installed cameras, security
                tags, and guard contracts, and were still absorbing losses every month. The systems
                were recording theft. None of them were removing the reason it happened.
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
                In early 2026, Esema incorporated Mykei Securities Ltd and began building the ADN-1
                Active Forensic Defence Node from the component level. The firmware is his. The
                detection algorithm is his. The patent application, GB2606630.8, contains 17 claims.
                The core thesis is that theft is a commercial transaction: a thief sweeps goods from
                a shelf because those goods hold resale value. The ADN-1 destroys that value at the
                point of theft, deploying a synthetic DNA forensic marker that links every tagged
                item permanently to its crime event, store, and timestamp. Tagged goods cannot be
                sold. If they are listed, the Toxic Inventory Registry flags them. If they are
                presented to a buyer, the marker is visible under UV light and legally admissible as
                forensic evidence.
              </p>

              <p style={{
                fontSize: 15.5,
                lineHeight: 1.9,
                color: 'var(--text-dark-secondary)',
                fontWeight: 300,
              }}>
                In coining the term <em>Economic Sterilisation</em>, Esema was not naming a product
                feature. He was naming a doctrine: the systematic removal of resale value from stolen
                goods through forensic marking and real-time marketplace flagging, eliminating the
                commercial incentive for theft at the point it occurs. The doctrine was first
                published in 2025. It has a patent record, a white paper, and cross-referenced schema
                definitions on two domains. Where conventional security deters or detects, Economic
                Sterilisation removes the commercial outcome that makes theft worthwhile. The
                Manchester Alpha Pilot, open Q2 2026, is the first field test of the doctrine at
                scale with five independent retailers.
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
                  {'. '}The systematic removal of resale value from stolen goods through forensic marking and real-time marketplace flagging, eliminating the commercial incentive for theft at the point it occurs.
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
                The Mykei vision is refined in collaboration with creative strategist Sarah Aboladale.
                Alongside his work at Mykei, Esema serves as Alumni Coordinator (Diaspora) for the
                Department of Accounting at Benson Idahosa University, connecting BIU accounting
                graduates across the UK and Europe with career opportunities and mentorship networks.
                He holds a Lean Six Sigma certification and a Level 7 Advanced Diploma in Project
                Management. He remains based in Manchester.
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

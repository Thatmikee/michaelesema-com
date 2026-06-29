import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

const relStyle: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  borderBottom: '2px solid transparent',
  paddingBottom: 2,
  transition: 'color 0.2s, border-color 0.2s',
}

type Related = { label: string; href: string; external?: boolean }
type Entry = {
  n: string
  slug: string
  title: string
  summary: string
  paras: string[]
  related?: Related[]
}

const ENTRIES: Entry[] = [
  {
    n: '01',
    slug: 'crime-as-an-incentives-problem',
    title: 'Crime as an incentives problem',
    summary: 'Why theft persists while the payoff still rewards it, and what shifts when you change the maths.',
    paras: [
      'Most security responses treat theft as a behaviour problem. That is partly true, but it is not enough. Theft also has an economic structure. A stolen item has to become useful to someone. It has to be sold, moved, denied, insured, stored, stripped, repackaged or accepted by a buyer who does not ask enough questions.',
      'That is where my work begins.',
      'The question is not only who stole the item. The stronger question is what made the item worth stealing in the first place. If the resale route is fast, anonymous and low risk, the offence has a commercial pathway. If that route becomes slower, riskier and less acceptable, the incentive changes.',
      'This is why I keep returning to asset identity, evidence records, marking, verification and resale friction. They do not replace enforcement. They change the condition that enforcement usually arrives too late to affect.',
      'For me, crime prevention is not only about catching people after the fact. It is about designing systems where stolen goods lose confidence before they reach the market.',
    ],
    related: [{ label: 'The paper: Economic Sterilisation', href: '/thesis' }],
  },
  {
    n: '02',
    slug: 'making-stolen-goods-harder-to-monetise',
    title: 'Making stolen goods harder to monetise',
    summary: 'Practical ways to strip resale value out of an item, both before and after it is taken.',
    paras: [
      'Theft becomes attractive when stolen goods can still become money. That is the commercial weakness Mykei is built around.',
      'Making stolen goods harder to monetise does not mean making every item physically impossible to steal. That is not realistic. It means making the stolen item harder to accept, harder to verify, harder to move and harder to deny.',
      'This can happen before theft through visible ownership identity, warnings, marking, registration and deterrence signals. It can happen after theft through evidence records, incident logs, batch references, ownership proof, chain of custody and resale risk notices.',
      'The aim is not theatre. The aim is friction.',
      'A buyer, handler, reseller or platform should have more reason to pause. An owner should have better proof. A retailer or asset holder should not be left with only CCTV footage and an incident number. An item should carry a story that survives the theft event.',
      'That is the commercial idea behind Economic Sterilisation. It is not a claim that resale markets are new. It is an attempt to turn that known market problem into a practical operating model.',
    ],
    related: [{ label: 'Read the paper', href: '/thesis' }, { label: 'Mykei Securities', href: 'https://mykei.io', external: true }],
  },
  {
    n: '03',
    slug: 'retail-loss-colleague-safety-resale-markets',
    title: 'Retail loss, colleague safety and resale markets',
    summary: 'What shrinkage costs the people on the floor, and how resale demand keeps the pressure on.',
    paras: [
      'Retail theft is often discussed as shrinkage, but shrinkage is a clean word for a messy reality.',
      'Behind the number are staff members dealing with intimidation, abuse, repeat offenders and the quiet pressure of knowing the same goods may be stolen again tomorrow. The financial loss matters, but so does the atmosphere it creates inside stores.',
      'The resale market is part of that atmosphere. If stolen goods can be converted into cash quickly, the store becomes part of a wider supply chain. The person on the shop floor sees the behaviour. The marketplace sees the product later. The system between both points is where prevention is still weak.',
      'My interest is in that middle space.',
      'How do we make stolen stock less commercially clean after it leaves the store? How do we preserve evidence without overburdening staff? How do we make repeat theft less attractive without pretending that another camera solves the economics?',
      'Retail crime needs enforcement, but it also needs market design. If the stolen product remains easy to sell, the pressure keeps returning to the shop floor.',
    ],
  },
  {
    n: '04',
    slug: 'industrial-intelligence-security-infrastructure',
    title: 'Industrial intelligence and future security infrastructure',
    summary: 'Where evidence records, asset intelligence and hardware meet the next decade of prevention.',
    paras: [
      'The next generation of security infrastructure will not only watch. It will record, verify, mark, connect and explain.',
      'That is what I mean by industrial intelligence. Not hype. Not surveillance for its own sake. I mean practical intelligence around assets, environments, ownership and events.',
      'A valuable asset should not become anonymous the moment it is removed. A theft event should not disappear into a weak incident report. A marker, device, registry entry or evidence record should be able to create a stronger chain of proof than many asset owners currently have.',
      'This is where hardware, software and evidence design start to meet. Sensors can detect risk. Marking systems can create identity. Registries can preserve ownership and incident records. Verification workflows can help buyers, insurers, police, recovery teams and asset owners understand what they are looking at.',
      'The challenge is governance. Security infrastructure must be useful without becoming reckless. It must avoid overclaiming, false positives, privacy harm and untested promises.',
      'Mykei’s work is still developing, but this is the direction: security systems that do more than observe loss. They help assets carry proof.',
    ],
  },
  {
    n: '05',
    slug: 'founder-notes-building-mykei',
    title: 'Founder notes from building Mykei',
    summary: 'Field notes on turning a single question into research, a patent filing and a company.',
    paras: [
      'Mykei did not start as a perfect company deck. It started with a question.',
      'Why does theft keep paying?',
      'That question moved through retail crime, stolen goods markets, asset marking, evidence records, deterrence theory, market reduction research, prototype work, patent filing, website building, public writing and difficult practical constraints.',
      'Building from that question has taught me that ideas are not enough. The work has to survive cost, hardware limitations, legal caution, market scepticism, supplier conversations, public language and the temptation to overclaim before the evidence exists.',
      'That is why I treat Mykei as both a company and a learning process. Economic Sterilisation is part of the thinking. Active Defense Node is part of the architecture. The registry idea is part of the evidence layer. The public writing is part of explaining the problem honestly.',
      'The founder work is connecting all of that without pretending the road is shorter than it is.',
      'I am building in public because the problem is public. Theft, resale confidence, ownership proof and weak evidence systems affect more than one company. Mykei is my attempt to build something practical inside that space.',
    ],
    related: [{ label: 'Mykei Securities', href: 'https://mykei.io', external: true }, { label: 'The paper', href: '/thesis' }],
  },
  {
    n: '06',
    slug: 'what-building-brands-taught-me-about-trust',
    title: 'What building brands taught me about trust',
    summary: 'Why I design the brands and interfaces myself, and what visual clarity has to do with security.',
    paras: [
      'I design most of what my work puts in front of people: the logos, the websites, the decks, the small visual decisions that add up to whether someone takes the work seriously. The Mykei brand, this site and the marks behind my other ventures are my own.',
      'I did not come to design through a studio. I came to it through need. When you are building something from nothing, you cannot wait for someone else to make it look credible, so I learned to do it: brand marks, layout, typography, the difference between a page that reassures and a page that makes people hesitate.',
      'That work turned out to be closer to security than I expected. Both are about trust. A brand is a promise about what a thing is. A security record is a promise about what an asset is. In both cases the job is to make an honest claim legible, and to avoid dressing up something you cannot back.',
      'Designing the public face of the work also keeps me honest, because the clearest design is usually the one with nothing to hide.',
    ],
  },
  {
    n: '07',
    slug: 'building-companies-across-two-continents',
    title: 'Building companies across two continents',
    summary: 'What it means to build in the UK and Nigeria at once, and why I keep doing both.',
    paras: [
      'I build in two places. Mykei is a UK company working on asset integrity and resale crime. Alongside it, I have worked on ventures rooted in Nigeria, from a footwear brand I started years ago to agribusiness and productive-use energy plans, and on the business plans and grant work behind them.',
      'The two contexts teach different lessons. The UK rewards process, evidence and patience. Nigeria rewards resourcefulness and the ability to make something work when the infrastructure does not. Carrying both makes me a more careful builder.',
      'What connects them is the same instinct: take a real problem, design a practical system around it, and refuse to overstate what it can do yet.',
      'I do not treat the Nigerian work as a side project or the UK work as the only serious one. They are two halves of the same habit, building things meant to last rather than things meant to impress.',
    ],
  },
]

// Claim-safe answers to the questions customers and the wider audience actually ask.
const FAQS: { q: string; a: string }[] = [
  {
    q: 'Who is Michael Esema?',
    a: 'Michael Esema is the founder of Mykei Securities Ltd, a UK-first asset-integrity and anti-resale-crime company based in Manchester. He is a founder, researcher and builder working where security, ownership and resale markets meet. He grew up in Nigeria, studied Accounting at Benson Idahosa University, completed an MBA at the Nigerian Defence Academy, and earned an MSc in International Business Management at Manchester Metropolitan University.',
  },
  {
    q: 'What does Mykei Securities do?',
    a: 'Mykei is an early-stage UK asset-integrity and anti-resale-crime company. The work is about making stolen goods harder to sell, move, use or deny, through asset marking, ownership records, incident records and verification.',
  },
  {
    q: 'What is Economic Sterilisation, in plain terms?',
    a: 'It is a practical framework for reducing the resale confidence and economic acceptability of stolen goods. It builds on Mike Sutton’s Market Reduction Approach in criminology. It is not a claim to have invented the idea that resale markets drive theft.',
  },
  {
    q: 'Does this stop theft?',
    a: 'It aims to weaken the resale route that makes theft pay, not to guarantee theft stops. No field validation has been completed. Real-world precedents such as smartphone kill switches and the UK Scrap Metal Dealers Act 2013 show market-side measures can reduce theft when the resale check is near-universal or enforced at a chokepoint.',
  },
  {
    q: 'What is ADN?',
    a: 'Active Defense Node (ADN) is Mykei’s active defence architecture for event-linked marking, asset protection and registry-linked evidence. It sits on a patent-pending R&D pathway, UK patent application No. 2606630.8. It is not AI, and the application is pending, not a granted patent.',
  },
  {
    q: 'Can I buy or use Mykei today?',
    a: 'Mykei is early stage. The doctrine, the working paper and prototype work are public, and commercial pilots are being explored. There is no live marketplace, police or insurer integration.',
  },
  {
    q: 'Is this surveillance or marketplace monitoring?',
    a: 'No. Mykei does not flag listings or monitor sellers. What it produces are structured incident and ownership records compiled from the owner’s own account. They are not legal proof, and the registry is not described as immutable.',
  },
]

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': 'https://michaelesema.com/thinking',
      name: 'Thinking in public',
      description:
        'Michael Esema on theft economics, asset protection, resale markets, evidence records, industrial intelligence and building Mykei Securities.',
      url: 'https://michaelesema.com/thinking',
      author: { '@type': 'Person', '@id': 'https://michaelesema.com/#person', name: 'Michael Esema' },
      blogPost: ENTRIES.map(e => ({
        '@type': 'BlogPosting',
        headline: e.title,
        description: e.summary,
        url: `https://michaelesema.com/thinking#${e.slug}`,
        author: { '@type': 'Person', '@id': 'https://michaelesema.com/#person', name: 'Michael Esema' },
        publisher: { '@type': 'Organization', name: 'Mykei Securities Ltd', url: 'https://mykei.io' },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://michaelesema.com/thinking#faq',
      mainEntity: FAQS.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  )
}

export default function ThinkingPage() {
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    // Honour deep links to a specific note.
    if (!window.location.hash) window.scrollTo({ top: 0 })

    const title = 'Thinking in public | Michael Esema'
    const desc = 'Michael Esema on theft economics, asset protection, resale markets, evidence records, industrial intelligence and building Mykei Securities.'
    const url = 'https://michaelesema.com/thinking'

    // Keep all public metadata consistent with this page.
    document.title = title
    const setContent = (sel: string, val: string) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute('content', val)
    }
    setContent('meta[name="description"]', desc)
    setContent('meta[property="og:title"]', title)
    setContent('meta[property="og:description"]', desc)
    setContent('meta[property="og:url"]', url)
    setContent('meta[property="og:type"]', 'article')
    setContent('meta[name="twitter:title"]', title)
    setContent('meta[name="twitter:description"]', desc)

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (canonical) canonical.setAttribute('href', url)
    else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = url
      document.head.appendChild(link)
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(SCHEMA)
    document.head.appendChild(script)
    scriptRef.current = script

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current)
        scriptRef.current = null
      }
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        {/* Header */}
        <section style={{
          background: 'var(--hero-bg)',
          paddingTop: 'clamp(120px, 14vw, 168px)',
          paddingBottom: 'clamp(48px, 6vw, 72px)',
          paddingLeft: 'clamp(28px, 8vw, 100px)', paddingRight: 'clamp(28px, 8vw, 100px)',
        }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div aria-hidden="true" style={{ width: 46, height: 6, background: 'var(--accent)', borderRadius: 3, marginBottom: 24 }} />
            <h1 style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(34px, 5.2vw, 60px)',
              fontWeight: 900, color: 'var(--ink)', letterSpacing: '-1.4px', lineHeight: 1.02,
              textTransform: 'uppercase', marginBottom: 22,
            }}>
              Thinking<br />in public
            </h1>
            <p style={{
              fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(15px, 1.7vw, 19px)',
              fontWeight: 600, color: 'var(--ink)', lineHeight: 1.45, marginBottom: 18, maxWidth: 580,
            }}>
              Notes on theft economics, asset protection, ownership proof, industrial intelligence and the
              process of building Mykei.
            </p>
            <p style={{
              fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(14px, 1.4vw, 16px)',
              fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 600,
            }}>
              These are the public notes behind the work. Some are early arguments. Some are founder
              observations. Some are questions I am still testing through Mykei. The common thread is simple:
              what makes harm profitable, and what changes when that profit route is weakened?
            </p>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--text-muted)',
              letterSpacing: '0.04em', marginTop: 24,
            }}>
              By Michael Esema, Founder, Mykei Securities Ltd
            </p>
          </div>
        </section>

        {/* Entries */}
        <section style={{
          background: 'var(--bg-surface)',
          padding: 'clamp(56px, 7vw, 88px) clamp(28px, 8vw, 100px) clamp(72px, 9vw, 110px)',
        }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {ENTRIES.map((e, i) => (
              <FadeIn key={e.slug} delay={0.04 + i * 0.04}>
                <article id={e.slug} style={{
                  scrollMarginTop: 90,
                  paddingTop: i === 0 ? 0 : 'clamp(44px, 6vw, 64px)',
                  paddingBottom: 'clamp(44px, 6vw, 64px)',
                  borderBottom: i < ENTRIES.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--accent)' }}>{e.n}</span>
                    <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--ink)', letterSpacing: '-0.6px', lineHeight: 1.15 }}>
                      {e.title}
                    </h2>
                  </div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px, 1.5vw, 17px)', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 24, maxWidth: 640 }}>
                    {e.summary}
                  </p>
                  {e.paras.map((p, j) => (
                    <p key={j} style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(15px, 1.5vw, 17px)', color: 'var(--text-primary)', fontWeight: 300, lineHeight: 1.85, marginBottom: 16, maxWidth: 640 }}>
                      {p}
                    </p>
                  ))}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center', marginTop: 22 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                      Michael Esema
                    </span>
                    {e.related?.map(r => (
                      r.external ? (
                        <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className="think-rel" style={relStyle}>
                          {r.label}
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M7 17 17 7M9 7h8v8" /></svg>
                        </a>
                      ) : (
                        <Link key={r.label} to={r.href} className="think-rel" style={relStyle}>{r.label}</Link>
                      )
                    ))}
                  </div>
                </article>
              </FadeIn>
            ))}

            {/* Questions customers and the audience ask */}
            <FadeIn>
              <div id="faq" style={{ scrollMarginTop: 90, marginTop: 'clamp(48px, 6vw, 72px)', paddingTop: 'clamp(40px, 5vw, 56px)', borderTop: '1px solid var(--border)' }}>
                <h2 style={{
                  fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 3.4vw, 38px)',
                  color: 'var(--ink)', letterSpacing: '-0.8px', marginBottom: 'clamp(28px, 4vw, 40px)',
                }}>
                  Questions<span style={{ color: 'var(--accent)' }}>.</span>
                </h2>
                {FAQS.map((f, i) => (
                  <div key={f.q} style={{ padding: '20px 0', borderBottom: i < FAQS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(16px, 1.8vw, 20px)', color: 'var(--ink)', letterSpacing: '-0.2px', marginBottom: 8, lineHeight: 1.3 }}>
                      {f.q}
                    </h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(14px, 1.4vw, 16px)', color: 'var(--text-secondary)', fontWeight: 300, lineHeight: 1.8, maxWidth: 640 }}>
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <div style={{ marginTop: 'clamp(40px, 5vw, 56px)', paddingTop: 28, borderTop: '1px solid var(--border)' }}>
              <Link to="/#work" className="think-rel" style={{ ...relStyle, fontSize: 14 }}>Back to the work</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .think-rel:hover { color: var(--ink) !important; border-bottom-color: var(--accent) !important; }
      `}</style>
    </>
  )
}

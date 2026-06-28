import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ScholarlyArticle',
  headline: 'From Market Reduction to Economic Sterilisation',
  alternativeHeadline:
    'A practical framework for reducing resale confidence and economic acceptability in stolen goods',
  description:
    "Economic Sterilisation is Michael Esema's applied operating extension of Mike Sutton's Market Reduction Approach, using asset marking, registry records, evidence workflows and verification to reduce the resale confidence of stolen goods.",
  author: {
    '@type': 'Person',
    '@id': 'https://michaelesema.com/#person',
    name: 'Michael Esema',
    additionalName: 'Essien',
    url: 'https://michaelesema.com',
    jobTitle: 'Founder, Mykei Securities Ltd',
  },
  datePublished: '2026',
  dateModified: '2026-06-28',
  publisher: { '@type': 'Organization', name: 'Mykei Securities Ltd', url: 'https://mykei.io' },
  url: 'https://michaelesema.com/thesis',
  keywords:
    'Economic Sterilisation, Market Reduction Approach, Mike Sutton, stolen goods markets, anti-resale crime, asset marking, asset registry, evidence workflows, Mykei Securities',
  citation: [
    'Sutton, M. (1995). Supply by Theft: Does the Market for Second-hand Goods Play a Role in Keeping Crime Figures High? British Journal of Criminology, 35(3), 400-416.',
    'Sutton, M., Johnston, K., and Lockwood, H. (1998). Handling Stolen Goods and Theft: A Market Reduction Approach. Home Office Research Study 178.',
    'Sutton, M., Schneider, J., and Hetherington, S. (2001). Tackling Theft with the Market Reduction Approach. Home Office Crime Reduction Research Series Paper 8.',
  ],
}

// Plain document palette: black ink on white, like a printed working paper.
const SERIF = "Georgia, 'Times New Roman', Times, serif"
const INK = '#111111'
const BODY = '#222222'
const MUTED = '#5a5a5a'
const BORDER = '#dddddd'

const body: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: 18,
  lineHeight: 1.75,
  color: BODY,
  marginBottom: 20,
}

const h2: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: 25,
  fontWeight: 700,
  color: INK,
  marginTop: 52,
  marginBottom: 14,
  scrollMarginTop: 100,
}

const h3: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: 18,
  fontWeight: 700,
  fontStyle: 'italic',
  color: INK,
  marginTop: 28,
  marginBottom: 10,
}

const list: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: 17.5,
  lineHeight: 1.7,
  color: BODY,
  paddingLeft: 24,
  marginBottom: 22,
}

const label: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: 12,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: MUTED,
}

const SECTIONS = [
  '1. Starting point',
  '2. Lineage',
  '3. Operating idea',
  '4. The Mykei Protocol',
  '5. Active Defense Node (ADN)',
  '6. Scope and limits',
  '7. Research questions',
  '8. Conclusion',
]

const PROTOCOL = ['Mark', 'Register', 'Record', 'Verify', 'Report', 'Reduce resale confidence']

export default function ThesisPage() {
  const scriptRef = useRef<HTMLScriptElement | null>(null)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.title = 'From Market Reduction to Economic Sterilisation | Michael Esema'

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (canonical) canonical.setAttribute('href', 'https://michaelesema.com/thesis')
    else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = 'https://michaelesema.com/thesis'
      document.head.appendChild(link)
    }

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', SCHEMA.description)

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
      <main id="main-content" style={{ background: '#ffffff' }}>
        {/* Title + metadata + abstract */}
        <section style={{
          background: '#ffffff',
          paddingTop: 128, paddingBottom: 48,
          paddingLeft: 24, paddingRight: 24,
        }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <p style={{ ...label, lineHeight: 2, marginBottom: 24 }}>
              Working paper<br />Mykei Securities Ltd<br />Revised June 2026
            </p>

            <h1 style={{
              fontFamily: SERIF, fontSize: 'clamp(28px, 4.4vw, 44px)', fontWeight: 700,
              lineHeight: 1.2, color: INK, marginBottom: 16,
            }}>
              From Market Reduction to Economic Sterilisation
            </h1>

            <p style={{ fontFamily: SERIF, fontSize: 19, lineHeight: 1.5, color: MUTED, fontStyle: 'italic', marginBottom: 34 }}>
              A practical framework for reducing the resale confidence and economic acceptability of stolen goods.
            </p>

            {/* Metadata block */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: '18px 0', marginBottom: 30,
            }}>
              {[
                ['Author', 'Michael Esema'],
                ['Affiliation', 'Founder, Mykei Securities Ltd'],
                ['Status', 'Working paper, revised June 2026'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p style={{ ...label, fontSize: 11, marginBottom: 5 }}>{k}</p>
                  <p style={{ fontFamily: SERIF, fontSize: 15, color: INK, lineHeight: 1.5 }}>{v}</p>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: SERIF, fontSize: 14, fontStyle: 'italic', color: MUTED, marginBottom: 36, lineHeight: 1.6 }}>
              Disclaimer: working paper. Not legal, policing, insurance or forensic-laboratory advice.
            </p>

            {/* Abstract */}
            <div style={{ border: `1px solid ${BORDER}`, borderLeft: `3px solid ${INK}`, padding: '24px 28px' }}>
              <p style={{ ...label, marginBottom: 12 }}>Abstract</p>
              <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
                Economic Sterilisation is not a claim to have discovered stolen-goods markets. That ground was
                covered long ago in criminology, above all in Mike Sutton&apos;s Market Reduction Approach and the
                wider work on rational choice, opportunity reduction and hot products. I use the term for a narrower,
                practical question: how can an asset owner, a retailer or an infrastructure operator reduce the
                confidence with which a stolen item can be used, sold, moved or denied?
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section style={{ background: '#ffffff', paddingTop: 8, paddingBottom: 88, paddingLeft: 24, paddingRight: 24 }}>
          <article style={{ maxWidth: 720, margin: '0 auto' }}>

            {/* Section index */}
            <nav aria-label="Section index" style={{ border: `1px solid ${BORDER}`, padding: '20px 24px', marginBottom: 16 }}>
              <p style={{ ...label, marginBottom: 12 }}>Contents</p>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '7px 24px' }}>
                {SECTIONS.map((s, i) => (
                  <li key={s}>
                    <a href={`#s${i + 1}`} style={{ fontFamily: SERIF, fontSize: 15, color: BODY, textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                      onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <h2 id="s1" style={h2}>1. Starting point</h2>
            <p style={body}>
              This paper makes a narrow claim, and I want to be honest about its limits from the start. I did not
              discover that stolen-goods markets drive theft. Criminologists worked that out decades ago. What I am
              doing is naming a practical operating idea, Economic Sterilisation, and trying to turn established theory
              into something an asset owner, a retailer or an infrastructure operator can actually use.
            </p>
            <p style={body}>
              The problem is simple to state. Theft keeps paying while stolen goods stay easy to sell, store, move,
              insure or quietly accept. So the question I keep working on is not only who took the item. It is how the
              resale route can be made weaker, before and after the theft happens.
            </p>

            <h2 id="s2" style={h2}>2. Lineage</h2>
            <p style={body}>
              The work I lean on most is Mike Sutton&apos;s. His 1995 paper in the British Journal of Criminology,
              <em> Supply by Theft</em>, asked a question that still sits at the centre of mine: does the market for
              second-hand goods help keep crime figures high? His 1998 Home Office study,
              <em> Handling Stolen Goods and Theft</em>, drew on the British Crime Survey and found that roughly one in
              ten people had bought stolen goods in the previous five years, and that most people assumed some of their
              neighbours had stolen goods at home. Theft, in other words, has a customer base.
            </p>
            <p style={body}>
              From that research Sutton and colleagues built the Market Reduction Approach: cut theft by cutting the
              demand for stolen goods and disrupting the markets that move them. The 2001 Home Office guide set it out
              as a method for agencies to work together against those markets. I am building on that foundation, not
              replacing it.
            </p>
            <p style={body}>
              Two real-world interventions show the market side working. After smartphone makers added remote kill
              switches in 2013, the cities in the Secure Our Smartphones group reported sharp falls in phone theft,
              including roughly a 40 per cent drop in iPhone robberies in San Francisco and around half in London,
              because a locked handset is hard to resell. The UK Scrap Metal Dealers Act 2013 banned cash payments and
              licensed dealers; the Home Office later reported metal theft down about 71 per cent between 2013 and 2020,
              though its own modelling credits the measures themselves with roughly 30 per cent of that fall and assigns
              the rest to metal prices and wider trends.
            </p>
            <p style={body}>
              Both cases share one feature, and it is the one I take most seriously. They worked because the resale
              check was almost unavoidable: built into the phone, or enforced at the licensed point where scrap is sold.
              That is the bar Economic Sterilisation has to clear, and it is also its hardest problem.
            </p>

            <h2 id="s3" style={h2}>3. Operating idea</h2>
            <p style={body}>
              Economic Sterilisation is my term for one job: reduce the confidence with which a stolen item can be
              used, sold, moved or denied. It extends the Market Reduction Approach into an operating layer:
            </p>
            <ol style={list}>
              <li>pre-theft deterrence through visible asset identity, marking and warnings;</li>
              <li>post-theft resale friction, making a stolen item riskier to handle or sell;</li>
              <li>registry verification through ownership, batch, location and incident records;</li>
              <li>incident and ownership records packaged for asset owners, insurers and lawful recovery channels;</li>
              <li>online resale adaptation, with verification and risk workflows for digital resale environments.</li>
            </ol>
            <p style={body}>
              In Ron Clarke&apos;s CRAVED model of hot products, the lever here is disposability: how easily a stolen
              item turns back into money. Economic Sterilisation aims at that one lever. The original part is not that
              resale markets matter, because Sutton showed that. The part I am working on is making market-reduction
              logic practical for an age of online resale, cheap marking, digital records and assets that change hands
              fast.
            </p>

            <h2 id="s4" style={h2}>4. The Mykei Protocol</h2>
            <p style={body}>
              The Mykei Protocol is the proposed sequence an asset owner would follow:
            </p>
            <ol style={{ ...list, listStyle: 'none', paddingLeft: 0, marginBottom: 22 }}>
              {PROTOCOL.map((step, i) => (
                <li key={step} style={{ display: 'flex', alignItems: 'baseline', gap: 14, padding: '6px 0', borderBottom: i < PROTOCOL.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                  <span style={{ fontFamily: SERIF, fontWeight: 700, color: MUTED, minWidth: 22 }}>{i + 1}</span>
                  <span style={{ fontFamily: SERIF, fontSize: 17.5, color: INK }}>{step}</span>
                </li>
              ))}
            </ol>
            <p style={body}>
              It can apply to construction tools, solar equipment, batteries, generators, telecoms equipment, retail
              stock, estate assets and other valuable movable goods.
            </p>

            <h2 id="s5" style={h2}>5. Active Defense Node (ADN)</h2>
            <p style={body}>
              Active Defense Node (ADN) is part of this architecture, not the whole of it. It is Mykei&apos;s active
              defence architecture for event linked marking, asset protection and registry linked evidence. A UK patent
              application, No. 2606630.8, has been filed in relation to this pathway. The application is pending and must
              not be described as a granted patent.
            </p>

            <h2 id="s6" style={h2}>6. Scope and limits</h2>
            <h3 style={h3}>What the evidence currently supports</h3>
            <ul style={list}>
              <li>Economic Sterilisation is a named framework, published here and developed at Mykei Securities Ltd.</li>
              <li>A UK patent application, No. 2606630.8, has been filed in relation to the Active Defense Node pathway.</li>
              <li>ADN has controlled prototype demonstration and firmware evidence at prototype level.</li>
              <li>The Sutton and MRA literature supports the broader principle that stolen-goods markets influence theft.</li>
            </ul>
            <h3 style={h3}>What this paper does not claim</h3>
            <ul style={list}>
              <li>I did not invent stolen-goods market theory, and this framework does not depend on that claim.</li>
              <li>No field validation has been completed, and none is claimed here.</li>
              <li>No live marketplace integration exists with eBay, Vinted, Facebook Marketplace or any other platform.</li>
              <li>No police force, insurer, forensic supplier or public body has approved or endorsed this work.</li>
              <li>Patent application No. 2606630.8 is pending. It is not a granted patent.</li>
            </ul>
            <h3 style={h3}>The central open risk</h3>
            <p style={body}>
              The precedents that make this case worked because coverage was near-universal or enforced at a chokepoint.
              Mykei has neither yet. Until coverage is wide enough, or sits at a point the goods must pass through,
              partial marking and records may move theft around rather than reduce it. I treat that as the main thing
              still to prove, not a detail to manage.
            </p>
            <p style={body}>
              On evidence I am deliberately careful. What Mykei produces are structured incident and ownership records
              compiled from the owner&apos;s own account. They are not forensic proof, not legally admissible evidence by
              default, and the registry is not described as immutable. Those are claims to be earned through review, not
              asserted.
            </p>

            <h2 id="s7" style={h2}>7. Research questions</h2>
            <ol style={list}>
              <li>Which asset categories combine theft pain, resale-market dependence and buyer budget most strongly?</li>
              <li>Which records do insurers, police and asset owners actually need after a theft?</li>
              <li>Which marking and registration methods reduce resale confidence without creating GDPR, defamation or platform-risk problems?</li>
              <li>What pilot design can measure evidence readiness, asset traceability and buyer trust without overclaiming theft reduction?</li>
            </ol>

            <h2 id="s8" style={h2}>8. Conclusion</h2>
            <p style={body}>
              Sutton identified the market problem. What I am proposing is an operating model for the market side of the
              solution: mark, register, record, verify and report, applied to the organisations and environments where
              resale-driven theft actually bites. The rest is empirical. Controlled pilots and honest measurement will
              have to earn the claims this paper deliberately avoids.
            </p>
            <p style={body}>
              The thinking behind this work, in plainer language, sits in my public notes at{' '}
              <Link to="/thinking" style={{ color: INK, textDecoration: 'underline' }}>Thinking in public</Link>.
            </p>

            {/* References */}
            <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${BORDER}` }}>
              <h2 style={{ ...h2, marginTop: 0, fontSize: 21 }}>References</h2>
              <ol style={list}>
                <li>Sutton, M. (1995). <em>Supply by Theft: Does the Market for Second-hand Goods Play a Role in Keeping Crime Figures High?</em> British Journal of Criminology, 35(3), 400-416.</li>
                <li>Sutton, M., Johnston, K., and Lockwood, H. (1998). <em>Handling Stolen Goods and Theft: A Market Reduction Approach</em>. Home Office Research Study 178.</li>
                <li>Sutton, M., Schneider, J., and Hetherington, S. (2001). <em>Tackling Theft with the Market Reduction Approach</em>. Home Office Crime Reduction Research Series Paper 8.</li>
                <li>Clarke, R. V. (1999). <em>Hot Products: Understanding, Anticipating and Reducing Demand for Stolen Goods</em>. Police Research Series Paper 112.</li>
                <li>Felson, M. and Cohen, L. E. (1979). Social change and crime rate trends. <em>American Sociological Review</em>, 44(4), 588-608.</li>
                <li>Home Office (2022). <em>Scrap Metal Dealers Act 2013: Post-Implementation Review</em>. London: Home Office.</li>
                <li>Office of the New York State Attorney General (2015). <em>Secure Our Smartphones Initiative: Annual Report</em>.</li>
              </ol>
            </div>

            {/* Cite as */}
            <div style={{ marginTop: 36, padding: '18px 22px', border: `1px solid ${BORDER}`, borderLeft: `3px solid ${INK}` }}>
              <p style={{ ...label, marginBottom: 10 }}>Cite as</p>
              <p style={{ fontFamily: SERIF, fontSize: 14.5, color: BODY, margin: 0, lineHeight: 1.6 }}>
                Esema, M. (2026). From Market Reduction to Economic Sterilisation: a practical framework for reducing the
                resale confidence and economic acceptability of stolen goods. Mykei Securities Ltd. Available at:
                https://michaelesema.com/thesis
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}

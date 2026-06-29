import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const records = [
  { num: '01', label: 'Ownership', detail: 'Who owns the asset, with the records needed to assert that claim later.' },
  { num: '02', label: 'Identity', detail: 'Batch-identifiable marker references, serial numbers, brand, model and photographs.' },
  { num: '03', label: 'Provenance', detail: 'Purchase evidence and the history of how an asset changed hands.' },
  { num: '04', label: 'Events', detail: 'Timestamped event records for activation, transfer, servicing and status changes.' },
  { num: '05', label: 'Incidents', detail: 'Structured incident records compiled from the owner’s own account when something goes wrong.' },
  { num: '06', label: 'Chain of custody', detail: 'A documented trail intended to support lawful recovery and dispute resolution.' },
]

const notList = [
  'Immutable or legally admissible proof on its own',
  'Police, insurer or marketplace approved',
  'A monitor of sellers or a flag on resale listings',
  'A live, deployed service today',
  'A replacement for official records or due diligence',
]

const sectionBase: React.CSSProperties = { padding: 'clamp(48px, 8vw, 80px) clamp(20px, 5vw, 40px)' }
const container: React.CSSProperties = { maxWidth: 720, margin: '0 auto', width: '100%' }
const h2: React.CSSProperties = { fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 24, lineHeight: 1.3 }
const body: React.CSSProperties = { fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)', lineHeight: 1.75, color: 'var(--text-secondary)' }

export default function RegistryPage() {
  useEffect(() => {
    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'Mykei Registry — Concept Note',
      'about': 'An evidence-record layer for ownership, provenance, incidents and chain of custody.',
      'author': { '@type': 'Person', '@id': 'https://michaelesema.com/#person', 'name': 'Michael Esema' },
      'publisher': { '@type': 'Organization', 'name': 'Mykei Securities Ltd', 'url': 'https://mykei.io' },
      'url': 'https://michaelesema.com/registry',
    })
    document.head.appendChild(schema)
    return () => { document.head.removeChild(schema) }
  }, [])

  return (
    <>
      <Helmet>
        <title>Mykei Registry | Concept Note | Mykei Securities</title>
        <meta name="description" content="The Mykei Registry is a proposed evidence-record layer for ownership, provenance, incidents and chain of custody. A concept note by Michael Esema, founder of Mykei Securities. Early design; nothing is live." />
        <link rel="canonical" href="https://michaelesema.com/registry" />
        <meta property="og:title" content="Mykei Registry | Concept Note" />
        <meta property="og:description" content="A proposed evidence-record layer for ownership, provenance, incidents and chain of custody. Early design; nothing is live." />
        <meta property="og:url" content="https://michaelesema.com/registry" />
        <meta property="og:type" content="article" />
      </Helmet>

      <a
        href="#main-content"
        style={{ position: 'absolute', left: -9999, top: 8, zIndex: 9999, background: 'var(--dark)', color: '#fff', padding: '8px 16px', borderRadius: 4, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
        onFocus={e => { e.currentTarget.style.left = '8px' }}
        onBlur={e => { e.currentTarget.style.left = '-9999px' }}
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content" style={{ paddingTop: 64 }}>
        <section aria-labelledby="registry-heading" style={{ ...sectionBase, paddingTop: 'clamp(64px, 10vw, 96px)' }}>
          <div style={{ ...container, maxWidth: 680 }}>
            <img
              src="/mykei-mark.svg"
              alt="Mykei Securities logo"
              width="52"
              height="65"
              style={{ height: 60, width: 'auto', display: 'block', marginBottom: 28 }}
            />
            <p className="font-mono-label" style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>
              Mykei Registry &middot; Concept Note
            </p>
            <h1 id="registry-heading" style={{ fontSize: 'clamp(2rem, 6vw, 3.25rem)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: 20, letterSpacing: '-0.02em' }}>
              Mykei Registry
            </h1>
            <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.375rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 24, lineHeight: 1.4 }}>
              An evidence-record layer for the things people own.
            </p>
            <p style={{ ...body, maxWidth: 600 }}>
              The Mykei Registry is a proposed evidence-record layer for ownership, provenance, incidents and
              chain of custody. It is the part of the wider Mykei system concerned with memory: keeping a
              structured, owner-held account of what an asset is, who owns it, and what has happened to it, so
              that a valuable item does not become anonymous the moment it leaves its owner’s hands.
            </p>
          </div>
        </section>

        <section aria-labelledby="why-heading" style={{ ...sectionBase, background: 'var(--bg-section)' }}>
          <div style={container}>
            <h2 id="why-heading" style={h2}>Why a registry</h2>
            <p style={body}>
              Most stolen goods are easy to sell because they are easy to anonymise. Serial numbers go
              unrecorded, purchase evidence is lost, and an incident becomes a weak line in a report that no one
              can act on. That anonymity is the economic engine of resale crime. The registry is designed to
              attack it from the evidence side: if ownership, identity and events are recorded before anything
              goes wrong, a marked asset carries a stronger chain of proof than most owners have today.
            </p>
          </div>
        </section>

        <section aria-labelledby="records-heading" style={sectionBase}>
          <div style={container}>
            <h2 id="records-heading" style={h2}>What the registry records</h2>
            <ol aria-label="Six record types in the Mykei Registry" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {records.map(r => (
                <li key={r.num} style={{ display: 'flex', gap: 20, padding: '20px 24px', border: '1px solid var(--border)', borderRadius: 10, alignItems: 'flex-start', background: '#fff' }}>
                  <span aria-hidden="true" className="font-mono-label" style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', minWidth: 28, paddingTop: 3, flexShrink: 0, letterSpacing: '0.05em' }}>{r.num}</span>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, fontSize: '1rem' }}>{r.label}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{r.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="fit-heading" style={{ ...sectionBase, background: 'var(--bg-section)' }}>
          <div style={container}>
            <h2 id="fit-heading" style={h2}>How it fits the wider system</h2>
            <p style={body}>
              The registry is the evidence layer of Mykei&rsquo;s anti-resale-crime architecture. Marking makes an
              asset identifiable; the Active Defense Node (ADN) is the active defence and event-linked marking
              pathway, on a patent-pending R&amp;D route under UK patent application No. 2606630.8; Economic
              Sterilisation is the framework for reducing resale confidence. The registry is where those signals
              become durable records: timestamped event records and evidence-supporting workflows compiled from
              the owner&rsquo;s own account.
            </p>
          </div>
        </section>

        <section aria-labelledby="not-heading" style={sectionBase}>
          <div style={container}>
            <h2 id="not-heading" style={h2}>What the registry is not</h2>
            <ul aria-label="Mykei Registry scope limitations" style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gap: 10 }}>
              {notList.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
                  <span aria-hidden="true" style={{ color: 'var(--border)', fontWeight: 700, flexShrink: 0, fontSize: '1.1rem' }}>&middot;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={body}>
              The registry produces structured ownership and incident records compiled from the owner&rsquo;s own
              account. They are evidence-supporting, not legal proof, and the registry is not described as
              immutable. It is in early design: this is a concept note, not a live product.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

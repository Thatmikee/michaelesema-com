import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const steps = [
  { num: '01', label: 'Mark', detail: 'Apply a unique visible and covert identifier to the asset.' },
  { num: '02', label: 'Register', detail: 'Record ownership, serial numbers, photos, and location.' },
  { num: '03', label: 'Photograph', detail: 'Create a timestamped visual ownership record.' },
  { num: '04', label: 'Record', detail: 'Capture brand, model, purchase evidence, and chain of custody.' },
  { num: '05', label: 'Flag Stolen', detail: 'Lock the asset record so the stolen flag is designed to resist silent deletion.' },
  { num: '06', label: 'Support Recovery', detail: 'Issue an incident report pack and chain of custody documentation.' },
]

const notList = [
  'Forensic DNA at this stage',
  'Police approval or endorsement',
  'An insurance product or theft guarantee',
  'A guarding or patrol service',
  'A replacement for your existing security',
]

const sectionBase: React.CSSProperties = {
  padding: 'clamp(48px, 8vw, 80px) clamp(20px, 5vw, 40px)',
}

const container: React.CSSProperties = {
  maxWidth: 720,
  margin: '0 auto',
  width: '100%',
}

const h2: React.CSSProperties = {
  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: 24,
  lineHeight: 1.3,
}

const body: React.CSSProperties = {
  fontSize: 'clamp(1rem, 2.5vw, 1.0625rem)',
  lineHeight: 1.75,
  color: 'var(--text-secondary)',
}

export default function ProtocolPage() {
  return (
    <>
      <Helmet>
        <title>Probata | Registry-First Asset Protection for Nigeria | Mykei Securities</title>
        <meta
          name="description"
          content="Probata is Mykei Securities' registry-first programme for Nigeria: practical asset marking, ownership registration, and recovery evidence for high-value movable assets."
        />
        <link rel="canonical" href="https://michaelesema.com/protocol" />
        <meta property="og:title" content="Probata | Registry-First Asset Protection for Nigeria | Mykei Securities" />
        <meta property="og:description" content="Make stolen assets harder to sell. Asset marking, ownership registry, and recovery evidence for Nigerian solar, power, estate, and SME assets." />
        <meta property="og:url" content="https://michaelesema.com/protocol" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Skip link: keyboard/screen-reader users jump past nav */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: -9999,
          top: 8,
          zIndex: 9999,
          background: 'var(--dark)',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: 4,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
        }}
        onFocus={e => { e.currentTarget.style.left = '8px' }}
        onBlur={e => { e.currentTarget.style.left = '-9999px' }}
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main-content" style={{ paddingTop: 64 }}>

        {/* Hero */}
        <section
          aria-labelledby="protocol-heading"
          style={{ ...sectionBase, paddingTop: 'clamp(64px, 10vw, 96px)' }}
        >
          <div style={{ ...container, maxWidth: 680 }}>
            <p
              className="font-mono-label"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: 20,
              }}
            >
              Probata · Registry-First · Nigeria
            </p>

            <h1
              id="protocol-heading"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3.25rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                marginBottom: 20,
                letterSpacing: '-0.02em',
              }}
            >
              Probata
            </h1>

            <p style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.375rem)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: 24,
              lineHeight: 1.4,
            }}>
              Make stolen assets harder to sell.
            </p>

            <p style={{ ...body, maxWidth: 600 }}>
              Probata is a programme in early design by Mykei Securities, preparing a pre-pilot to test whether
              high-value movable assets such as solar batteries, inverters, generators,
              panels, cables, tools, estate equipment, and warehouse goods can be made less
              anonymous, harder to resell, and easier to prove when they are marked,
              registered, and capable of being flagged as stolen.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section
          aria-labelledby="problem-heading"
          style={{ ...sectionBase, background: 'var(--bg-section)' }}
        >
          <div style={container}>
            <h2 id="problem-heading" style={h2}>The problem</h2>
            <p style={body}>
              When a solar battery, inverter, generator, cable reel, or tool is stolen in Nigeria,
              it typically becomes an anonymous object within hours. Owners often have no serial
              records, no photographs, no chain of custody, and no way to prove the asset is theirs
              if found in a market, at a reseller, or in a repair shop. That anonymity is the
              economic engine of asset theft. Probata is designed to remove it.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="how-heading" style={sectionBase}>
          <div style={container}>
            <h2 id="how-heading" style={h2}>How Probata works</h2>
            <ol
              aria-label="Probata six-step protocol"
              style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}
            >
              {steps.map(step => (
                <li
                  key={step.num}
                  style={{
                    display: 'flex',
                    gap: 20,
                    padding: '20px 24px',
                    border: '1px solid var(--border)',
                    borderRadius: 10,
                    alignItems: 'flex-start',
                    background: '#fff',
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="font-mono-label"
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      minWidth: 28,
                      paddingTop: 3,
                      flexShrink: 0,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, fontSize: '1rem' }}>
                      {step.label}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What it is not */}
        <section
          aria-labelledby="not-heading"
          style={{ ...sectionBase, background: 'var(--bg-section)' }}
        >
          <div style={container}>
            <h2 id="not-heading" style={h2}>What Probata is not</h2>
            <ul
              aria-label="Probata scope limitations"
              style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'grid', gap: 10 }}
            >
              {notList.map(item => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  <span aria-hidden="true" style={{ color: 'var(--border)', fontWeight: 700, flexShrink: 0, fontSize: '1.1rem' }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={body}>
              Probata is a practical protocol for making stolen assets less anonymous.
              Advanced marking tiers, including microdots, taggants, and forensic markers,
              may be added as the pilot matures and customer demand validates the model.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="contact-heading"
          style={{ ...sectionBase, textAlign: 'center' }}
        >
          <div style={{ ...container, maxWidth: 560 }}>
            <h2 id="contact-heading" style={h2}>Pre-pilot discussions</h2>
            <p style={{ ...body, marginBottom: 36 }}>
              We want to test Probata with solar companies, battery and inverter dealers,
              estates, schools, churches, security firms, warehouses, and construction
              operators in Nigeria. If you would like to explore whether a pilot makes sense
              for your organisation, reach out directly.
            </p>
            <a
              href="mailto:protocol@mykei.io"
              aria-label="Email the Probata pre-pilot team at protocol@mykei.io"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 48,
                padding: '0 32px',
                background: 'var(--dark)',
                color: '#fff',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 150ms ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            >
              protocol@mykei.io
            </a>
            <p style={{ marginTop: 16, fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              No pitch deck required. A 10-minute conversation is enough to start.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

// Off-centre portrait, name set across it. One channel (magenta) is live.
export default function Hero() {
  return (
    <section aria-label="Introduction" data-channel="magenta" style={{ position: 'relative', paddingTop: 'clamp(96px, 11vw, 150px)', paddingBottom: 'clamp(48px, 6vw, 96px)', overflow: 'hidden' }}>
      <div className="wrap hero" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 'clamp(12px, 1.6vw, 24px)', alignItems: 'start' }}>
        <div className="hero-portrait" style={{ gridColumn: '7 / 12', gridRow: '1 / 3', position: 'relative', marginTop: 'clamp(0px, 2vw, 28px)' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, transform: 'translate(clamp(10px, 1.4vw, 22px), clamp(10px, 1.4vw, 22px))', border: '1px solid var(--accent)', borderRadius: 'var(--radius-hero)' }} />
          <div className="plate" style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 'var(--radius-hero)' }}>
            <img src="/michael-esema-portrait.jpg" alt="Michael Esema" width={1000} height={1249} fetchPriority="high" style={{ objectPosition: 'center top' }} />
          </div>
        </div>

        <div style={{ gridColumn: '1 / 10', gridRow: '1', position: 'relative', zIndex: 2, paddingTop: 'clamp(40px, 9vw, 150px)' }}>
          <p className="label">Graphic and multimedia designer</p>
          <h1 className="display" style={{ fontSize: 'clamp(46px, 10.2vw, 168px)', marginTop: 'clamp(12px, 1.4vw, 22px)' }}>
            Michael<br />Esema
          </h1>
        </div>

        <div className="hero-copy" style={{ gridColumn: '1 / 6', gridRow: '2', position: 'relative', zIndex: 2, marginTop: 'clamp(24px, 3vw, 44px)' }}>
          <p style={{ font: '400 clamp(17px, 1.5vw, 21px)/1.55 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '40ch' }}>
            I design identities, print and websites, and I direct short films. Since 2018 I have done it for an events
            brand, a hotel, a caterer and a company of my own.
          </p>
          <p style={{ font: '400 16px/1.5 var(--font-sans)', color: 'var(--ink)', marginTop: 20, paddingLeft: 14, borderLeft: '2px solid var(--accent)' }}>
            Open to graphic and multimedia design roles in the UK.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
            <a href="#work" className="pill pill-solid">See the work</a>
            <a href="mailto:hello@michaelesema.com" className="pill pill-line">Email me</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 820px) {
          .hero > * { grid-column: 1 / -1 !important; grid-row: auto !important; }
          .hero-portrait { order: -1; max-width: 300px; margin-bottom: 8px; }
          .hero > div:nth-child(2) { padding-top: 28px !important; }
        }
      `}</style>
    </section>
  )
}

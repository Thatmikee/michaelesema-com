// The one bold moment: a field of ledger green with the portrait run to its
// bottom edge. Everything below this is white and quiet.
export default function Hero() {
  return (
    <section aria-label="Introduction" style={{ background: 'var(--ledger)', paddingTop: 72 }}>
      <div className="wrap hero" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'end', minHeight: 'min(78dvh, 720px)' }}>
        <div style={{ alignSelf: 'center', padding: 'clamp(32px, 5vw, 72px) 0' }}>
          <h1 className="display">Michael Esema</h1>
          <p style={{ font: '500 clamp(24px, 3.4vw, 46px)/1.08 var(--font-sans)', letterSpacing: '-0.03em', color: 'var(--green)', marginTop: 'clamp(10px, 1.2vw, 18px)' }}>
            Graphic and multimedia designer
          </p>
          <p style={{ font: '400 clamp(17px, 1.5vw, 21px)/1.5 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '36ch', marginTop: 'clamp(22px, 2.6vw, 36px)' }}>
            Identities, print, websites and short films, designed for businesses since 2018.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 'clamp(26px, 3vw, 40px)', flexWrap: 'wrap' }}>
            <a href="#work" className="pill pill-solid">See the work</a>
            <a href="mailto:hello@michaelesema.com" className="pill pill-line">Email me</a>
          </div>
        </div>
        <img className="hero-photo" src="/michael-esema-portrait.jpg" alt="Michael Esema" width={1000} height={1249} fetchPriority="high"
          style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: 'center top', alignSelf: 'end' }} />
      </div>
      <style>{`
        @media (max-width: 820px) {
          .hero { grid-template-columns: 1fr !important; min-height: 0 !important; }
          .hero-photo { max-width: 340px; }
        }
      `}</style>
    </section>
  )
}

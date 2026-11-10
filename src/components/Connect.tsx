export default function Connect() {
  return (
    <section id="connect" className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="glass" style={{ borderRadius: 'var(--radius-hero)', padding: 'clamp(36px, 6vw, 80px)', textAlign: 'center' }}>
          <h2 className="h2" style={{ margin: '0 auto' }}>Have a brief? Send it over.</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>Identity, print, a website or a short film. I reply within two days.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
            <a href="mailto:hello@michaelesema.com" className="pill pill-solid">hello@michaelesema.com</a>
            <a href="https://www.linkedin.com/in/michaelesema" target="_blank" rel="noopener noreferrer" className="pill pill-glass glass">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

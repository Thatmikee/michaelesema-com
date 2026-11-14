export default function Connect() {
  return (
    <section id="connect" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="wrap">
        <a href="mailto:hello@michaelesema.com" className="mail" style={{
          display: 'inline-block', color: 'var(--ink)', textDecoration: 'none',
          font: '700 clamp(28px, 6.4vw, 96px)/1 var(--font-sans)', letterSpacing: '-0.045em', overflowWrap: 'anywhere',
        }}>
          hello@michaelesema.com
        </a>
        <p style={{ marginTop: 26, display: 'flex', gap: 28, flexWrap: 'wrap', font: '400 18px/1.4 var(--font-sans)' }}>
          <a href="https://www.linkedin.com/in/michaelesema" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
          <a href="/about" className="text-link">About and qualifications</a>
        </p>
      </div>
      <style>{`.mail:hover { color: var(--green) !important; }`}</style>
    </section>
  )
}

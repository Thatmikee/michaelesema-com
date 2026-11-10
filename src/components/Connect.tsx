export default function Connect() {
  return (
    <section id="connect" className="section" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="wrap">
        <p style={{ font: '400 17px/1.5 var(--font-sans)', color: 'var(--text-secondary)' }}>For a brief, a role or a question</p>
        <a href="mailto:hello@michaelesema.com" className="mail" style={{
          display: 'inline-block', marginTop: 10, color: 'var(--ink)', textDecoration: 'none',
          font: '600 clamp(26px, 5.4vw, 72px)/1.05 var(--font-sans)', letterSpacing: '-0.035em', overflowWrap: 'anywhere',
        }}>
          hello@michaelesema.com
        </a>
        <p style={{ marginTop: 22 }}>
          <a href="https://www.linkedin.com/in/michaelesema" target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: 17 }}>LinkedIn</a>
        </p>
      </div>
      <style>{`.mail:hover { color: var(--accent); }`}</style>
    </section>
  )
}

// Computed at module load (not during render) to stay lint-clean.
const YEAR = new Date().getFullYear()

const exploreLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Focus', href: '/#focus' },
  { label: 'Work', href: '/#work' },
  { label: 'Thinking', href: '/#thinking' },
  { label: 'Paper', href: '/thesis' },
]

const elsewhere = [
  { label: 'Mykei.io', href: 'https://mykei.io', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michaelesema', external: true },
  { label: 'Email', href: 'mailto:hello@michaelesema.com', external: false },
]

const linkStyle: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: 14,
  color: 'var(--text-secondary)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
}

const colHead: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 16,
}

export default function Footer() {
  return (
    <footer style={{ background: '#e6e6e3', borderTop: '1px solid var(--border)' }}>
      <div className="footer-grid" style={{
        maxWidth: 1100, margin: '0 auto',
        padding: 'clamp(48px, 6vw, 72px) clamp(28px, 6vw, 60px) 36px',
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr 1fr',
        gap: 'clamp(32px, 5vw, 64px)',
      }}>
        <div>
          <a href="/" style={{
            textDecoration: 'none', fontFamily: "'Poppins', sans-serif",
            fontWeight: 800, fontSize: 20, color: 'var(--ink)', letterSpacing: '-0.4px',
          }}>
            Michael Esema<span style={{ color: 'var(--accent)' }}>.</span>
          </a>
          <p style={{
            fontFamily: "'Outfit', sans-serif", fontSize: 14, color: 'var(--text-secondary)',
            fontWeight: 300, lineHeight: 1.7, marginTop: 14, maxWidth: 320,
          }}>
            Founder, researcher and builder. Building Mykei Securities Ltd, a UK-first security
            venture working on asset protection and resale-driven theft.
          </p>
        </div>

        <div>
          <p style={colHead}>Explore</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {exploreLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="footer-link" style={linkStyle}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={colHead}>Elsewhere</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {elsewhere.map(l => (
              <li key={l.label}>
                <a href={l.href} className="footer-link"
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  style={linkStyle}>
                  {l.label}
                  {l.external && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        maxWidth: 1100, margin: '0 auto',
        padding: '20px clamp(28px, 6vw, 60px) 36px',
        borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: 'var(--text-muted)', letterSpacing: '0.03em' }}>
          © {YEAR} Michael Esema
        </p>
        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, color: 'var(--text-muted)' }}>
          Not affiliated with MYKI password manager
        </span>
        <a href="/privacy" className="footer-link" style={{ ...linkStyle, fontSize: 11.5, color: 'var(--text-muted)' }}>
          Privacy &amp; Cookies
        </a>
      </div>

      <style>{`
        .footer-link:hover { color: var(--ink) !important; }
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  )
}

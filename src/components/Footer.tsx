export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--dark)',
      borderTop: '1px solid var(--dark-border)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '44px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12,
          color: 'var(--text-muted)',
          letterSpacing: '0.04em',
        }}>
          © {year} Michael Esema
        </p>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 14,
          color: 'var(--text-muted)',
        }}>
          "Make theft economically irrational."
        </p>

        <a
          href="https://mykei.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--gold)',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            transition: 'opacity 0.25s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
        >
          Mykei Securities Ltd →
        </a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  )
}

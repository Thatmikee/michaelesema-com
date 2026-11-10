export default function Footer() {
  const link: React.CSSProperties = { color: 'var(--text-secondary)', textDecoration: 'none', font: '400 14px/1 var(--font-sans)' }
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0' }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ font: '400 14px/1 var(--font-sans)', color: 'var(--text-muted)' }}>
          Michael Esema, graphic and multimedia designer. {new Date().getFullYear()}
        </span>
        <nav aria-label="Footer" style={{ display: 'flex', gap: 20 }}>
          <a href="/about" style={link}>About</a>
          <a href="/thinking" style={link}>Writing</a>
          <a href="https://www.linkedin.com/in/michaelesema" target="_blank" rel="noopener noreferrer" style={link}>LinkedIn</a>
          <a href="/privacy" style={link}>Privacy</a>
        </nav>
      </div>
    </footer>
  )
}

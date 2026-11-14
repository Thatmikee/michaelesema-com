export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 0' }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', font: '400 15px/1.3 var(--font-sans)', color: 'var(--text-muted)' }}>
        <span>{new Date().getFullYear()} Michael Esema</span>
        <a href="/privacy" style={{ color: 'var(--text-muted)', textDecoration: 'underline', textUnderlineOffset: 4 }}>Privacy</a>
      </div>
    </footer>
  )
}

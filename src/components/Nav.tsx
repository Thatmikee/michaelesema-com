const links = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: 'mailto:hello@michaelesema.com' },
]

// Three links fit on a phone, so there is no menu button to open.
export default function Nav({ onLedger = false }: { onLedger?: boolean }) {
  return (
    <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50, background: onLedger ? 'transparent' : 'var(--paper)' }}>
      <nav aria-label="Primary" className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, height: 72 }}>
        <a href="/" style={{ font: '700 18px/1 var(--font-sans)', letterSpacing: '-0.02em', color: 'var(--ink)', textDecoration: 'none' }}>Michael Esema</a>
        <ul style={{ display: 'flex', listStyle: 'none', gap: 'clamp(16px, 2.4vw, 36px)' }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-item" style={{ font: '500 17px/1 var(--font-sans)', color: 'var(--ink)', textDecoration: 'none', padding: '8px 0', display: 'inline-block' }}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <style>{`.nav-item:hover { text-decoration: underline !important; text-underline-offset: 6px; text-decoration-thickness: 1.5px; }`}</style>
    </header>
  )
}

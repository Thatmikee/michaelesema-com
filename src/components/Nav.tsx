import { useState } from 'react'

const links = [
  { label: 'Work', href: '/#work' },
  { label: 'Films', href: '/#films' },
  { label: 'Qualifications', href: '/#qualifications' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header style={{ position: 'fixed', top: 14, left: 0, right: 0, zIndex: 50, display: 'flex', justifyContent: 'center', padding: '0 16px', pointerEvents: 'none' }}>
      <nav aria-label="Primary" className="glass" style={{
        pointerEvents: 'auto', display: 'flex', alignItems: 'center', gap: 6,
        height: 52, padding: '0 8px 0 18px', borderRadius: 999, maxWidth: 720, width: '100%',
      }}>
        <a href="/" style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.01em', marginRight: 'auto' }}>
          Michael Esema
        </a>
        <ul className="nav-desktop" style={{ display: 'flex', listStyle: 'none', gap: 2, alignItems: 'center' }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-item" style={{ display: 'inline-block', padding: '8px 12px', borderRadius: 999, fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none' }}>
                {l.label}
              </a>
            </li>
          ))}
          <li><a href="mailto:hello@michaelesema.com" className="pill pill-solid" style={{ height: 36, padding: '0 16px', fontSize: 14 }}>Email</a></li>
        </ul>
        <button className="nav-mobile-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 0, color: 'var(--ink)', fontSize: 14, fontWeight: 500, padding: '8px 12px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="glass" style={{ pointerEvents: 'auto', position: 'absolute', top: 64, left: 16, right: 16, borderRadius: 22, padding: 10 }}>
          {[...links, { label: 'Email', href: 'mailto:hello@michaelesema.com' }].map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '14px 16px', fontSize: 17, fontWeight: 500, color: 'var(--ink)', textDecoration: 'none', borderRadius: 12 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
      <style>{`
        .nav-item:hover { color: var(--ink); background: rgba(255,255,255,0.06); }
        @media (max-width: 640px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: block !important; } }
      `}</style>
    </header>
  )
}

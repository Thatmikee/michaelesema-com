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
    <header className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderWidth: '0 0 1px 0' }}>
      <nav aria-label="Primary" className="wrap" style={{ display: 'flex', alignItems: 'center', gap: 8, height: 60 }}>
        <a href="/" style={{ font: '600 14px/1 var(--font-display)', color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.02em', marginRight: 'auto' }}>
          Michael Esema
        </a>
        <ul className="nav-desktop" style={{ display: 'flex', listStyle: 'none', gap: 4, alignItems: 'center' }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-item" style={{ display: 'inline-block', padding: '8px 12px', font: '400 15px/1 var(--font-sans)', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                {l.label}
              </a>
            </li>
          ))}
          <li><a href="mailto:hello@michaelesema.com" className="nav-item" style={{ display: 'inline-block', padding: '8px 0 8px 12px', font: '500 15px/1 var(--font-sans)', color: 'var(--ink)', textDecoration: 'none' }}>Contact</a></li>
        </ul>
        <button className="nav-mobile-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 0, color: 'var(--ink)', font: '500 15px/1 var(--font-sans)', padding: '10px 0 10px 12px', cursor: 'pointer' }}>
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="wrap" style={{ paddingBottom: 14 }}>
          {[...links, { label: 'Contact', href: 'mailto:hello@michaelesema.com' }].map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '14px 0', font: '500 20px/1 var(--font-sans)', color: 'var(--ink)', textDecoration: 'none', borderTop: '1px solid var(--border)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
      <style>{`
        .nav-item:hover { color: var(--ink) !important; }
        @media (max-width: 680px) { .nav-desktop { display: none !important; } .nav-mobile-btn { display: block !important; } }
      `}</style>
    </header>
  )
}

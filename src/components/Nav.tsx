import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About',    href: '/#about' },
  { label: 'Focus',    href: '/#focus' },
  { label: 'Work',     href: '/#work' },
  { label: 'Thinking', href: '/#thinking' },
  { label: 'Paper',    href: '/thesis' },
  { label: 'Mykei',    href: 'https://mykei.io', external: true },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.86)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 clamp(24px, 5vw, 60px)',
        height: 68,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <a href="/" style={{
          textDecoration: 'none',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: 19,
          color: 'var(--ink)',
          letterSpacing: '-0.4px',
        }}>
          Michael Esema<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <ul style={{ display: 'flex', gap: 30, listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }} className="nav-desktop">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="nav-link"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  paddingBottom: 3,
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s, color 0.2s',
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                }}
              >
                {link.label}
                {link.external && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation-menu"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 6, color: 'var(--ink)' }}
          className="nav-mobile-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
            {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="site-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(255,255,255,0.98)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: '12px clamp(24px,5vw,60px) 24px' }}>
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  style={{ padding: '13px 0', borderBottom: '1px solid var(--border)' }}
                >
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 22, fontWeight: 700,
                      color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.3px',
                    }}
                  >
                    {link.label}{link.external && <span style={{ color: 'var(--accent)' }}> ↗</span>}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link:hover { border-bottom-color: var(--accent) !important; }
      `}</style>
    </motion.nav>
  )
}

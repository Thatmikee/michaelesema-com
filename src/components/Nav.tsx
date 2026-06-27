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
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(10,11,24,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 clamp(24px, 5vw, 60px)',
        height: 70,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <a href="/" style={{
          textDecoration: 'none',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: 17,
          color: '#FFFFFF',
          letterSpacing: '-0.3px',
        }}>
          Michael Esema
        </a>

        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }} className="nav-desktop">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {link.label}{link.external && <span style={{ opacity: 0.45, marginLeft: 3 }}>↗</span>}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation-menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 6,
            color: '#FFFFFF',
          }}
          className="nav-mobile-btn"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <><path d="M4 6h16M4 12h16M4 18h16"/></>
            }
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
            style={{
              background: 'rgba(10,11,24,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: '16px clamp(24px,5vw,60px) 28px' }}>
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  style={{ padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

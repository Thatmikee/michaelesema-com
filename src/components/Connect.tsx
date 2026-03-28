import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    name: 'LinkedIn',
    handle: '/in/michaelesema',
    href: 'https://www.linkedin.com/in/michaelesema',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    handle: '@MykeiSecurities',
    href: 'https://twitter.com/MykeiSecurities',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: '@Thatmikee',
    href: 'https://github.com/Thatmikee',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    name: 'Mykei Securities',
    handle: 'mykei.io',
    href: 'https://mykei.io',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'ADN-1 Demo',
    href: 'https://youtube.com/shorts/AON3q0uMwgY',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Linktree',
    handle: '@mikeyesema',
    href: 'https://linktr.ee/mikeyesema',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
      </svg>
    ),
  },
]

function SocialCard({ social, index }: { social: typeof socials[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '22px 24px',
        background: '#fff',
        border: '1px solid var(--light-border)',
        textDecoration: 'none',
        color: 'var(--text-dark)',
        transition: 'border-color 0.25s, transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--gold)'
        el.style.transform = 'translateY(-3px)'
        el.style.boxShadow = '0 8px 32px rgba(198,164,78,0.1)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--light-border)'
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div style={{
        width: 42, height: 42,
        borderRadius: '50%',
        background: 'rgba(198,164,78,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gold)',
        flexShrink: 0,
        transition: 'background 0.25s, color 0.25s',
      }}>
        {social.icon}
      </div>
      <div>
        <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-dark)', lineHeight: 1.2 }}>
          {social.name}
        </p>
        <p style={{
          fontSize: 12,
          color: '#999',
          fontFamily: "'JetBrains Mono', monospace",
          marginTop: 2,
        }}>
          {social.handle}
        </p>
      </div>
    </motion.a>
  )
}

export default function Connect() {
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section
      id="connect"
      style={{ background: 'var(--light-bg)' }}
    >
      {/* Gold divider */}
      <div style={{
        position: 'absolute' as const,
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1,
        height: 64,
        background: 'linear-gradient(var(--gold), transparent)',
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '100px 40px',
        position: 'relative',
      }}>
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 56 }}
        >
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 52,
            fontWeight: 400,
            color: 'var(--gold)',
            lineHeight: 1,
            opacity: 0.55,
          }}>
            03
          </span>
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 4,
            }}>
              Network
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px, 3vw, 38px)',
              fontWeight: 400,
              color: 'var(--text-dark)',
              lineHeight: 1.2,
            }}>
              Let's connect
            </h2>
          </div>
        </motion.div>

        {/* Social grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
          marginBottom: 40,
        }} className="connect-grid">
          {socials.map((s, i) => (
            <SocialCard key={s.name} social={s} index={i} />
          ))}
        </div>

        {/* Email banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: '36px 40px',
            background: '#fff',
            border: '1px solid var(--light-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#999',
              marginBottom: 4,
            }}>
              Direct line
            </p>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              color: 'var(--text-dark)',
              fontWeight: 400,
            }}>
              hello@michaelesema.com
            </p>
          </div>
          <a
            href="mailto:hello@michaelesema.com"
            style={{
              padding: '13px 30px',
              background: 'var(--dark)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.04em',
              transition: 'background 0.25s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--gold)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--dark)'}
          >
            Send an email
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .connect-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .connect-grid {
            grid-template-columns: 1fr !important;
          }
          #connect > div {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

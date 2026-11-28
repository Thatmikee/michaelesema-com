import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Board, Project, Shot, Theme, World } from '../work'
import Mark from '../site/Mark'
import { prefersReduced } from '../site/motion'

// A case study dressed as the client's own brand: its ground, its colours, and a
// run of edge-to-edge boards. Every colour comes from the project's `theme`.
// Motion earns its place: the title and boards arrive in reading order (CSS, so
// it needs no JavaScript), the live site plays as video only while it is on
// screen, and reduced motion gets stills with no animation.

function Reveal({ children }: { children: ReactNode }) {
  return <div className="bw-board">{children}</div>
}

function Pic({ s, t, eager }: { s: Shot; t: Theme; eager?: boolean }) {
  const contain = s.fit === 'contain'
  return (
    <img
      src={s.src}
      alt={s.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{ width: '100%', height: '100%', objectFit: contain ? 'contain' : 'cover', objectPosition: 'top', background: contain ? t.ink : undefined, padding: contain ? '9%' : undefined }}
    />
  )
}

function LiveVideo({ b, t }: { b: Extract<Board, { kind: 'video' }>; t: Theme }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const manual = useRef(false) // the visitor pressed Pause, so scrolling back must not restart it
  // No autoplay attribute and preload="none": nothing downloads until the video is
  // on screen. It then plays, and pauses again when scrolled away. Never under
  // reduced motion.
  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (prefersReduced()) { v.pause(); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !manual.current) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
      else if (!e.isIntersecting) { v.pause(); setPlaying(false) }
    }, { threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) { manual.current = false; void v.play(); setPlaying(true) } else { manual.current = true; v.pause(); setPlaying(false) }
  }
  return (
    <div className="wrap" style={{ padding: 'clamp(56px, 8vw, 128px) clamp(20px, 4.5vw, 64px)' }}>
      <video ref={ref} src={b.src} poster={b.poster} muted loop playsInline preload="none" aria-label={b.alt}
        style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover', objectPosition: 'top', background: t.ink }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
        <p style={{ font: '400 clamp(16px, 1.3vw, 18px)/1.4 var(--font-sans)', color: t.ink }}>{b.caption}</p>
        <button type="button" onClick={toggle} className="bw-btn">{playing ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  )
}

function BoardView({ b, t }: { b: Board; t: Theme }) {
  switch (b.kind) {
    case 'full':
      return <Reveal><div style={{ aspectRatio: b.shot.ratio }}><Pic s={b.shot} t={t} /></div></Reveal>
    case 'pair':
      return (
        <Reveal>
          <div className="bw-pair" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {b.shots.map(s => <div key={s.src} style={{ aspectRatio: b.ratio, overflow: 'hidden' }}><Pic s={s} t={t} /></div>)}
          </div>
          {b.caption && <p className="wrap" style={{ font: '400 clamp(15px, 1.2vw, 17px)/1.4 var(--font-sans)', padding: '14px clamp(20px, 4.5vw, 64px) 0' }}>{b.caption}</p>}
        </Reveal>
      )
    case 'palette':
      return (
        <Reveal>
          <div className="bw-palette" style={{ display: 'grid', gridTemplateColumns: `repeat(${b.swatches.length}, 1fr)` }}>
            {b.swatches.map(s => (
              <div key={s.hex} style={{ background: s.hex, color: s.text, padding: 'clamp(28px, 4vw, 56px)', minHeight: 'clamp(220px, 28vw, 380px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <p style={{ font: '700 clamp(28px, 3.6vw, 52px)/1 var(--font-sans)', letterSpacing: '-0.035em' }}>{s.name}</p>
                <p style={{ font: '500 clamp(16px, 1.3vw, 18px)/1.4 var(--font-sans)', marginTop: 8 }}>{s.hex}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )
    case 'flyers':
      return (
        <Reveal>
          <div className="wrap" style={{ padding: 'clamp(48px, 7vw, 110px) clamp(20px, 4.5vw, 64px)' }}>
            <div className="bw-strip" tabIndex={0} role="region" aria-label="Flyers and posts, scroll sideways"
              style={{ display: 'flex', gap: 'clamp(12px, 1.6vw, 24px)', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 14 }}>
              {b.shots.map(s => (
                <img key={s.src} src={s.src} alt={s.alt} loading="lazy"
                  style={{ height: 'clamp(280px, 42vw, 560px)', width: 'auto', maxWidth: 'none', flex: 'none', scrollSnapAlign: 'start' }} />
              ))}
            </div>
            <p style={{ font: '400 clamp(15px, 1.2vw, 17px)/1.4 var(--font-sans)', marginTop: 14 }}>{b.caption}</p>
          </div>
        </Reveal>
      )
    case 'video':
      return <LiveVideo b={b} t={t} />
    case 'band':
      return (
        <Reveal>
          <div style={{ background: t.accent, color: t.onAccent, padding: 'clamp(56px, 9vw, 150px) 0' }}>
            <p className="wrap" style={{ font: '700 clamp(34px, 6.2vw, 104px)/1 var(--font-sans)', letterSpacing: '-0.045em', maxWidth: '18ch' }}>{b.text}</p>
          </div>
        </Reveal>
      )
  }
}

export default function BrandWorld({ p, w, next }: { p: Project; w: World; next: Project }) {
  const t = w.theme
  const dark = parseInt(t.ground.slice(1, 3), 16) < 100
  // Long names get a smaller title so they do not bury the picture behind them.
  const titleSize = p.title.length > 18 ? 'clamp(48px, 10vw, 168px)' : 'clamp(60px, 14.5vw, 240px)'
  const facts: [string, string][] = [['Role', p.role], ['Discipline', p.discipline], ['Years', p.years]]
  const sections = ([
    ['What I made', p.made],
    ['How I worked', p.process],
    ['The result', p.outcome],
  ] as [string, string | string[] | undefined][]).filter((s): s is [string, string | string[]] => Boolean(s[1]))

  return (
    <div className="bw" style={{ background: t.ground, color: t.ink, minHeight: '100dvh' }}>
      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 120, zIndex: 50, background: `linear-gradient(to bottom, ${t.ground}cc, transparent)` }}>
        <Link to="/" aria-label="Michael Esema, home" style={{ position: 'absolute', left: 18, top: 18, width: 22, height: 22, display: 'block' }}><Mark onDark={dark} /></Link>
        <nav aria-label="Primary" style={{ position: 'absolute', right: 'clamp(16px, 2.2vw, 32px)', top: 14, display: 'grid', justifyItems: 'end' }}>
          {[['Work', '/work'], ['Blog', '/blog'], ['About', '/about']].map(([label, to]) => (
            <Link key={to} to={to} className="bw-nav" style={{ font: "800 16px/24px 'Satoshi', sans-serif", textTransform: 'uppercase' }}>{label}</Link>
          ))}
          <a href="mailto:hello@michaelesema.com" className="bw-nav" style={{ font: "800 16px/24px 'Satoshi', sans-serif", textTransform: 'uppercase' }}>Contact</a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        {w.hero === 'screen' ? (
          <section aria-label={p.title} style={{ paddingTop: 72 }}>
            <img src={p.cover.src} alt={p.cover.alt} fetchPriority="high" decoding="async" style={{ width: '100%', height: 'auto', maxHeight: '72dvh', aspectRatio: p.cover.ratio, objectFit: 'cover', objectPosition: 'top' }} />
            <div className="wrap" style={{ padding: 'clamp(40px, 6vw, 96px) clamp(20px, 4.5vw, 64px) 0' }}>
              <h1 className="bw-rise"
                style={{ font: `800 ${titleSize}/0.88 var(--font-sans)`, letterSpacing: '-0.055em', color: t.ink }}>
                {p.title}
              </h1>
              <p style={{ font: '500 clamp(18px, 1.8vw, 26px)/1.3 var(--font-sans)', marginTop: 'clamp(14px, 1.8vw, 26px)', color: t.accent }}>{p.discipline}</p>
            </div>
          </section>
        ) : (
        <section aria-label={p.title} style={{ position: 'relative', minHeight: 'min(100dvh, 980px)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
          <img src={p.cover.src} alt={p.cover.alt} className="bw-zoom" fetchPriority="high" decoding="async"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${t.ground} 8%, ${t.ground}d9 30%, ${t.ground}66 52%, ${t.ground}00 74%)` }} />
          <div className="wrap" style={{ position: 'relative', paddingBottom: 'clamp(28px, 5vw, 72px)' }}>
            <h1 className="bw-rise"
              style={{ font: `800 ${titleSize}/0.86 var(--font-sans)`, letterSpacing: '-0.055em', color: t.ink, animationDelay: '0.15s' }}>
              {p.title}
            </h1>
            <p style={{ font: '500 clamp(18px, 1.8vw, 26px)/1.3 var(--font-sans)', marginTop: 'clamp(14px, 1.8vw, 26px)', color: t.accent }}>{p.discipline}</p>
          </div>
        </section>
        )}
        {w.hero === 'scene' && (
          <p className="wrap" style={{ font: '400 clamp(15px, 1.2vw, 17px)/1.4 var(--font-sans)', padding: '14px clamp(20px, 4.5vw, 64px) 0', color: t.ink }}>
            The scene is a mock-up: the artwork is mine, the setting is generated.
          </p>
        )}

        <section aria-label="Overview" className="wrap bw-over" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 'clamp(16px, 2vw, 32px)', rowGap: 40, padding: 'clamp(64px, 10vw, 160px) clamp(20px, 4.5vw, 64px)' }}>
          <nav aria-label="Breadcrumb" style={{ gridColumn: '1 / -1', font: '500 15px/1.4 var(--font-sans)' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 10, listStyle: 'none' }}>
              <li><Link to="/" className="bw-link">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/work" className="bw-link">Work</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{p.title}</li>
            </ol>
          </nav>
          <h2 style={{ gridColumn: '1 / 9', font: '700 clamp(38px, 7vw, 116px)/0.95 var(--font-sans)', letterSpacing: '-0.05em', color: t.ink }}>{w.statement}</h2>
          <div style={{ gridColumn: '9 / 13', alignSelf: 'end', display: 'grid', gap: 28 }}>
            <p style={{ font: '400 clamp(17px, 1.45vw, 20px)/1.6 var(--font-sans)', color: t.ink }}>{p.brief}</p>
            <dl style={{ display: 'grid', gap: 12, font: '400 16px/1.45 var(--font-sans)' }}>
              {facts.map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 12 }}>
                  <dt style={{ color: t.ink, opacity: 0.8 }}>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              {p.link && (
                <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 12 }}>
                  <dt style={{ color: t.ink, opacity: 0.8 }}>Live</dt>
                  <dd><a href={p.link.href} target="_blank" rel="noopener noreferrer" className="bw-link" style={{ color: t.accent }}>{p.link.label}</a></dd>
                </div>
              )}
            </dl>
          </div>
        </section>

        {w.boards.map((b, i) => <BoardView key={i} b={b} t={t} />)}

        <section aria-label="Process" className="wrap bw-over" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 6vw, 96px)', padding: 'clamp(72px, 10vw, 160px) clamp(20px, 4.5vw, 64px)' }}>
          {[['The challenge', p.challenge], ...(p.audience ? [['Who it was for', p.audience]] : [])].map(([h, v]) => (
            <div key={h}>
              <h2 style={{ font: '700 clamp(24px, 2.6vw, 38px)/1.05 var(--font-sans)', letterSpacing: '-0.03em', color: t.accent }}>{h}</h2>
              <p style={{ font: '400 clamp(17px, 1.45vw, 20px)/1.6 var(--font-sans)', marginTop: 14, maxWidth: '46ch' }}>{v}</p>
            </div>
          ))}
          {sections.map(([h, v]) => (
            <div key={h}>
              <h2 style={{ font: '700 clamp(24px, 2.6vw, 38px)/1.05 var(--font-sans)', letterSpacing: '-0.03em', color: t.accent }}>{h}</h2>
              {typeof v === 'string'
                ? <p style={{ font: '400 clamp(17px, 1.45vw, 20px)/1.6 var(--font-sans)', marginTop: 14, maxWidth: '46ch' }}>{v}</p>
                : <ul style={{ listStyle: 'none', display: 'grid', gap: 10, marginTop: 14, font: '400 clamp(17px, 1.45vw, 20px)/1.5 var(--font-sans)', maxWidth: '46ch' }}>{v.map(i => <li key={i}>{i}</li>)}</ul>}
            </div>
          ))}
        </section>

        <section aria-label="Next" style={{ background: t.accent, color: t.onAccent, padding: 'clamp(48px, 7vw, 110px) 0' }}>
          <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <Link to={`/work/${next.slug}`} className="bw-link" style={{ font: '800 clamp(36px, 6.4vw, 108px)/0.95 var(--font-sans)', letterSpacing: '-0.05em', color: t.onAccent, textDecoration: 'none' }}>Next: {next.title}</Link>
            <p style={{ display: 'flex', gap: 28, font: '600 18px/1 var(--font-sans)', flexWrap: 'wrap' }}>
              <a href="mailto:hello@michaelesema.com" className="bw-link" style={{ color: t.onAccent }}>Contact me</a>
              <Link to="/work" className="bw-link" style={{ color: t.onAccent }}>All work</Link>
              <Link to="/privacy" className="bw-link" style={{ color: t.onAccent }}>Privacy</Link>
            </p>
          </div>
        </section>
      </main>
      <style>{`
        .bw main::before, .bw main::after { display: none; }
        .bw-strip:focus-visible { outline: 3px solid currentColor; outline-offset: 4px; }
        .bw a:focus-visible, .bw button:focus-visible { outline: 3px solid currentColor; outline-offset: 4px; }
        .bw-nav { color: inherit; text-decoration: none; }
        .bw-nav:hover { text-decoration: underline; text-underline-offset: 6px; text-decoration-thickness: 1.5px; }
        .bw-link { text-decoration: underline; text-underline-offset: 6px; text-decoration-thickness: 2px; }
        .bw-btn { font: 600 16px/1 var(--font-sans); height: 44px; padding: 0 22px; background: transparent; color: inherit; border: 2px solid currentColor; border-radius: var(--radius); cursor: pointer; }
        .bw-btn:hover { opacity: 0.8; }
        .bw img, .bw video { max-width: none; }
        @media (max-width: 820px) {
          .bw-over { grid-template-columns: 1fr !important; }
          .bw-over > * { grid-column: 1 / -1 !important; }
          .bw-pair, .bw-palette { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

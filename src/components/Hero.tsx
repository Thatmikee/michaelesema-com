import { useRef, useState } from 'react'

// The portrait holds a second, drawn version of itself. Moving the pointer
// over the photo opens a circle onto the drawing; the button below shows all
// of it, for touch screens and keyboards. Pointer position is written
// straight to CSS variables, so nothing re-renders while the pointer moves.
function Portrait() {
  const box = useRef<HTMLDivElement>(null)
  const [drawn, setDrawn] = useState(false)

  const track = (e: React.PointerEvent) => {
    const el = box.current
    if (!el || e.pointerType === 'touch') return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <div className="hero-photo" style={{ alignSelf: 'end' }}>
      <div ref={box} className={`portrait${drawn ? ' drawn' : ''}`} onPointerMove={track}>
        <img src="/michael-esema-portrait.jpg" alt="Michael Esema" width={1000} height={1249} fetchPriority="high" />
        <img className="portrait-drawn" src="/michael-esema-illustrated.jpg" alt="" aria-hidden="true" width={896} height={1120} loading="lazy" />
      </div>
      <button type="button" className="portrait-toggle" aria-pressed={drawn} onClick={() => setDrawn(d => !d)}>
        {drawn ? 'Show the photograph' : 'Show the drawing'}
      </button>
      <style>{`
        @property --r { syntax: '<length>'; inherits: true; initial-value: 0px; }
        .portrait { position: relative; aspect-ratio: 4 / 5; overflow: hidden; --r: 0px; --x: 50%; --y: 30%; transition: --r 0.5s cubic-bezier(0.16, 1, 0.3, 1); cursor: crosshair; }
        .portrait img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
        .portrait-drawn {
          -webkit-mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), #000 72%, transparent 100%);
          mask-image: radial-gradient(circle var(--r) at var(--x) var(--y), #000 72%, transparent 100%);
        }
        @media (hover: hover) { .portrait:hover { --r: clamp(110px, 13vw, 190px); } }
        .portrait.drawn { --r: 200vmax; }
        .portrait-toggle {
          display: block; margin: 0; padding: 12px 0; background: none; border: 0; cursor: pointer;
          font: 500 15px/1.2 var(--font-sans); color: var(--green); text-decoration: underline; text-underline-offset: 4px;
        }
        .portrait-toggle:hover { color: var(--ink); }
        @media (prefers-reduced-motion: reduce) { .portrait { transition: none; } }
      `}</style>
    </div>
  )
}

// The one bold moment: a field of ledger green with the portrait at its edge.
export default function Hero() {
  return (
    <section aria-label="Introduction" style={{ paddingTop: 72 }}>
      <div className="wrap hero" style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'end', minHeight: 'min(78dvh, 720px)' }}>
        <div style={{ alignSelf: 'center', padding: 'clamp(32px, 5vw, 72px) 0' }}>
          <h1 className="display">Michael Esema</h1>
          <p style={{ font: '500 clamp(24px, 3.4vw, 46px)/1.08 var(--font-sans)', letterSpacing: '-0.03em', color: 'var(--green)', marginTop: 'clamp(10px, 1.2vw, 18px)' }}>
            Graphic and multimedia designer
          </p>
          <p style={{ font: '400 clamp(17px, 1.5vw, 21px)/1.5 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '36ch', marginTop: 'clamp(22px, 2.6vw, 36px)' }}>
            Identities, print, websites and social content, designed for businesses since 2018.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 'clamp(26px, 3vw, 40px)', flexWrap: 'wrap' }}>
            <a href="#work" className="pill pill-solid">See the work</a>
            <a href="mailto:hello@michaelesema.com" className="pill pill-line">Email me</a>
          </div>
        </div>
        <Portrait />
      </div>
      <style>{`
        @media (max-width: 820px) {
          .hero { grid-template-columns: 1fr !important; min-height: 0 !important; }
          .hero-photo { max-width: 340px; }
        }
      `}</style>
    </section>
  )
}

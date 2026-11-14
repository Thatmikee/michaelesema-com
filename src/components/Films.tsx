const FILMS = [
  { id: 'dog', title: 'Lost Dog' },
  { id: 'maybe', title: 'The Maybe' },
  { id: 'oil', title: 'Nigerian Oil, Explained' },
]

export default function Films() {
  return (
    <section id="films" className="section" style={{ scrollMarginTop: 24, background: 'var(--bg-raised)' }}>
      <div className="wrap films" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.6fr', gap: 'clamp(28px, 5vw, 80px)', alignItems: 'start' }}>
        <div>
          <h2 className="h2">Short films</h2>
          <p className="lede">
            Made for Teal Sand Studios, the studio I run. I direct each one: story, look, pacing, captions and final cut.
            The pictures and voices are produced with AI tools to my direction, and the channels are labelled as AI-made.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(10px, 1.4vw, 20px)' }}>
          {FILMS.map(f => (
            <figure key={f.id} style={{ margin: 0 }}>
              <div className="plate" style={{ aspectRatio: '9 / 16' }}>
                <video src={`/work/${f.id}-loop.mp4`} poster={`/work/${f.id}-poster.jpg`} muted loop playsInline autoPlay preload="metadata" aria-label={`${f.title}, silent preview`} />
              </div>
              <figcaption style={{ font: '600 16px/1.3 var(--font-sans)', color: 'var(--ink)', marginTop: 12 }}>{f.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 820px) { .films { grid-template-columns: 1fr !important; } }
        @media (prefers-reduced-motion: reduce) { #films video { display: none; } }
      `}</style>
    </section>
  )
}

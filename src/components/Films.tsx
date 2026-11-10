const FILMS = [
  { id: 'dog', title: 'Lost Dog', sub: 'Wordless, 46 seconds, painted style.' },
  { id: 'maybe', title: 'The Maybe', sub: 'A clay-style parable, 73 seconds, captions cut to the narration.' },
  { id: 'oil', title: 'Nigerian Oil, Explained', sub: 'A one-minute motion diagram of a trade question.' },
]

export default function Films() {
  return (
    <section id="films" className="section" style={{ scrollMarginTop: 80, background: 'var(--bg-raised)' }}>
      <div className="wrap">
        <h2 className="h2">Short films.</h2>
        <div className="films-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 40 }}>
          {FILMS.map(f => (
            <figure key={f.id} style={{ margin: 0 }}>
              <div className="tile" style={{ aspectRatio: '9 / 16' }}>
                <video src={`/work/${f.id}-loop.mp4`} poster={`/work/${f.id}-poster.jpg`} muted loop playsInline autoPlay preload="metadata" aria-label={`${f.title}, silent preview`} />
              </div>
              <figcaption style={{ marginTop: 14 }}>
                <div style={{ font: '600 17px/1.3 var(--font-sans)', color: 'var(--ink)' }}>{f.title}</div>
                <div style={{ font: '400 15px/1.5 var(--font-sans)', color: 'var(--text-secondary)', marginTop: 4 }}>{f.sub}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p style={{ font: '400 15px/1.6 var(--font-sans)', color: 'var(--text-muted)', maxWidth: '68ch', marginTop: 36, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
          Made for Teal Sand Studios, the studio I run. I direct each one: story, look, pacing, captions and final cut.
          The pictures and voices are produced with AI tools to my direction, and the channels are labelled as AI-made.
        </p>
      </div>
      <style>{`
        @media (max-width: 760px) { .films-grid { grid-template-columns: 1fr !important; max-width: 380px; } }
        @media (prefers-reduced-motion: reduce) { #films video { display: none; } }
      `}</style>
    </section>
  )
}

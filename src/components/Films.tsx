const FILMS = [
  { id: 'dog', title: 'Lost Dog', sub: 'Wordless 46-second short in a painted style. Best-performing piece across YouTube, TikTok and Instagram.' },
  { id: 'maybe', title: 'The Maybe', sub: 'A clay-style parable in 73 seconds. Captions set to the narration beat.' },
  { id: 'oil', title: 'Nigerian Oil, Explained', sub: 'A motion explainer that turns a trade question into a one-minute diagram.' },
]

export default function Films() {
  return (
    <section id="films" className="section" style={{ scrollMarginTop: 80, background: 'var(--bg-raised)' }}>
      <div className="wrap">
        <h2 className="h2">Short films for Teal Sand Studios.</h2>
        <p className="lede">
          Vertical pieces for a studio channel I run. On each one I wrote the story, drew the shot list, directed the look,
          cut the edit, and did captions and sound. The frames themselves are generated from my art direction, and the
          channels say so.
        </p>
        <div className="films-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 44 }}>
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
      </div>
      <style>{`
        @media (max-width: 760px) { .films-grid { grid-template-columns: 1fr !important; max-width: 380px; } }
        @media (prefers-reduced-motion: reduce) { #films video { display: none; } }
      `}</style>
    </section>
  )
}

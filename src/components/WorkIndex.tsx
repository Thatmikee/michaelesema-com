import { Link } from 'react-router-dom'
import { PROJECTS } from '../work'

// Four pieces, one image each. Widths and sides vary so the page has a
// rhythm: full, right, left, full.
const PLACE = [
  { col: '1 / 13', ratio: '16 / 10' },
  { col: '5 / 13', ratio: '16 / 10' },
  { col: '1 / 9', ratio: '16 / 10' },
  { col: '2 / 12', ratio: '16 / 9' },
]

export default function WorkIndex() {
  const items = PROJECTS.filter(p => p.home)
  return (
    <section id="work" className="wrap" style={{ scrollMarginTop: 24, paddingTop: 'clamp(56px, 7vw, 110px)', paddingBottom: 'clamp(40px, 5vw, 80px)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 'clamp(12px, 1.6vw, 24px)', rowGap: 'clamp(56px, 8vw, 130px)' }}>
      {items.map((p, i) => {
        const at = PLACE[i % PLACE.length]
        return (
          <Link key={p.slug} to={`/work/${p.slug}`} className="work-item" style={{ gridColumn: at.col, textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="plate" style={{ aspectRatio: at.ratio }}>
              <img src={p.cover.src} alt={p.cover.alt} loading={i === 0 ? 'eager' : 'lazy'}
                style={p.cover.fit === 'contain' ? { objectFit: 'contain', padding: '7%', background: 'var(--paper)', border: '1px solid var(--border)' } : { objectPosition: 'top' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, marginTop: 18, flexWrap: 'wrap' }}>
              <h2 className="work-title" style={{ font: '700 clamp(24px, 3vw, 40px)/1.05 var(--font-sans)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>{p.title}</h2>
              <p className="label">{p.discipline}</p>
            </div>
          </Link>
        )
      })}
      <style>{`
        .work-item { position: relative; }
        .work-item:hover .work-title { text-decoration: underline; text-underline-offset: 7px; text-decoration-thickness: 2px; }
        @media (max-width: 760px) { .work-item { grid-column: 1 / -1 !important; } .work-item .plate { aspect-ratio: 4 / 3 !important; } }
      `}</style>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { PROJECTS } from '../work'

// The first project runs full width; the rest sit two to a row.
export default function WorkIndex() {
  return (
    <section id="work" style={{ scrollMarginTop: 76, paddingBottom: 'clamp(64px, 8vw, 120px)' }}>
      <div className="wrap work-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px, 3.4vw, 56px) clamp(16px, 2vw, 28px)' }}>
        {PROJECTS.map((p, i) => (
          <Link key={p.slug} to={`/work/${p.slug}`} className="work-card" style={{ gridColumn: i === 0 ? '1 / -1' : undefined, textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="plate" style={{ aspectRatio: i === 0 ? '21 / 10' : '4 / 3' }}>
              <img src={p.cover.src} alt={p.cover.alt} loading={i === 0 ? 'eager' : 'lazy'}
                style={p.cover.fit === 'contain' ? { objectFit: 'contain', padding: '9%', background: '#ffffff' } : { objectPosition: 'top' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
              <h2 className="work-title" style={{ font: '500 clamp(20px, 2vw, 26px)/1.2 var(--font-sans)', letterSpacing: '-0.02em', color: 'var(--ink)' }}>{p.title}</h2>
              <span style={{ font: '400 15px/1.3 var(--font-sans)', color: 'var(--text-muted)' }}>{p.discipline}</span>
            </div>
            <p style={{ font: '400 16px/1.5 var(--font-sans)', color: 'var(--text-secondary)', marginTop: 6, maxWidth: '56ch' }}>{p.summary}</p>
          </Link>
        ))}
      </div>
      <style>{`
        .work-card .plate img { transition: transform 0.8s var(--ease-out); }
        .work-card:hover .plate img { transform: scale(1.02); }
        .work-card:hover .work-title { text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 1px; }
        @media (max-width: 760px) { .work-grid { grid-template-columns: 1fr !important; } .work-grid .plate { aspect-ratio: 4 / 3 !important; } }
        @media (prefers-reduced-motion: reduce) { .work-card:hover .plate img { transform: none; } }
      `}</style>
    </section>
  )
}

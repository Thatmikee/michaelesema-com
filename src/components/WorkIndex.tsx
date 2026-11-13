import { Link } from 'react-router-dom'
import { PROJECTS } from '../work'

// Each project: a large cover on one side, a smaller offset stack on the
// other. Sides alternate, and each project carries its own channel colour.
export default function WorkIndex() {
  return (
    <section id="work" style={{ scrollMarginTop: 76 }}>
      {PROJECTS.map((p, i) => {
        const flip = i % 2 === 1
        const side = p.shots.slice(0, 3)
        return (
          <article key={p.slug} data-channel={p.channel} className="wrap proj" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', columnGap: 'clamp(12px, 1.6vw, 24px)', padding: 'clamp(48px, 7vw, 110px) clamp(18px, 4vw, 56px)', borderTop: '1px solid var(--border)' }}>
            <header className="proj-head" style={{ gridColumn: flip ? '6 / 13' : '1 / 8', gridRow: 1, marginBottom: 'clamp(20px, 3vw, 40px)' }}>
              <p className="label">{p.discipline} <span style={{ color: 'var(--text-muted)' }}>/ {p.years}</span></p>
              <h2 className="display" style={{ fontSize: 'clamp(30px, 5.4vw, 84px)', marginTop: 12 }}>
                <Link to={`/work/${p.slug}`} className="proj-title" style={{ color: 'inherit', textDecoration: 'none' }}>{p.title}</Link>
              </h2>
            </header>

            <Link to={`/work/${p.slug}`} className="plate proj-cover" aria-label={`${p.title}: view project`} style={{ gridColumn: flip ? '5 / 13' : '1 / 9', gridRow: 2, aspectRatio: '16 / 10', display: 'block' }}>
              <img src={p.cover.src} alt={p.cover.alt} loading={i === 0 ? 'eager' : 'lazy'}
                style={p.cover.fit === 'contain' ? { objectFit: 'contain', padding: '10%', background: '#ffffff' } : { objectPosition: 'top' }} />
            </Link>

            <div className="proj-side" style={{ gridColumn: flip ? '1 / 5' : '9 / 13', gridRow: 2, display: 'grid', gap: 'clamp(12px, 1.6vw, 24px)', alignContent: 'start', marginTop: 'clamp(28px, 6vw, 96px)' }}>
              <p style={{ font: '400 clamp(16px, 1.3vw, 18px)/1.55 var(--font-sans)', color: 'var(--text-secondary)' }}>{p.summary}</p>
              <p><Link to={`/work/${p.slug}`} className="text-link">View project</Link></p>
              {side.map((s, k) => (
                <div key={s.src} className="plate" style={{ aspectRatio: k === 0 ? '1 / 1' : '4 / 3', width: k === 1 ? '72%' : '100%', justifySelf: k === 1 ? (flip ? 'start' : 'end') : undefined }}>
                  <img src={s.src} alt={s.alt} loading="lazy" style={s.fit === 'contain' ? { objectFit: 'contain', background: '#ffffff' } : { objectPosition: 'top' }} />
                </div>
              ))}
            </div>
          </article>
        )
      })}
      <style>{`
        .proj-cover img { transition: transform 0.9s var(--ease-out); }
        .proj-cover:hover img { transform: scale(1.025); }
        .proj-title:hover { color: var(--accent) !important; }
        @media (max-width: 820px) {
          .proj > * { grid-column: 1 / -1 !important; grid-row: auto !important; }
          .proj-side { margin-top: 20px !important; grid-template-columns: 1fr 1fr; }
          .proj-side > p { grid-column: 1 / -1; }
          .proj-side .plate { width: 100% !important; aspect-ratio: 1 / 1 !important; }
        }
        @media (prefers-reduced-motion: reduce) { .proj-cover:hover img { transform: none; } }
      `}</style>
    </section>
  )
}

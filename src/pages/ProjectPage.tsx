import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Connect from '../components/Connect'
import Footer from '../components/Footer'
import NotFoundPage from './NotFoundPage'
import { PROJECTS, bySlug } from '../work'

export default function ProjectPage() {
  const { slug } = useParams()
  const p = bySlug(slug)
  if (!p) return <NotFoundPage />
  const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length]
  const title = `${p.title} | Michael Esema`
  const facts: [string, string][] = [['Role', p.role], ['Discipline', p.discipline], ['Years', p.years]]

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={p.summary} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={p.summary} />
        <meta property="og:url" content={`https://michaelesema.com/work/${p.slug}`} />
      </Helmet>
      <Nav />
      <main id="main-content" style={{ paddingTop: 'clamp(110px, 12vw, 160px)' }}>
        <article className="wrap">
          <p className="label">{p.discipline}</p>
          <h1 className="display" style={{ marginTop: 10 }}>{p.title}</h1>

          <div className="proj-head" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(28px, 5vw, 80px)', marginTop: 'clamp(32px, 4vw, 56px)', paddingTop: 24, borderTop: '1px solid var(--border-mid)' }}>
            <dl style={{ display: 'grid', gap: 14, alignContent: 'start', font: '400 16px/1.45 var(--font-sans)' }}>
              {facts.map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12 }}>
                  <dt style={{ color: 'var(--text-muted)' }}>{k}</dt>
                  <dd style={{ color: 'var(--ink)' }}>{v}</dd>
                </div>
              ))}
              {p.link && (
                <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 12 }}>
                  <dt style={{ color: 'var(--text-muted)' }}>Live</dt>
                  <dd><a href={p.link.href} target="_blank" rel="noopener noreferrer" className="text-link">{p.link.label}</a></dd>
                </div>
              )}
            </dl>
            <div style={{ display: 'grid', gap: 18, font: '400 clamp(17px, 1.45vw, 20px)/1.6 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '62ch' }}>
              {p.body.map(t => <p key={t.slice(0, 24)}>{t}</p>)}
            </div>
          </div>

          <div className="plate" style={{ aspectRatio: p.cover.ratio, marginTop: 'clamp(40px, 6vw, 80px)' }}>
            <img src={p.cover.src} alt={p.cover.alt}
              style={p.cover.fit === 'contain' ? { objectFit: 'contain', padding: '8%', background: 'var(--paper)', border: '1px solid var(--border)' } : { objectPosition: 'top' }} />
          </div>

          {/scene|board|merch/.test(p.cover.src) && (
            <p className="label" style={{ marginTop: 12 }}>Pieces photographed in a setting are mock-ups. The artwork is mine; the settings are generated.</p>
          )}

          {p.shots.length > 0 && (
            <div className="proj-shots" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px, 1.6vw, 24px)', marginTop: 'clamp(12px, 1.6vw, 24px)' }}>
              {p.shots.map(s => (
                <div key={s.src} className="plate" title={/scene|board|merch/.test(s.src) ? 'Mock-up: my artwork on a generated setting' : undefined} style={{ aspectRatio: s.ratio, gridColumn: s.span === 2 ? '1 / -1' : undefined, maxWidth: s.span === 2 && s.fit === 'contain' ? 760 : undefined, justifySelf: s.span === 2 && s.fit === 'contain' ? 'center' : undefined, width: '100%' }}>
                  <img src={s.src} alt={s.alt} loading="lazy" style={s.fit === 'contain' ? { objectFit: 'contain', background: s.src.includes('mobile') ? 'var(--bg-raised)' : 'var(--paper)', padding: s.src.includes('mobile') ? '6%' : 0 } : { objectPosition: 'top' }} />
                </div>
              ))}
            </div>
          )}

          <p style={{ margin: 'clamp(48px, 7vw, 96px) 0', paddingTop: 24, borderTop: '1px solid var(--border-mid)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', font: '400 17px/1.4 var(--font-sans)' }}>
            <Link to="/#work" className="text-link">All work</Link>
            <Link to={`/work/${next.slug}`} className="text-link">Next: {next.title}</Link>
          </p>
        </article>
        <Connect />
      </main>
      <Footer />
      <style>{`@media (max-width: 760px) { .proj-head { grid-template-columns: 1fr !important; } .proj-shots { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}

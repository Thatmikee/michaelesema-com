export default function Hero() {
  return (
    <section aria-label="Introduction" style={{ paddingTop: 'clamp(120px, 16vw, 200px)', paddingBottom: 'clamp(40px, 6vw, 72px)' }}>
      <div className="wrap">
        <h1 style={{ font: '400 clamp(34px, 6.2vw, 92px)/1.04 var(--font-sans)', letterSpacing: '-0.04em', color: 'var(--ink)', maxWidth: '17ch' }}>
          Michael Esema
          <span style={{ color: 'var(--text-muted)' }}> is a graphic and multimedia designer working in brand, print, web and film.</span>
        </h1>
        <div className="hero-foot" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 'clamp(20px, 3vw, 40px)', alignItems: 'center', marginTop: 'clamp(40px, 6vw, 80px)', paddingTop: 24, borderTop: '1px solid var(--border-mid)' }}>
          <img src="/michael-esema-portrait.jpg" alt="Michael Esema" width={1000} height={1249} fetchPriority="high"
            style={{ width: 84, height: 84, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 12%' }} />
          <p style={{ font: '400 clamp(16px, 1.35vw, 19px)/1.55 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '54ch' }}>
            Designing since 2018. Trained as an accountant, which shapes how I plan and cost a job.
          </p>
          <a href="mailto:hello@michaelesema.com" className="pill pill-solid">Get in touch</a>
        </div>
      </div>
      <style>{`@media (max-width: 700px) { .hero-foot { grid-template-columns: auto 1fr !important; } .hero-foot .pill { grid-column: 1 / -1; justify-self: start; } }`}</style>
    </section>
  )
}

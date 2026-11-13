export default function Process() {
  return (
    <section id="process" className="section" style={{ scrollMarginTop: 76, background: 'var(--bg-raised)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(28px, 5vw, 80px)' }} data-grid="process">
        <h2 className="h2">How I got here.</h2>
        <div style={{ font: '400 clamp(16px, 1.4vw, 19px)/1.65 var(--font-sans)', color: 'var(--text-secondary)', display: 'grid', gap: 20, maxWidth: '62ch' }}>
          <p>
            I have been designing since 2018, when I became design lead, part-time, for Silent Party 9ja, an events
            brand in Nigeria. From 2019 I was also Head Accountant at B's Hive Hotels &amp; Suites in Abuja, where I
            designed the logo and letterhead, made the promotions and ran the social media, and later managed the business.
          </p>
          <p>
            I then founded a security start-up, filed a UK patent application and designed its brand, website and
            publication. I hold Lean Six Sigma. So I can plan a project and keep it on budget as well as make the work.
          </p>
          <p>Since moving to the UK I have kept designing for small businesses, without charge.</p>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { [data-grid="process"] { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

export default function Process() {
  return (
    <section id="process" className="section" style={{ scrollMarginTop: 80, background: 'var(--bg-raised)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 80px)' }} data-grid="process">
        <div>
          <h2 className="h2">How I got here.</h2>
        </div>
        <div style={{ font: '400 clamp(16px, 1.4vw, 19px)/1.65 var(--font-sans)', color: 'var(--text-secondary)', display: 'grid', gap: 20, alignSelf: 'center' }}>
          <p>
            I have been designing since 2018, when I began working part-time with Silent Party 9ja, an events brand
            in Nigeria. From 2019 I was also running the numbers as Head Accountant at B's Hive Hotel in Abuja, where
            I was also the main graphic designer and ran the social media, and later managed the business.
          </p>
          <p>
            As manager I ran a multi-department business, its suppliers and its staff. I founded a security
            start-up, filed a UK patent application and designed its brand, website and publication. I hold Lean Six Sigma. So I can
            run a project, keep it on budget and still be the one who makes the work.
          </p>
          <p>
            Since moving to the UK I have kept designing for small businesses, without charge.
          </p>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { [data-grid="process"] { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

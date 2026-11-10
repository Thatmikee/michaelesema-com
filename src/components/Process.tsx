export default function Process() {
  return (
    <section id="process" className="section" style={{ scrollMarginTop: 80, background: 'var(--bg-raised)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 80px)' }} data-grid="process">
        <div>
          <h2 className="h2">Trained in the numbers. Working in the visuals.</h2>
        </div>
        <div style={{ font: '400 clamp(16px, 1.4vw, 19px)/1.65 var(--font-sans)', color: 'var(--text-secondary)', display: 'grid', gap: 20, alignSelf: 'center' }}>
          <p>
            I have been designing since 2018, when I began working part-time with Silent Party 9ja, an events brand
            in Nigeria. From 2019 I was also running the numbers as Head Accountant at B's Hive Hotel in Abuja, where
            I led the graphics, promotions and social media as well, and later managed the business.
          </p>
          <p>
            As manager I ran a multi-department business, its suppliers and its staff. I co-founded a security
            start-up, filed a UK patent application and designed everything it put in front of people. I hold Lean Six Sigma. So I can
            run a project, keep it on budget and still be the one who makes the work.
          </p>
          <p>
            That is the balance: design that answers to a brief, and management that respects the craft. Since moving to
            the UK I have kept designing for small businesses, without charge, to keep the portfolio real.
          </p>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { [data-grid="process"] { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

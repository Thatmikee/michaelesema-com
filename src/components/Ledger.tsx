// The degrees, entered like a ledger: what was studied on the left, what it
// does in the design work on the right, and where to see it.
const ROWS = [
  {
    year: '2018', award: 'BSc (Hons) Accounting', school: 'Benson Idahosa University',
    does: 'Numbers people can read at a glance. Price lists, menus and data figures set so the eye finds what matters first.',
    see: 'Sarah Bellus menu, The Signal data figures',
  },
  {
    year: '2022', award: 'Master of Business Administration', school: 'Nigerian Defence Academy',
    does: 'I ask who the customer is, what the business sells and what it can afford, then design the identity that answers that.',
    see: 'Sarah Bellus identity, mykei.io',
  },
  {
    year: '2024', award: 'MSc International Business Management, Merit', school: 'Manchester Metropolitan University',
    does: 'Design that travels. Work made for Nigerian and British audiences at once, without either one feeling translated.',
    see: 'Sarah Bellus, Silent Party 9ja, the short films',
  },
  {
    year: '2025', award: 'Lean Six Sigma', school: 'Certification',
    does: 'Templates, type scales and a single colour file, so the tenth piece is as consistent as the first.',
    see: 'The Signal issue system, the colour file behind mykei.io',
  },
]

export default function Ledger() {
  return (
    <section id="qualifications" data-channel="cyan" className="section" style={{ scrollMarginTop: 76 }}>
      <div className="wrap">
        <h2 className="h2">What the degrees do in the work.</h2>
        <p className="lede">
          I did not study design at university. I studied how businesses run, and I have designed for them the whole time.
          Here is what each qualification is worth on a design job.
        </p>
        <div style={{ marginTop: 40, borderTop: '1px solid var(--border-mid)' }}>
          {ROWS.map((r, i) => (
            <div key={r.award} className="ledger-row" style={{
              display: 'grid', gridTemplateColumns: '72px 1fr 1.5fr', gap: 'clamp(16px, 3vw, 48px)',
              padding: 'clamp(22px, 3vw, 34px) 0', borderTop: i ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ font: '500 15px/1.5 var(--font-mono)', color: 'var(--accent)' }}>{r.year}</div>
              <div>
                <h3 style={{ font: '600 clamp(18px, 1.7vw, 22px)/1.25 var(--font-sans)', letterSpacing: '-0.01em', color: 'var(--ink)' }}>{r.award}</h3>
                <p style={{ font: '400 15px/1.5 var(--font-sans)', color: 'var(--text-muted)', marginTop: 4 }}>{r.school}</p>
              </div>
              <div>
                <p style={{ font: '400 clamp(15px, 1.3vw, 17px)/1.6 var(--font-sans)', color: 'var(--text-secondary)' }}>{r.does}</p>
                <p style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--text-muted)', marginTop: 10 }}>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>See it in: </span>{r.see}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .ledger-row { grid-template-columns: 1fr !important; gap: 8px !important; } }`}</style>
    </section>
  )
}

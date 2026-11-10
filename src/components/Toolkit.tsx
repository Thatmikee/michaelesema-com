const TOOLS = ['Photoshop', 'Illustrator', 'InDesign', 'Figma', 'Canva', 'CapCut', 'Blender']
const CREDS = [
  ['2024', 'MSc International Business Management, Merit', 'Manchester Metropolitan University'],
  ['2022', 'Master of Business Administration', 'Nigerian Defence Academy'],
  ['2018', 'BSc (Hons) Accounting', 'Benson Idahosa University'],
  ['2025', 'Lean Six Sigma certification', ''],
]

export default function Toolkit() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 80px)' }} data-grid="toolkit">
        <div>
          <h2 className="h2" style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>Tools</h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
            {TOOLS.map(t => (
              <li key={t} className="glass" style={{ padding: '10px 16px', borderRadius: 999, font: '500 15px/1 var(--font-sans)', color: 'var(--ink)' }}>{t}</li>
            ))}
          </ul>
          <p style={{ font: '400 15px/1.55 var(--font-sans)', color: 'var(--text-muted)', marginTop: 20, maxWidth: '40ch' }}>
            Plus React and CSS for building what I design.
          </p>
        </div>
        <div>
          <h2 className="h2" style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>Qualifications</h2>
          <ol style={{ listStyle: 'none', marginTop: 24, display: 'grid', gap: 14 }}>
            {CREDS.map(([y, n, s]) => (
              <li key={n} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 12, font: '400 16px/1.45 var(--font-sans)' }}>
                <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 14, paddingTop: 2 }}>{y}</span>
                <span>
                  <span style={{ color: 'var(--ink)', fontWeight: 500 }}>{n}</span>
                  {s && <span style={{ display: 'block', color: 'var(--text-secondary)' }}>{s}</span>}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <style>{`@media (max-width: 760px) { [data-grid="toolkit"] { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

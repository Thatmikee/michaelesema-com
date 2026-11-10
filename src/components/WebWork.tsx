// One wide lead tile and two halves: three items, three cells.
type Item = { title: string; kind: string; body: string; img: string; alt: string; href?: string }

const LEAD: Item = {
  title: 'The Signal', kind: 'Editorial design system', href: 'https://mykei.io/signal',
  body: 'Masthead, issue numbering, data figures and a corrections policy for a retail-crime publication. White ground, one red, nothing decorative.',
  img: '/work/signal-screen.jpg', alt: 'The Signal front page with a red masthead and cover story',
}
const PAIR: Item[] = [
  {
    title: 'Silent Party 9ja', kind: 'Brand and booking site',
    body: 'A silent-disco brand I worked with part-time from 2018 to 2023. In the new identity each channel owns a colour and only one is live at a time.',
    img: '/work/sp9ja-screen.jpg', alt: 'Silent Party 9ja homepage: the loudest night you will never hear',
  },
  {
    title: 'mykei.io', kind: 'Company identity and website', href: 'https://mykei.io',
    body: 'Brand and site for a security start-up I co-founded. Nine colours, all from one file, all passing contrast checks.',
    img: '/work/mykei-securities-site.png', alt: 'The mykei.io homepage',
  },
]

function Caption({ it }: { it: Item }) {
  return (
    <div style={{ padding: 'clamp(20px, 2.6vw, 32px)' }}>
      <div style={{ font: '500 14px/1.3 var(--font-sans)', color: 'var(--accent)' }}>{it.kind}</div>
      <h3 style={{ font: '600 clamp(22px, 2.4vw, 30px)/1.15 var(--font-sans)', letterSpacing: '-0.02em', color: 'var(--ink)', marginTop: 8 }}>{it.title}</h3>
      <p style={{ font: '400 16px/1.55 var(--font-sans)', color: 'var(--text-secondary)', marginTop: 10, maxWidth: '52ch' }}>{it.body}</p>
      {it.href && <span className="text-link" style={{ display: 'inline-block', marginTop: 14, fontSize: 15 }}>Open site</span>}
    </div>
  )
}

export default function WebWork() {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="h2">Websites and editorial.</h2>

        <a href={LEAD.href} target="_blank" rel="noopener noreferrer" className="tile" style={{ display: 'block', textDecoration: 'none', marginTop: 44 }}>
          <div style={{ aspectRatio: '21 / 9', overflow: 'hidden' }}>
            <img src={LEAD.img} alt={LEAD.alt} loading="lazy" style={{ objectPosition: 'top' }} />
          </div>
          <Caption it={LEAD} />
        </a>

        <div className="ww-pair" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
          {PAIR.map(it => {
            const inner = (
              <>
                <div style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  <img src={it.img} alt={it.alt} loading="lazy" style={{ objectPosition: 'top left' }} />
                </div>
                <Caption it={it} />
              </>
            )
            return it.href
              ? <a key={it.title} href={it.href} target="_blank" rel="noopener noreferrer" className="tile" style={{ display: 'block', textDecoration: 'none' }}>{inner}</a>
              : <div key={it.title} className="tile">{inner}</div>
          })}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .ww-pair { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

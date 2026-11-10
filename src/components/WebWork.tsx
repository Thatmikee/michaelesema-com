const ITEMS = [
  {
    title: 'Silent Party 9ja', kind: 'Brand and website concept',
    body: 'A silent-disco night: three channels, one colour each. Logo, type and a booking site built around a channel dial.',
    img: '/work/sp9ja-screen.jpg', alt: 'Silent Party 9ja homepage: the loudest night you will never hear',
  },
  {
    title: 'The Signal', kind: 'Editorial design system', href: 'https://mykei.io/signal',
    body: 'Masthead, issue numbering, data figures and a corrections policy for a retail-crime publication. White ground, one red.',
    img: '/work/signal-screen.jpg', alt: 'The Signal front page with a red masthead and cover story',
  },
  {
    title: 'mykei.io', kind: 'Company site and identity', href: 'https://mykei.io',
    body: 'Brand, product pages and a long-form reading layout for a security start-up I co-founded. Every colour sourced from one token file.',
    img: '/work/mykei-securities-site.png', alt: 'The mykei.io homepage',
  },
]

export default function WebWork() {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="h2">Websites and editorial.</h2>
        <p className="lede">Designed in Figma, then built and shipped by me, so what you see in the mock-up is what goes live.</p>
        <div style={{ display: 'grid', gap: 16, marginTop: 44 }}>
          {ITEMS.map((it, i) => {
            const Tag = it.href ? 'a' : 'div'
            return (
              <Tag key={it.title} href={it.href} target={it.href ? '_blank' : undefined} rel={it.href ? 'noopener noreferrer' : undefined}
                className="tile ww-row" style={{ display: 'grid', gridTemplateColumns: i % 2 ? '1fr 1.3fr' : '1.3fr 1fr', textDecoration: 'none', minHeight: 320 }}>
                <div style={{ order: i % 2 ? 2 : 1, overflow: 'hidden' }}>
                  <img src={it.img} alt={it.alt} loading="lazy" style={{ objectPosition: 'top left' }} />
                </div>
                <div style={{ order: i % 2 ? 1 : 2, padding: 'clamp(24px, 3vw, 40px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ font: '500 14px/1.3 var(--font-sans)', color: 'var(--accent)' }}>{it.kind}</div>
                  <h3 style={{ font: '600 clamp(22px, 2.4vw, 30px)/1.15 var(--font-sans)', letterSpacing: '-0.02em', color: 'var(--ink)', marginTop: 10 }}>{it.title}</h3>
                  <p style={{ font: '400 16px/1.55 var(--font-sans)', color: 'var(--text-secondary)', marginTop: 12, maxWidth: '44ch' }}>{it.body}</p>
                  {it.href && <span className="text-link" style={{ marginTop: 18, fontSize: 15 }}>Open site</span>}
                </div>
              </Tag>
            )
          })}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .ww-row { grid-template-columns: 1fr !important; } .ww-row > div { order: initial !important; } .ww-row img { max-height: 240px; } }`}</style>
    </section>
  )
}

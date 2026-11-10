// Sarah Bellus: the full identity, applied across print, product and web.
export default function CaseStudy() {
  return (
    <section id="work" className="section" style={{ scrollMarginTop: 80 }}>
      <div className="wrap">
        <h2 className="h2">Sarah Bellus. One mark, every surface.</h2>
        <p className="lede">
          A Nigerian caterer in Manchester needed to look as good as the food. I drew the SiB monogram with a
          serving spoon for the dot of the i, then carried it through the menu, packaging stickers and the website.
        </p>

        <div className="cs-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: 'auto auto', gap: 16, marginTop: 44 }}>
          <a href="https://sarahbellus.com" target="_blank" rel="noopener noreferrer" className="tile" style={{ gridRow: 'span 2', aspectRatio: '16 / 11' }}>
            <img src="/work/sb-screen.jpg" alt="sarahbellus.com homepage with the enquiry call to action and a plate of jollof rice" loading="lazy" />
          </a>
          <div className="tile" style={{ aspectRatio: '1 / 1' }}>
            <img src="/work/sarahbellus-logo-on-aubergine.jpg" alt="The SiB monogram in cream on aubergine" loading="lazy" />
          </div>
          <div className="tile" style={{ aspectRatio: '1 / 1' }}>
            <img src="/work/sarahbellus-efo-riro-branded.webp" alt="A branded container of efo riro with the SiB sticker" loading="lazy" />
          </div>
        </div>

        <div className="cs-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16, alignItems: 'stretch' }}>
          <div className="tile" style={{ aspectRatio: '4 / 5', maxHeight: 560 }}>
            <img src="/work/sarahbellus-menu-poster.jpg" alt="The printed Sarah Bellus menu" loading="lazy" style={{ objectPosition: 'top' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(8px, 2vw, 24px)' }}>
            <dl style={{ display: 'grid', gap: 22, font: '400 16px/1.55 var(--font-sans)', color: 'var(--text-secondary)' }}>
              {[
                ['Brief', 'A name people could trust before they tasted anything, usable on a phone screen and on a sticker the size of a coin.'],
                ['Identity', 'Monogram, wordmark, aubergine and cream palette, Figtree for everything set in type.'],
                ['Delivered', 'Logo set, A4 menu, packaging labels, social templates and a four-page website with an enquiry form.'],
                ['Tools', 'Illustrator, InDesign, Photoshop, Figma, then built by hand in React.'],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt style={{ color: 'var(--ink)', fontWeight: 600, marginBottom: 4 }}>{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
            <a href="https://sarahbellus.com" target="_blank" rel="noopener noreferrer" className="text-link" style={{ marginTop: 28, fontSize: 16 }}>Visit sarahbellus.com</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .cs-grid { grid-template-columns: 1fr 1fr !important; }
          .cs-grid > a { grid-column: span 2; grid-row: auto !important; }
          .cs-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

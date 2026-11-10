// Sarah Bellus: one identity carried across web, mark, photography and print.
const FACTS = [
  ['Brief', 'A name people could trust before they tasted anything, usable on a phone screen and on a sticker the size of a coin.'],
  ['Identity', 'Monogram, wordmark, and a palette of aubergine, cream and one orange taken from the jollof.'],
  ['Delivered', 'Logo set on three grounds, a printed menu, branded food photography and a website with an enquiry form.'],
  ['Tools', 'Illustrator, InDesign, Photoshop and Figma, then built in React.'],
]

export default function CaseStudy() {
  return (
    <section id="work" className="section" style={{ scrollMarginTop: 80 }}>
      <div className="wrap">
        <h2 className="h2">Sarah Bellus. One mark, every surface.</h2>
        <p className="lede">
          A Nigerian caterer in the UK needed to look as good as the food. I drew the SiB monogram with a
          serving spoon for the dot of the i, then carried it through the menu, the food photography and the website.
        </p>

        <a href="https://sarahbellus.com" target="_blank" rel="noopener noreferrer" className="tile" style={{ display: 'block', aspectRatio: '16 / 9', marginTop: 44 }}>
          <img src="/work/sb-screen.jpg" alt="sarahbellus.com homepage with the enquiry button and a plate of jollof rice" loading="lazy" style={{ objectPosition: 'top' }} />
        </a>

        <div className="cs-trio" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginTop: 16 }}>
          <div className="tile" style={{ aspectRatio: '4 / 5' }}>
            <img src="/work/sarahbellus-logo-on-aubergine.jpg" alt="The SiB monogram in cream on aubergine" loading="lazy" />
          </div>
          <div className="tile" style={{ aspectRatio: '4 / 5' }}>
            <img src="/work/sarahbellus-efo-riro-branded.webp" alt="A bowl of efo riro, photographed and marked with the SiB logo" loading="lazy" />
          </div>
          <div className="tile" style={{ aspectRatio: '4 / 5' }}>
            <img src="/work/sarahbellus-menu-poster.jpg" alt="The printed Sarah Bellus menu" loading="lazy" style={{ objectPosition: 'top' }} />
          </div>
        </div>

        <dl className="cs-facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(20px, 3vw, 40px)', marginTop: 40, font: '400 15px/1.6 var(--font-sans)', color: 'var(--text-secondary)' }}>
          {FACTS.map(([t, d]) => (
            <div key={t} style={{ borderTop: '1px solid var(--border-mid)', paddingTop: 16 }}>
              <dt style={{ color: 'var(--ink)', fontWeight: 600, marginBottom: 6 }}>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
        <p style={{ marginTop: 28 }}>
          <a href="https://sarahbellus.com" target="_blank" rel="noopener noreferrer" className="text-link" style={{ fontSize: 16 }}>Visit sarahbellus.com</a>
        </p>
      </div>
      <style>{`
        @media (max-width: 900px) { .cs-facts { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) {
          .cs-trio { grid-template-columns: 1fr 1fr !important; }
          .cs-trio > :last-child { grid-column: span 2; aspect-ratio: 4 / 3 !important; }
          .cs-facts { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

import { lazy, Suspense, type CSSProperties, type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../work'
import Crumbs from './Crumbs'
import GlassWord from './GlassWord'
import { FLIP } from './layout'
import { useMedia } from './motion'

// One reveal, used on Home, Blog and About: a line of text slides up out of a
// mask. It is a CSS animation, so it starts at first paint with no JavaScript; the
// intro holds it (html.sx-held pauses it) until the curtain lifts.
function Mask({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="sx-mask">
      <span className="sx-up" style={{ '--d': `${delay}s` } as CSSProperties}>{children}</span>
    </span>
  )
}

// The dark panel under the wordmark. It carries no instruction of any kind: visitors work
// the page out for themselves. Only the legal link lives here.
function Stage() {
  return (
    <div className="sx-stage2">
      <Link to="/privacy" className="sx-legal">Privacy</Link>
    </div>
  )
}

function Meta({ title, desc, path, noindex }: { title: string; desc: string; path: string; noindex?: boolean }) {
  return (
    <Helmet>
      <title>{title}</title>
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`https://michaelesema.com${path}`} />
    </Helmet>
  )
}

export function Home() {
  const small = useMedia('(max-width: 700px)')
  const coarse = useMedia('(pointer: coarse)')
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main sx-home">
      <Meta title="Michael Esema | Graphic & Multimedia Designer & Business Strategist" desc="Portfolio of Michael Esema, a UK graphic and multimedia designer and business strategist. Brand identity, print and web design." path="/" />
      <div className="sx-top">
      <p className="sx-head"><Mask>Graphic &amp; Multimedia</Mask><Mask delay={0.08}>Designer and</Mask><Mask delay={0.16}>Business Strategist</Mask></p>
      <p className="sx-para"><Mask delay={0.24}>Brands, print and websites for hotels, caterers, events and publishers. I'm an accountant who became a designer: I ran a hotel's books and its brand, so everything I make is checked against the numbers.</Mask></p>
      <h1 className="sx-h1"><span className="sx-sr">Michael Esema</span><Mask delay={0.36}><GlassWord lines={['Esema']} auto={small || coarse} align={FLIP ? 'right' : 'left'} /></Mask><span className="sx-aside" aria-hidden="true">I am Michael</span></h1>
      </div>
      <Stage />
    </main>
  )
}

export function Blog() {
  const small = useMedia('(max-width: 700px)')
  const coarse = useMedia('(pointer: coarse)')
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main sx-home">
      <Meta title="Blog, coming soon | Michael Esema" desc="Notes on design and business from Michael Esema. The first articles are on their way." path="/blog" noindex />
      <div className="sx-top">
      <p className="sx-head"><Mask>Blog</Mask><Mask delay={0.08}>Coming soon</Mask></p>
      <p className="sx-para"><Mask delay={0.16}>Notes on design, business and the way the two meet. The first articles are on their way.</Mask></p>
      <h1 className="sx-h1"><span className="sx-sr">Blog, coming soon</span><Mask delay={0.28}><GlassWord lines={small ? ['Coming', 'Soon'] : ['Coming Soon']} auto={small || coarse}  align={FLIP ? 'right' : 'left'} /></Mask></h1>
      </div>
      <Stage />
    </main>
  )
}

const pad = (n: number) => String(n).padStart(2, '0')

function WorkStack() {
  return (
    <ol className="sx-stack">
      {PROJECTS.map((q, i) => (
        <li key={q.slug}>
          <span className="n" aria-hidden="true">{pad(i + 1)}</span>
          <Link to={`/work/${q.slug}`} className="pic" aria-label={`View ${q.title}`}><img src={q.cover.src} alt={q.cover.alt} loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : undefined} decoding="async" /></Link>
          <h2>{q.title}</h2>
          <p>{q.summary}</p>
        </li>
      ))}
    </ol>
  )
}

// The desktop list steps through the projects as you scroll and needs the animation
// library, so it loads on demand; the plain stack shows until it arrives (or if it
// cannot be fetched).
const WorkWide = lazy(() => import('./WorkWide').catch(() => ({ default: WorkStack })))

export function Work() {
  const wide = useMedia('(min-width: 1100px)')
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main">
      <Meta title="Work | Michael Esema" desc="Selected design work by Michael Esema: brand identity, print, publication design and websites." path="/work" />
      <h1 className="sx-sr">Selected work</h1>
      {wide ? <Suspense fallback={<WorkStack />}><WorkWide /></Suspense> : <WorkStack />}
    </main>
  )
}

const QUALS: [string, string][] = [
  ['BSc (Hons) Accounting, 2018', 'Benson Idahosa University'],
  ['Master of Business Administration, 2022', 'Nigerian Defence Academy'],
  ['MSc International Business Management, Merit, 2024', 'Manchester Metropolitan University'],
  ['Lean Six Sigma Certification, 2025', ''],
]

export function About() {
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main sx-about">
      <Meta title="About Michael Esema | Graphic and Multimedia Designer" desc="Michael Esema is a graphic and multimedia designer and business strategist in the UK. He trained in accounting and business." path="/about" />
      <h1 className="sx-sr">About Michael Esema</h1>
      <Crumbs here="About" />
      <section className="sx-row"><h2 className="sx-label">Bio</h2>
        <div className="sx-prose">
          <p className="lead"><Mask>I’m Michael Esema, a graphic and multimedia designer and business strategist. I’m based in the UK and I’m from Nigeria.</Mask></p>
          <p>I trained as an accountant, then studied business up to master’s level. I was designing the whole time, and the two never felt separate. Before I open Illustrator I ask what the work is for, who it’s for, and how we’ll know it worked.</p>
        </div>
      </section>
      <section className="sx-row"><h2 className="sx-label">Who it’s for</h2>
        <div className="sx-prose">
          <p>People who run a business, or hire for one, and want design they can justify in numbers. So far that has been a hotel, a caterer, an events brand and a publication.</p>
        </div>
      </section>
      <section className="sx-row"><h2 className="sx-label">Story</h2>
        <div className="sx-prose">
          <p>2018. I finished a BSc in Accounting and became part-time design lead for Silent Party 9ja, an events brand in Nigeria. I ran its visual identity and promotions until February 2023.</p>
          <p>2019. B’s Hive Hotels &amp; Suites in Abuja hired me as Head Accountant. I kept the books. I also designed the hotel’s logo and letterhead, made its promotions and ran its social media. Over time I took on more of the running of the hotel and became Manager.</p>
          <p>2022 and 2024. I did an MBA at the Nigerian Defence Academy, then an MSc in International Business Management at Manchester Metropolitan University. I finished with a Merit. In 2025 I got my Lean Six Sigma certificate.</p>
          <p>Later I founded Mykei Securities Ltd, a security technology company, and designed its brand, website and publication, The Signal.</p>
          <p>Some of my recent work: the identity for Sarah Bellus, a Nigerian caterer in the UK, and the new identity and booking site for Silent Party 9ja.</p>
        </div>
      </section>
      <section className="sx-row"><h2 className="sx-label">How I work</h2>
        <div className="sx-prose">
          <p>I write the colours, type and rules down once, so everything I make matches. And I measure what can be measured, like contrast and load time, instead of guessing.</p>
        </div>
      </section>
      <section className="sx-row"><h2 className="sx-label">Studied</h2>
        <div className="sx-prose">
          <ul>{QUALS.map(([q, where]) => <li key={q}><strong>{q}</strong>{where ? <><br />{where}</> : null}</li>)}</ul>
        </div>
      </section>
      <section className="sx-row"><h2 className="sx-label">Tools</h2>
        <div className="sx-prose">
          <p>I work with Photoshop, Illustrator, InDesign, Figma, Canva, CapCut and Blender.</p>
        </div>
      </section>
      <section className="sx-row"><h2 className="sx-label">Contact</h2>
        <div className="sx-prose">
          <p><a href="mailto:hello@michaelesema.com">hello@michaelesema.com</a></p>
          <p><a href="https://www.linkedin.com/in/michaelesema" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><Link to="/privacy">Privacy</Link></p>
        </div>
      </section>
    </main>
  )
}

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { HandPointing } from '@phosphor-icons/react'
import { PROJECTS } from '../work'
import { EASE_OUT, useSx } from './ctx'
import GlassWord from './GlassWord'
import Mark from './Mark'

// One reveal, used on Home, Blog and About: a line of text slides up out of a
// mask once the intro curtain has lifted (or straight away when there is none).
function Mask({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ready } = useSx()
  const reduce = useReducedMotion()
  return (
    <span className="sx-mask">
      <motion.span className="sx-up" initial={reduce ? false : { y: '112%' }} animate={{ y: ready ? 0 : '112%' }}
        transition={{ duration: 0.9, ease: EASE_OUT, delay: ready ? delay : 0 }}>
        {children}
      </motion.span>
    </span>
  )
}

// The dark panel under the wordmark. The penguin is only a small symbol for now.
// On small screens a hand shows how to move the name until the first touch.
function Stage({ hint }: { hint: boolean }) {
  return (
    <div className="sx-stage2">
      {hint && (
        <p className="sx-hint"><span className="sx-hand" aria-hidden="true"><HandPointing size={34} weight="light" /></span>Drag across the name</p>
      )}
      <div className="sx-turn" aria-hidden="true"><Mark onDark /></div>
    </div>
  )
}

function useMedia(q: string) {
  const [on, setOn] = useState(() => (typeof window === 'undefined' ? false : window.matchMedia(q).matches))
  useEffect(() => {
    const m = window.matchMedia(q)
    const f = () => setOn(m.matches)
    m.addEventListener('change', f)
    return () => m.removeEventListener('change', f)
  }, [q])
  return on
}

function Meta({ title, desc, path }: { title: string; desc: string; path: string }) {
  return (
    <Helmet>
      <title>{title}</title>
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
  const [touched, setTouched] = useState(false)
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main sx-home">
      <Meta title="Michael Esema | Graphic and Multimedia Designer" desc="Michael Esema is a graphic and multimedia designer in the UK working across identity, visual communication and digital design." path="/" />
      <div className="sx-top">
      <p className="sx-head"><Mask>Graphic &amp; Multimedia</Mask><Mask delay={0.08}>Designer</Mask></p>
      <p className="sx-para"><Mask delay={0.16}>I work across identity, visual communication and digital design, helping ideas and businesses find a clear visual language.</Mask></p>
      <h1 className="sx-h1"><span className="sx-sr">Michael Esema</span><Mask delay={0.28}><GlassWord lines={small ? ['Michael', 'Esema'] : ['Michael Esema']} auto={small || coarse} onInteract={() => setTouched(true)} /></Mask></h1>
      </div>
      <Stage hint={small && !touched} />
    </main>
  )
}

export function Blog() {
  const small = useMedia('(max-width: 700px)')
  const coarse = useMedia('(pointer: coarse)')
  const [touched, setTouched] = useState(false)
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main sx-home">
      <Meta title="Blog, coming soon | Michael Esema" desc="Notes on design and business from Michael Esema. The first articles are on their way." path="/blog" />
      <div className="sx-top">
      <p className="sx-head"><Mask>Blog</Mask><Mask delay={0.08}>Coming soon</Mask></p>
      <p className="sx-para"><Mask delay={0.16}>Notes on design, business and the way the two meet. The first articles are on their way.</Mask></p>
      <h1 className="sx-h1"><span className="sx-sr">Blog, coming soon</span><Mask delay={0.28}><GlassWord lines={small ? ['Coming', 'Soon'] : ['Coming Soon']} auto={small || coarse} onInteract={() => setTouched(true)} /></Mask></h1>
      </div>
      <Stage hint={small && !touched} />
    </main>
  )
}

const pad = (n: number) => String(n).padStart(2, '0')

// Scrolling steps through the projects: numeral, thumbnails, list and preview
// all follow the active index. Native scroll, nothing hijacked.
function WorkWide() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const n = PROJECTS.length
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', v => {
    const i = Math.min(n - 1, Math.max(0, Math.floor(v * n)))
    setActive(prev => (prev === i ? prev : i))
  })
  const p = PROJECTS[active]
  return (
    <section ref={ref} className="sx-work" style={{ height: `${n * 100}dvh` }}>
      <div className="sx-stage">
        <div className="sx-num" aria-hidden="true">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span key={active} initial={{ y: '60%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '-60%', opacity: 0 }} transition={{ duration: 0.4, ease: EASE_OUT }}>{pad(active + 1)}</motion.span>
          </AnimatePresence>
        </div>
        <ul className="sx-thumbs" aria-hidden="true">
          {PROJECTS.map((q, i) => (
            <li key={q.slug} className={i === active ? 'on' : undefined}><img src={q.cover.src} alt="" loading="lazy" /></li>
          ))}
        </ul>
        <ul className="sx-list">
          {PROJECTS.map((q, i) => (
            <li key={q.slug}><Link to={`/work/${q.slug}`} className={i === active ? 'on' : undefined} aria-current={i === active ? 'true' : undefined}>{q.title}</Link></li>
          ))}
        </ul>
        <p className="sx-desc">{p.summary}</p>
        <Link className="sx-preview" to={`/work/${p.slug}`} aria-label={`View ${p.title}`} tabIndex={-1}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img key={p.slug} src={p.cover.src} alt={p.cover.alt} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />
          </AnimatePresence>
        </Link>
        <Link className="sx-view" to={`/work/${p.slug}`}>View project</Link>
      </div>
    </section>
  )
}

function WorkStack() {
  return (
    <ol className="sx-stack">
      {PROJECTS.map((q, i) => (
        <li key={q.slug}>
          <span className="n" aria-hidden="true">{pad(i + 1)}</span>
          <Link to={`/work/${q.slug}`} className="pic" aria-label={`View ${q.title}`}><img src={q.cover.src} alt={q.cover.alt} loading={i === 0 ? 'eager' : 'lazy'} /></Link>
          <h2>{q.title}</h2>
          <p>{q.summary}</p>
        </li>
      ))}
    </ol>
  )
}

export function Work() {
  const wide = useMedia('(min-width: 1100px)')
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main">
      <Meta title="Work | Michael Esema" desc="Selected design work by Michael Esema: brand identity, print, publication design and websites." path="/work" />
      <h1 className="sx-sr">Selected work</h1>
      {wide ? <WorkWide /> : <WorkStack />}
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
      <Meta title="About Michael Esema | Graphic and Multimedia Designer" desc="Michael Esema is a graphic and multimedia designer based in the UK, originally from Nigeria, with a background in accounting and business management." path="/about" />
      <h1 className="sx-sr">About Michael Esema</h1>
      <section className="sx-row"><h2 className="sx-label">Bio</h2>
        <div className="sx-prose">
          <p className="lead"><Mask>I’m Michael Esema, a graphic and multimedia designer based in the UK, originally from Nigeria.</Mask></p>
          <p>My background is a little different. I trained as an accountant and studied business management, so I tend to think about what a design needs to achieve before deciding how it should look. I enjoy bringing those two sides together: creative thinking and practical problem-solving.</p>
        </div>
      </section>
      <section className="sx-row"><h2 className="sx-label">Story</h2>
        <div className="sx-prose">
          <p>My design journey started in 2018 when I became part-time Design Lead for Silent Party 9ja, an events brand in Nigeria. I worked on its visual identity and promotional materials, helping the brand connect with its audience.</p>
          <p>In 2019, I joined B’s Hive Hotels &amp; Suites in Abuja as Head Accountant. Alongside my finance responsibilities, I designed the hotel’s logo and letterhead, created promotional materials and managed its social media. Over time, I became involved in the wider running of the business.</p>
          <p>Later, I founded a security technology start-up, Mykei Securities Ltd. That gave me another opportunity to bring design and business together. I developed its brand identity, website and publications, while also working on the product and its wider direction. The company has a UK patent application.</p>
          <p>Since moving to the UK, I’ve continued taking on independent creative projects, working with small businesses and developing ideas of my own.</p>
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
          <p><a href="mailto:hello@michaelesema.com">hello@michaelesema.com</a></p>
        </div>
      </section>
    </main>
  )
}

import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { PROJECTS } from '../work'
import { EASE_OUT } from './ctx'

const pad = (n: number) => String(n).padStart(2, '0')

// Desktop work index. Scrolling steps through the projects: numeral, thumbnails,
// list and preview all follow the active index. Native scroll, nothing hijacked.
// Loaded on demand (it needs the animation library, which the first view does not).
export default function WorkWide() {
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
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
  )
}

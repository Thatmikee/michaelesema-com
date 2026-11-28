import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink, Routes, useLocation } from 'react-router-dom'
import { animate, motion, useAnimationControls, useReducedMotion } from 'framer-motion'
import { SxCtx, EASE_IO } from './ctx'
import Mark from './Mark'
import './site.css'

const SITE_PATHS = ['/', '/work', '/blog', '/about']
const EASE_COUNT: [number, number, number, number] = [0.65, 0, 0.35, 1]

// Counter 0 to 100 with a drawing rule, then a green curtain with a spinning
// mark covers the white screen, then lifts. Any key or click skips ahead.
function Intro({ onLift, onDone }: { onLift: () => void; onDone: () => void }) {
  const num = useRef<HTMLSpanElement>(null)
  const rule = useRef<HTMLDivElement>(null)
  const panel = useAnimationControls()
  const [covered, setCovered] = useState(false)
  const skip = useRef(false)
  const live = useRef<{ complete: () => void }[]>([])

  useEffect(() => {
    let dead = false
    const wait = (ms: number) => new Promise<void>(r => setTimeout(r, skip.current ? 0 : ms))
    const onSkip = () => { skip.current = true; live.current.forEach(c => c.complete()) }
    window.addEventListener('keydown', onSkip)
    window.addEventListener('pointerdown', onSkip)
    const run = async () => {
      const c = animate(0, 100, { duration: 1.2, ease: EASE_COUNT, onUpdate: v => { if (num.current) num.current.textContent = String(Math.round(v)) } })
      const r = rule.current ? animate(rule.current, { scaleX: [0, 1] }, { duration: 1.2, ease: EASE_COUNT }) : null
      live.current = r ? [c, r] : [c]
      await c
      if (dead) return
      await wait(150)
      await panel.start({ y: 0, transition: { duration: skip.current ? 0.01 : 0.5, ease: EASE_IO } })
      if (dead) return
      setCovered(true)
      await wait(650)
      if (dead) return
      onLift()
      await panel.start({ y: '-100%', transition: { duration: skip.current ? 0.35 : 0.8, ease: EASE_IO } })
      if (!dead) onDone()
    }
    void run()
    return () => { dead = true; window.removeEventListener('keydown', onSkip); window.removeEventListener('pointerdown', onSkip) }
  }, [onLift, onDone, panel])

  return (
    <div className="sx-intro" role="status" aria-label="Loading michaelesema.com">
      <div className="sx-intro-white">
        <span className="sx-count" aria-hidden="true"><span ref={num}>0</span></span>
        <div className="sx-rule" ref={rule} />
        <button type="button" className="sx-skip" onClick={() => { skip.current = true; live.current.forEach(c => c.complete()) }}>Skip intro</button>
      </div>
      <motion.div className="sx-panel" initial={{ y: '100%' }} animate={panel}>
        <div className={`sx-spin${covered ? ' on' : ''}`}><Mark onDark /></div>
      </motion.div>
    </div>
  )
}

// Five dark columns rise to cover the page, the route swaps while it is covered,
// then they retreat upward. Reduced motion skips it.
function Wipe({ phase }: { phase: 'idle' | 'cover' | 'reveal' }) {
  return (
    <div className="sx-wipe" style={{ pointerEvents: phase === 'idle' ? 'none' : 'auto' }} aria-hidden="true">
      {[0, 1, 2, 3, 4].map(i => (
        <motion.div key={i} className="sx-col" initial={false}
          style={{ transformOrigin: phase === 'reveal' ? 'top' : 'bottom' }}
          animate={{ scaleY: phase === 'cover' ? 1 : 0 }}
          transition={{ duration: 0.26, ease: EASE_IO, delay: i * 0.025 }} />
      ))}
    </div>
  )
}

function Chrome() {
  return (
    <>
      <a href="#sx-main" className="sx-skiplink">Skip to content</a>
      <div className="sx-bar" aria-hidden="true" />
      <Link to="/" className="sx-mark" aria-label="Michael Esema, home"><Mark /></Link>
      <nav className="sx-nav" aria-label="Primary">
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <a href="mailto:hello@michaelesema.com">Contact</a>
      </nav>
    </>
  )
}

export default function Shell({ children }: { children: ReactNode }) {
  const location = useLocation()
  const reduced = useReducedMotion()
  const [shown, setShown] = useState(location)
  const [phase, setPhase] = useState<'idle' | 'cover' | 'reveal'>('idle')
  const [intro, setIntro] = useState(false)
  const [ready, setReady] = useState(true)
  const isSite = SITE_PATHS.includes(shown.pathname)

  // Intro: once per session, never with reduced motion, skippable with ?nointro.
  useEffect(() => {
    if (reduced || !SITE_PATHS.includes(window.location.pathname)) return
    let seen = false
    try { seen = sessionStorage.getItem('sx-intro') === '1' } catch { /* storage blocked */ }
    if (seen || new URLSearchParams(window.location.search).has('nointro')) return
    try { sessionStorage.setItem('sx-intro', '1') } catch { /* storage blocked */ }
    setReady(false)
    setIntro(true)
  }, [reduced])

  useEffect(() => {
    if (location.pathname === shown.pathname) {
      if (location !== shown) setShown(location)
      return
    }
    if (reduced) { setShown(location); window.scrollTo(0, 0); return }
    setPhase('cover')
    const swap = setTimeout(() => {
      setShown(location)
      window.scrollTo(0, 0)
      setPhase('reveal')
      setTimeout(() => document.getElementById('sx-main')?.focus({ preventScroll: true }), 80)
    }, 420)
    const done = setTimeout(() => setPhase('idle'), 860)
    return () => { clearTimeout(swap); clearTimeout(done) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  useEffect(() => {
    document.body.classList.toggle('sx-body', isSite)
    return () => document.body.classList.remove('sx-body')
  }, [isSite])

  const lift = useCallback(() => { setTimeout(() => setReady(true), 480) }, [])
  const done = useCallback(() => setIntro(false), [])

  return (
    <SxCtx.Provider value={{ ready }}>
      {isSite && <Chrome />}
      <div className={isSite ? 'sx' : undefined}>
        <Routes location={shown}>{children}</Routes>
      </div>
      <Wipe phase={phase} />
      {intro && <Intro onLift={lift} onDone={done} />}
    </SxCtx.Provider>
  )
}

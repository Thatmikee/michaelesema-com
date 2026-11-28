import { lazy, Suspense, useCallback, useEffect, useState, type ComponentType, type CSSProperties, type ReactNode } from 'react'
import { Link, NavLink, Routes, useLocation } from 'react-router-dom'
import Mark from './Mark'
import { PROJECTS } from '../work'
import { FLIP } from './layout'
import { prefersReduced } from './motion'
import type { IntroProps } from './Intro'
import './site.css'

const SITE_PATHS = ['/', '/work', '/blog', '/about']

// The intro needs the animation library, which the first view does not, so it loads
// on demand and only on a first visit. If the file cannot be fetched, release the
// page instead of leaving it veiled.
function IntroFailed({ onDone }: IntroProps) {
  useEffect(() => { document.documentElement.classList.remove('sx-gate', 'sx-held'); onDone() }, [onDone])
  return null
}
const Intro = lazy<ComponentType<IntroProps>>(() => import('./Intro').catch(() => ({ default: IntroFailed })))

// Five dark columns rise to cover the page, the route swaps while it is covered,
// then they retreat upward. Plain CSS transitions (see .sx-col); reduced motion skips it.
function Wipe({ phase }: { phase: 'idle' | 'cover' | 'reveal' }) {
  return (
    <div className="sx-wipe" data-phase={phase} style={{ pointerEvents: phase === 'idle' ? 'none' : 'auto' }} aria-hidden="true">
      {[0, 1, 2, 3, 4].map(i => <div key={i} className="sx-col" style={{ '--i': i } as CSSProperties} />)}
    </div>
  )
}

function Chrome() {
  const mark = <Link to="/" className="sx-mark" aria-label="Michael Esema, home"><Mark /></Link>
  const nav = (
    <nav className="sx-nav" aria-label="Primary">
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <a href="mailto:hello@michaelesema.com">Contact</a>
    </nav>
  )
  return (
    <>
      <a href="#sx-main" className="sx-skiplink">Skip to content</a>
      <div className="sx-bar" aria-hidden="true" />
      {/* Both children are position: fixed, so the header has no height and changes no layout;
          it exists so the home link sits inside a landmark. When the corners are swapped the
          links sit on the left, so they come first in the code and Tab follows what the eye sees. */}
      <header className={FLIP ? 'sx-header-flip' : undefined}>
        {FLIP ? <>{nav}{mark}</> : <>{mark}{nav}</>}
      </header>
    </>
  )
}

export default function Shell({ children }: { children: ReactNode }) {
  const location = useLocation()
  const [shown, setShown] = useState(location)
  const [phase, setPhase] = useState<'idle' | 'cover' | 'reveal'>('idle')
  const [intro, setIntro] = useState(false)
  // Every page shows the site chrome except a real project page, which draws its own
  // brand world and carries a matching copy of the nav. A mistyped /work/<slug> is a
  // 404 and gets the normal chrome, exactly as the prerendered 404 page does.
  const isSite = !PROJECTS.some(p => shown.pathname === `/work/${p.slug}`)

  // Intro: once per session, never with reduced motion, skippable with ?nointro.
  // public/intro-gate.js makes the same decision before first paint and sets two
  // classes on <html>: `sx-gate` (a snow veil so the page never flashes ahead of the
  // curtain, removed when the intro mounts) and `sx-held` (text reveals wait, removed
  // when the curtain lifts). Anywhere the intro does not run, this effect releases both.
  useEffect(() => {
    const root = document.documentElement
    root.dataset.sxApp = '1'
    const release = () => root.classList.remove('sx-gate', 'sx-held')
    if (prefersReduced() || !SITE_PATHS.includes(window.location.pathname)) { release(); return }
    let seen = false
    try { seen = sessionStorage.getItem('sx-intro') === '1' } catch { /* storage blocked */ }
    if (seen || new URLSearchParams(window.location.search).has('nointro')) { release(); return }
    try { sessionStorage.setItem('sx-intro', '1') } catch { /* storage blocked */ }
    setIntro(true)
  }, [])

  useEffect(() => {
    if (location.pathname === shown.pathname) {
      if (location !== shown) setShown(location)
      return
    }
    if (prefersReduced()) { setShown(location); window.scrollTo(0, 0); return }
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

  // The page's text lines start rising a moment after the curtain begins to lift.
  const lift = useCallback(() => { setTimeout(() => document.documentElement.classList.remove('sx-held'), 480) }, [])
  const done = useCallback(() => setIntro(false), [])

  return (
    <>
      {isSite && <Chrome />}
      <div className={isSite ? (FLIP ? 'sx sx-flip' : 'sx') : undefined}>
        <Routes location={shown}>{children}</Routes>
      </div>
      <Wipe phase={phase} />
      {intro && <Suspense fallback={null}><Intro onLift={lift} onDone={done} /></Suspense>}
    </>
  )
}

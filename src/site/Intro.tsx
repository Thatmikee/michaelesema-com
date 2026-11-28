import { useEffect, useRef, useState } from 'react'
import { animate, motion, useAnimationControls } from 'framer-motion'
import { EASE_IO } from './ctx'
import Mark from './Mark'

export type IntroProps = { onLift: () => void; onDone: () => void }

const EASE_COUNT: [number, number, number, number] = [0.65, 0, 0.35, 1]

// Counter 0 to 100 with a drawing rule, then a dark curtain with a spinning mark
// covers the white screen, then lifts. Any key or click skips ahead. It needs the
// animation library, so it is loaded on demand and only on a first visit.
export default function Intro({ onLift, onDone }: IntroProps) {
  const num = useRef<HTMLSpanElement>(null)
  const rule = useRef<HTMLDivElement>(null)
  const panel = useAnimationControls()
  const [covered, setCovered] = useState(false)
  const skip = useRef(false)
  const live = useRef<{ complete: () => void }[]>([])

  // The curtain's first frame is the same snow white as the veil that
  // public/intro-gate.js put over the page, so the veil can go as this mounts.
  useEffect(() => { document.documentElement.classList.remove('sx-gate') }, [])

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

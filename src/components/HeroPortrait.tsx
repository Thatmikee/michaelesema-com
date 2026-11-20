import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

// The drawn portrait is a slab. It turns and leans toward the cursor so it
// always seems to be looking at you; the waving video keeps playing inside it.
// Pointer position goes into motion values, never React state, so a move costs
// one transform update and no re-render. The pointer is measured against the
// untransformed parent, otherwise the tilt would feed back into its own input.
const YAW = 6 // degrees of turn at full deflection
const PITCH = 4 // degrees of nod at full deflection
const SHIFT_X = 8 // px of lean
const SHIFT_Y = 5
const PERSPECTIVE = 1100
const SPRING = { stiffness: 140, damping: 18, mass: 0.7 }

const clamp = (n: number) => Math.max(-1, Math.min(1, n))

export default function HeroPortrait() {
  const figureRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const nx = useMotionValue(0)
  const ny = useMotionValue(0)
  const sx = useSpring(nx, SPRING)
  const sy = useSpring(ny, SPRING)
  // CSS rotateY(+) turns the slab to face right; rotateX(+) makes it face up.
  const rotateY = useTransform(sx, (v) => v * YAW)
  const rotateX = useTransform(sy, (v) => -v * PITCH)
  const x = useTransform(sx, (v) => v * SHIFT_X)
  const y = useTransform(sy, (v) => v * SHIFT_Y)

  useEffect(() => {
    if (reduceMotion) {
      nx.set(0)
      ny.set(0)
      return
    }
    const el = figureRef.current
    if (!el) return

    let inView = true
    const rest = () => {
      nx.set(0)
      ny.set(0)
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      if (!inView) rest()
    })
    observer.observe(el)

    const onMove = (e: PointerEvent) => {
      if (!inView || e.pointerType === 'touch') return
      const r = el.getBoundingClientRect()
      nx.set(clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)))
      ny.set(clamp((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)))
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', rest)
    window.addEventListener('blur', rest)
    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', rest)
      window.removeEventListener('blur', rest)
    }
  }, [reduceMotion, nx, ny])

  return (
    <div ref={figureRef}>
      <motion.div style={reduceMotion ? undefined : { rotateX, rotateY, x, y, transformPerspective: PERSPECTIVE }}>
        <div className="plate" style={{ aspectRatio: '3 / 4' }}>
          <video className="wave" src="/michael-esema-wave.mp4" poster="/michael-esema-illustrated.jpg" autoPlay muted loop playsInline
            aria-label="An illustrated Michael Esema waving" />
          <img className="still" src="/michael-esema-illustrated.jpg" alt="An illustrated portrait of Michael Esema" width={896} height={1120} />
        </div>
      </motion.div>
    </div>
  )
}

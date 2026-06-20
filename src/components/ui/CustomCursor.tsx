'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [visible, setVisible] = useState(false)
  const isTouchRef = useRef(false)

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const onTouch = () => { isTouchRef.current = true }
    window.addEventListener('touchstart', onTouch, { once: true })

    const onMove = (e: MouseEvent) => {
      if (isTouchRef.current) return
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest('a, button, [role="button"], input, textarea, select')) {
        setHovered(true)
      }
    }
    const onLeave = () => setHovered(false)
    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [cursorX, cursorY, visible])

  if (isTouchRef.current) return null

  const size = clicked ? 6 : hovered ? 36 : 10

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        @media (hover: none) { * { cursor: auto !important; } }
        @media (prefers-reduced-motion: reduce) {
          .custom-cursor { display: none !important; }
          * { cursor: auto !important; }
        }
      `}</style>
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: size,
          height: size,
          borderRadius: '50%',
          background: hovered ? 'transparent' : '#A01818',
          border: hovered ? '1px solid rgba(160,24,24,0.7)' : 'none',
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, background 0.2s ease',
          mixBlendMode: 'normal',
        }}
      />
    </>
  )
}

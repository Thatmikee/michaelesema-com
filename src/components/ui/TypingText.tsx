import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  style?: React.CSSProperties
  onDone?: () => void
}

export default function TypingText({
  text,
  speed = 28,
  delay = 0,
  className = '',
  style = {},
  onDone,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted]     = useState(false)
  const [showCaret, setShowCaret] = useState(true)
  const ref    = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (reduce) { setDisplayed(text); onDone?.(); return }

    const timer = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(id)
          onDone?.()
          setTimeout(() => setShowCaret(false), 1200)
        }
      }, speed)
      return () => clearInterval(id)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [started, text, speed, delay, reduce, onDone])

  return (
    <span ref={ref} className={className} style={{ ...style, position: 'relative' }}>
      {displayed}
      {showCaret && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: 2,
            height: '0.9em',
            background: '#A01818',
            marginLeft: 2,
            verticalAlign: 'text-bottom',
            animation: 'caret-blink 0.9s step-end infinite',
          }}
        />
      )}
      <style>{`
        @keyframes caret-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </span>
  )
}

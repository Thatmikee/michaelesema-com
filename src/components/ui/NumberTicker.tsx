import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface NumberTickerProps {
  value: number
  direction?: 'up' | 'down'
  delay?: number
  decimalPlaces?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  decimalPlaces = 0,
  className = '',
  prefix = '',
  suffix = '',
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)
  const [display, setDisplay] = useState(direction === 'up' ? 0 : value)
  const reduce = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect() }
    }, { threshold: 0.4 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || reduce) { setDisplay(value); return }
    const start = direction === 'up' ? 0 : value
    const end = direction === 'up' ? value : 0
    const duration = 1800
    const startTime = performance.now() + delay * 1000

    let raf: number
    function tick(now: number) {
      if (now < startTime) { raf = requestAnimationFrame(tick); return }
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(parseFloat((start + (end - start) * eased).toFixed(decimalPlaces)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, direction, delay, decimalPlaces, reduce])

  return (
    <span ref={ref} className={className}>
      {prefix}{display.toLocaleString(undefined, { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces })}{suffix}
    </span>
  )
}

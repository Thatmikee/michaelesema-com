import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface WordRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export default function WordReveal({
  text,
  className = '',
  style = {},
  delay = 0,
  stagger = 0.08,
  as: Tag = 'p',
}: WordRevealProps) {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()

  const words = text.split(' ')

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }

  const word = {
    hidden:  { opacity: 0, y: reduce ? 0 : 20, filter: reduce ? 'none' : 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as number[] } },
  }

  return (
    <motion.span
      ref={ref as React.Ref<HTMLElement>}
      className={className}
      style={{ display: 'block', ...style }}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      as={Tag as any}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import AnimatedGradientText from './ui/AnimatedGradientText'

const LINE1 = ['I', 'wrote', 'a', 'doctrine.']
const LINE2 = ['I', 'filed', 'a', 'patent.']
const LINE3 = ['I', 'am', 'building', 'the']
const WORD_LAST = 'institution.'

export default function Hero() {
  const reduce = useReducedMotion()

  const wordVariant = {
    hidden:  { opacity: 0, y: reduce ? 0 : 20, filter: reduce ? 'none' : 'blur(5px)' },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.65, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] as number[] },
    }),
  }

  const fade = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as number[] },
  })

  const allLines = [...LINE1, ...LINE2, ...LINE3]

  return (
    <section style={{
      minHeight: '100dvh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(100px, 12vw, 140px) clamp(24px, 6vw, 80px) clamp(56px, 8vw, 96px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Subtle radial warmth bottom-left */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '45vw', height: '45vw',
        background: 'radial-gradient(ellipse at bottom left, rgba(160,24,24,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Left editorial rule */}
      <div style={{
        position: 'absolute',
        left: 'clamp(24px, 6vw, 80px)', top: 0, bottom: 0, width: 1,
        background: 'linear-gradient(transparent 0%, rgba(160,24,24,0.18) 25%, rgba(160,24,24,0.18) 75%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Byline — eyebrow #1 of 3 on this page */}
      <motion.div
        {...fade(0.06)}
        style={{
          position: 'absolute',
          top: 'clamp(80px, 10vw, 110px)',
          left: 'clamp(40px, 7vw, 100px)',
          display: 'flex', flexDirection: 'column', gap: 5,
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Michael Esema
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red-text)' }}>
          Abuja, Nigeria  Manchester, UK
        </span>
      </motion.div>

      <div style={{ maxWidth: 900, position: 'relative', zIndex: 2 }}>

        {/* Red hairline */}
        <motion.span {...fade(0.14)} style={{ display: 'block', width: 40, height: 1, background: 'var(--red)', marginBottom: 30 }} />

        {/* Three-line headline */}
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(38px, 6vw, 80px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.3px',
          marginBottom: 0,
        }}>
          {/* Line 1 */}
          <span style={{ display: 'block', marginBottom: 4 }}>
            {LINE1.map((word, i) => (
              <motion.span key={`l1-${i}`} custom={i} variants={wordVariant} initial="hidden" animate="visible"
                style={{ display: 'inline-block', marginRight: '0.2em', color: 'var(--text-primary)' }}>
                {word}
              </motion.span>
            ))}
          </span>
          {/* Line 2 */}
          <span style={{ display: 'block', marginBottom: 4 }}>
            {LINE2.map((word, i) => {
              const gi = LINE1.length + i
              return (
                <motion.span key={`l2-${i}`} custom={gi} variants={wordVariant} initial="hidden" animate="visible"
                  style={{ display: 'inline-block', marginRight: '0.2em', color: 'var(--text-primary)' }}>
                  {word}
                </motion.span>
              )
            })}
          </span>
          {/* Line 3 - last word in AnimatedGradientText */}
          <span style={{ display: 'block' }}>
            {LINE3.map((word, i) => {
              const gi = LINE1.length + LINE2.length + i
              return (
                <motion.span key={`l3-${i}`} custom={gi} variants={wordVariant} initial="hidden" animate="visible"
                  style={{ display: 'inline-block', marginRight: '0.2em', color: 'var(--text-primary)' }}>
                  {word}
                </motion.span>
              )
            })}
            <motion.span
              custom={LINE1.length + LINE2.length + LINE3.length}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
              style={{ display: 'inline-block', paddingBottom: 4 }}
            >
              <AnimatedGradientText style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(38px, 6vw, 80px)',
                lineHeight: 1.1,
              }}>
                {WORD_LAST}
              </AnimatedGradientText>
            </motion.span>
          </span>
        </h1>

        {/* Lede */}
        <motion.p
          {...fade(1.1)}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            maxWidth: 500,
            marginTop: 28,
          }}
        >
          MBA. MSc International Business Management. Founder of Mykei Securities Ltd.
          The doctrine is called Economic Sterilisation. The aspiration is doctoral research.
          Abuja raised me. Manchester is where I built the proof.
        </motion.p>
      </div>
    </section>
  )
}

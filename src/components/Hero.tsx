import { motion, useReducedMotion, type Variants } from 'framer-motion'
import AnimatedGradientText from './ui/AnimatedGradientText'

const LINE1 = ['I', 'wrote', 'a', 'doctrine.']
const LINE2 = ['I', 'filed', 'a', 'patent.']
const LINE3 = ['I', 'am', 'building', 'the']
const WORD_LAST = 'institution.'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ease = [0.16, 1, 0.3, 1] as any

export default function Hero() {
  const reduce = useReducedMotion()

  const wordVariants: Variants = {
    hidden:  { opacity: 0, y: reduce ? 0 : 20, filter: reduce ? 'none' : 'blur(5px)' },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.65, delay: 0.2 + i * 0.08, ease },
    }),
  }

  const fadeUp = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  })

  return (
    <section style={{
      minHeight: '100dvh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(120px, 14vw, 160px) clamp(32px, 8vw, 100px) clamp(64px, 9vw, 110px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div style={{ maxWidth: 860, position: 'relative', zIndex: 2 }}>

        {/* Red hairline */}
        <motion.div {...fadeUp(0.1)} style={{ width: 36, height: 1, background: 'var(--red)', marginBottom: 32 }} />

        {/* Three-line staggered headline */}
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(38px, 6vw, 80px)',
          fontWeight: 400,
          lineHeight: 1.12,
          letterSpacing: '-0.3px',
        }}>
          {/* Line 1 */}
          <span style={{ display: 'block', marginBottom: 2 }}>
            {LINE1.map((word, i) => (
              <motion.span key={i} custom={i} variants={wordVariants} initial="hidden" animate="visible"
                style={{ display: 'inline-block', marginRight: '0.2em', color: 'var(--text-primary)' }}>
                {word}
              </motion.span>
            ))}
          </span>
          {/* Line 2 */}
          <span style={{ display: 'block', marginBottom: 2 }}>
            {LINE2.map((word, i) => {
              const gi = LINE1.length + i
              return (
                <motion.span key={gi} custom={gi} variants={wordVariants} initial="hidden" animate="visible"
                  style={{ display: 'inline-block', marginRight: '0.2em', color: 'var(--text-primary)' }}>
                  {word}
                </motion.span>
              )
            })}
          </span>
          {/* Line 3 — last word animated */}
          <span style={{ display: 'block' }}>
            {LINE3.map((word, i) => {
              const gi = LINE1.length + LINE2.length + i
              return (
                <motion.span key={gi} custom={gi} variants={wordVariants} initial="hidden" animate="visible"
                  style={{ display: 'inline-block', marginRight: '0.2em', color: 'var(--text-primary)' }}>
                  {word}
                </motion.span>
              )
            })}
            <motion.span
              custom={LINE1.length + LINE2.length + LINE3.length}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'inline-block', paddingBottom: 4 }}
            >
              <AnimatedGradientText style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontSize: 'clamp(38px, 6vw, 80px)',
                lineHeight: 1.12,
              }}>
                {WORD_LAST}
              </AnimatedGradientText>
            </motion.span>
          </span>
        </h1>

        {/* Lede */}
        <motion.p
          {...fadeUp(1.1)}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.85,
            color: 'var(--text-secondary)',
            maxWidth: 500,
            marginTop: 30,
          }}
        >
          MBA. MSc International Business Management. Founder of Mykei Securities Ltd.
          The doctrine is Economic Sterilisation. The PhD is the next move.
          Abuja raised me. Manchester is where I built the proof.
        </motion.p>
      </div>
    </section>
  )
}

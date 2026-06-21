import { motion, useReducedMotion } from 'framer-motion'
import AnimatedGradientText from './ui/AnimatedGradientText'

const LINE1 = ['I', 'think', 'about', 'markets,']
const LINE2 = ['systems,', 'and', 'why', 'things', 'break.']

export default function Hero() {
  const reduce = useReducedMotion()

  const wordVariant = {
    hidden:  { opacity: 0, y: reduce ? 0 : 22, filter: reduce ? 'none' : 'blur(5px)' },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.7, delay: 0.25 + i * 0.09, ease: [0.16, 1, 0.3, 1] as number[] },
    }),
  }

  const fade = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as number[] },
  })

  const allWords = [...LINE1, ...LINE2]

  return (
    <section style={{
      minHeight: '100dvh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(100px, 12vw, 140px) clamp(24px, 6vw, 80px) clamp(48px, 7vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Radial warmth bottom-left */}
      <div style={{
        position: 'absolute', bottom: '-8%', left: '-4%',
        width: '50vw', height: '50vw',
        background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.10) 0%, transparent 72%)',
        pointerEvents: 'none',
      }} />

      {/* Left editorial rule */}
      <div style={{
        position: 'absolute',
        left: 'clamp(24px, 6vw, 80px)', top: 0, bottom: 0, width: 1,
        background: 'linear-gradient(transparent 0%, rgba(160,24,24,0.22) 28%, rgba(160,24,24,0.22) 72%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Top byline */}
      <motion.div
        {...fade(0.08)}
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
          Lagos, Nigeria — Manchester, UK
        </span>
      </motion.div>

      <div style={{ maxWidth: 860, position: 'relative', zIndex: 2 }}>

        {/* Red hairline */}
        <motion.span {...fade(0.16)} style={{ display: 'block', width: 40, height: 1, background: 'var(--red)', marginBottom: 30 }} />

        {/* Headline — word by word, two lines */}
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(36px, 5.8vw, 76px)',
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: '-0.4px',
          marginBottom: 12,
        }}>
          <span style={{ display: 'block', marginBottom: 2 }}>
            {LINE1.map((word, i) => (
              <motion.span
                key={`l1-${i}`}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block', marginRight: '0.22em', color: 'var(--text-primary)' }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span style={{ display: 'block' }}>
            {LINE2.map((word, i) => {
              const global = LINE1.length + i
              const isLast = i === LINE2.length - 1
              return isLast ? (
                <motion.span
                  key={`l2-${i}`}
                  custom={global}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block', paddingBottom: 4 }}
                >
                  <AnimatedGradientText style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: 'clamp(36px, 5.8vw, 76px)',
                    lineHeight: 1.1,
                  }}>
                    {word}
                  </AnimatedGradientText>
                </motion.span>
              ) : (
                <motion.span
                  key={`l2-${i}`}
                  custom={global}
                  variants={wordVariant}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block', marginRight: '0.22em', color: 'var(--text-primary)' }}
                >
                  {word}
                </motion.span>
              )
            })}
          </span>
        </h1>

        {/* Lede */}
        <motion.p
          {...fade(1.05)}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'var(--text-secondary)',
            maxWidth: 520,
            marginTop: 22,
            marginBottom: 44,
          }}
        >
          Accountant. Postgraduate. Founder of Mykei Securities Ltd. I am interested in
          the gap between how institutions are designed and what they actually do to the
          people inside them. Most of my work starts there.
        </motion.p>

        {/* Tags */}
        <motion.div
          {...fade(1.18)}
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' as const, gap: 0 }}
        >
          {['Economic Thinking', 'African Markets', 'Institutional Design'].map((cat, i, arr) => (
            <span key={cat} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                {cat}
              </span>
              {i < arr.length - 1 && (
                <span style={{ display: 'inline-block', width: 1, height: 10, background: 'rgba(245,240,232,0.15)', margin: '0 18px' }} />
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        {...fade(1.35)}
        style={{ position: 'absolute', bottom: 'clamp(48px, 7vw, 80px)', right: 'clamp(24px, 6vw, 80px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(var(--red), transparent)' }}
        />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', writingMode: 'vertical-rl' }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}

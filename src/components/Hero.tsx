import { motion, useReducedMotion } from 'framer-motion'
import Particles from './ui/Particles'
import AnimatedGradientText from './ui/AnimatedGradientText'

const CATEGORIES = ['Economic Thought', 'Deterrence Systems', 'African Markets']

const HEADLINE_LINE1 = ['Stolen', 'goods', 'do', 'not', 'disappear.']

export default function Hero() {
  const reduce = useReducedMotion()

  const wordVariant = {
    hidden:  { opacity: 0, y: reduce ? 0 : 24, filter: reduce ? 'none' : 'blur(6px)' },
    visible: (i: number) => ({
      opacity: 1, y: 0, filter: 'blur(0px)',
      transition: { duration: 0.7, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] as number[] },
    }),
  }

  const fade = (delay: number) => ({
    initial: reduce ? {} : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as number[] },
  })

  return (
    <section
      style={{
        minHeight: '100dvh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(100px, 12vw, 140px) clamp(24px, 6vw, 80px) clamp(48px, 7vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Particles quantity={55} color="#A01818" ease={48} />

      {/* Radial heat source */}
      <div style={{
        position: 'absolute',
        bottom: '-10%', left: '-5%',
        width: '55vw', height: '55vw',
        background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.13) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Vertical editorial rule */}
      <div style={{
        position: 'absolute',
        left: 'clamp(24px, 6vw, 80px)',
        top: 0, bottom: 0, width: 1,
        background: 'linear-gradient(transparent 0%, rgba(160,24,24,0.28) 30%, rgba(160,24,24,0.28) 70%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Top-left byline */}
      <motion.div
        {...fade(0.1)}
        style={{
          position: 'absolute',
          top: 'clamp(80px, 10vw, 110px)',
          left: 'clamp(40px, 7vw, 100px)',
          display: 'flex', flexDirection: 'column', gap: 6,
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Michael Esema
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--red-text)' }}>
          Lagos · Manchester
        </span>
      </motion.div>

      <div style={{ maxWidth: 900, position: 'relative', zIndex: 2 }}>

        {/* Red hairline */}
        <motion.span
          {...fade(0.18)}
          style={{ display: 'block', width: 40, height: 1, background: 'var(--red)', marginBottom: 32 }}
        />

        {/* Headline — word by word */}
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(38px, 6vw, 78px)',
          fontWeight: 400,
          lineHeight: 1.1,
          color: 'var(--text-primary)',
          marginBottom: 12,
          letterSpacing: '-0.5px',
        }}>
          <span style={{ display: 'block', marginBottom: 4 }}>
            {HEADLINE_LINE1.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                style={{ display: 'inline-block', marginRight: '0.22em' }}
              >
                {word}
              </motion.span>
            ))}
          </span>

          <motion.span
            initial={reduce ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'block', paddingBottom: 4 }}
          >
            <AnimatedGradientText style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontSize: 'clamp(38px, 6vw, 78px)',
              lineHeight: 1.1,
            }}>
              They circulate.
            </AnimatedGradientText>
          </motion.span>
        </h1>

        {/* Doctrine line */}
        <motion.p
          {...fade(1.05)}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.9,
            color: 'var(--text-secondary)',
            maxWidth: 520,
            marginTop: 24,
            marginBottom: 44,
          }}
        >
          Economic Sterilisation is the doctrine of making that circulation untenable.
          I am its originator and the founder of Mykei Securities Ltd.
        </motion.p>

        {/* Category tags */}
        <motion.div
          {...fade(1.18)}
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' as const, gap: 0 }}
        >
          {CATEGORIES.map((cat, i) => (
            <span key={cat} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9.5,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                {cat}
              </span>
              {i < CATEGORIES.length - 1 && (
                <span style={{
                  display: 'inline-block', width: 1, height: 10,
                  background: 'rgba(245,240,232,0.15)', margin: '0 18px',
                }} />
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        {...fade(1.35)}
        style={{
          position: 'absolute',
          bottom: 'clamp(48px, 7vw, 80px)',
          right: 'clamp(24px, 6vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(var(--red), transparent)' }}
        />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          writingMode: 'vertical-rl',
        }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}

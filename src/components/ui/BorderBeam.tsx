import { type CSSProperties } from 'react'

interface BorderBeamProps {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
  className?: string
}

export default function BorderBeam({
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = 'transparent',
  colorTo = '#A01818',
  borderWidth = 1,
  className = '',
}: BorderBeamProps) {
  return (
    <>
      <style>{`
        @keyframes border-beam {
          100% { offset-distance: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .border-beam-el { animation: none !important; }
        }
      `}</style>
      <div
        className={className}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          border: `${borderWidth}px solid transparent`,
          pointerEvents: 'none',
        }}
      />
      <div
        className="border-beam-el"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          ['--size' as string]: `${size}px`,
          ['--duration' as string]: `${duration}s`,
          ['--delay' as string]: `-${delay}s`,
          ['--color-from' as string]: colorFrom,
          ['--color-to' as string]: colorTo,
          ['--border-width' as string]: `${borderWidth}px`,
          offsetPath: 'rect(0 auto auto 0 round inherit)',
          offsetDistance: '0%',
          animation: `border-beam ${duration}s ${delay}s infinite linear`,
          background: `linear-gradient(to left, var(--color-from), var(--color-to), transparent)`,
          width: `${size}px`,
          height: `calc(var(--border-width) * 2 + 100%)`,
          margin: `calc(var(--border-width) * -1)`,
        } as CSSProperties}
      />
    </>
  )
}

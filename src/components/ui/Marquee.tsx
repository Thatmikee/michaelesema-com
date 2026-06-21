import { type ReactNode, type CSSProperties } from 'react'

interface MarqueeProps {
  children: ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
  className?: string
  style?: CSSProperties
}

export default function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  repeat = 4,
  className = '',
  style = {},
}: MarqueeProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        overflow: 'hidden',
        userSelect: 'none',
        ...style,
      }}
    >
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-100%) } }
        @keyframes marquee-reverse { from { transform: translateX(-100%) } to { transform: translateX(0) } }
        .marquee-inner {
          display: flex;
          flex-shrink: 0;
          animation: marquee 28s linear infinite;
        }
        .marquee-inner.reverse { animation-name: marquee-reverse; }
        .marquee-wrap:hover .marquee-inner { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .marquee-inner { animation: none !important; }
        }
      `}</style>
      <div
        className={`marquee-wrap${pauseOnHover ? '' : ''}`}
        style={{ display: 'flex', flex: 'none', minWidth: '100%' }}
        onMouseEnter={pauseOnHover ? (e) => {
          e.currentTarget.querySelectorAll('.marquee-inner').forEach(el => (el as HTMLElement).style.animationPlayState = 'paused')
        } : undefined}
        onMouseLeave={pauseOnHover ? (e) => {
          e.currentTarget.querySelectorAll('.marquee-inner').forEach(el => (el as HTMLElement).style.animationPlayState = 'running')
        } : undefined}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={`marquee-inner${reverse ? ' reverse' : ''}`}
            aria-hidden={i > 0}
            style={{ animationDelay: `${-28 * (i / repeat)}s` }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

import { ReactNode, CSSProperties } from 'react'

interface AnimatedGradientTextProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function AnimatedGradientText({ children, className = '', style = {} }: AnimatedGradientTextProps) {
  return (
    <>
      <style>{`
        @keyframes gradient-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient-text {
          background: linear-gradient(135deg, #8B0000, #C0392B, #E74C3C, #A01818, #8B0000);
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 5s ease infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animated-gradient-text { animation: none !important; }
        }
      `}</style>
      <span className={`animated-gradient-text ${className}`} style={style}>
        {children}
      </span>
    </>
  )
}

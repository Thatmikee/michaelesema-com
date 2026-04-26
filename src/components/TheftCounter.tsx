// TheftCounter.tsx
// Live animated counter based on ONS/BRC published data.
// UK retail crime: £1.8bn/year = ~£57.08/second
// EEA retail crime: ~€25bn/year = ~€792/second
// Counter starts from midnight today so the number is always meaningful.

import { useEffect, useRef, useState } from 'react'

const UK_PER_SECOND  = 1_800_000_000 / 365 / 24 / 3600   // ~57.08
const EEA_PER_SECOND = 25_000_000_000 / 365 / 24 / 3600  // ~792.0

function secondsSinceMidnight(): number {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(0, 0, 0, 0)
  return (now.getTime() - midnight.getTime()) / 1000
}

function formatGBP(n: number): string {
  if (n >= 1_000_000) return `£${(n / 1_000_000).toFixed(2)}m`
  if (n >= 1_000)     return `£${Math.round(n).toLocaleString()}`
  return `£${Math.round(n)}`
}

function formatEUR(n: number): string {
  if (n >= 1_000_000) return `€${(n / 1_000_000).toFixed(2)}m`
  if (n >= 1_000)     return `€${Math.round(n).toLocaleString()}`
  return `€${Math.round(n)}`
}

export default function TheftCounter() {
  const [ukVal, setUkVal]   = useState<number>(() => secondsSinceMidnight() * UK_PER_SECOND)
  const [eeaVal, setEeaVal] = useState<number>(() => secondsSinceMidnight() * EEA_PER_SECOND)
  const rafRef = useRef<number | undefined>(undefined)
  const lastRef = useRef<number>(performance.now())

  useEffect(() => {
    const tick = (now: number) => {
      const delta = (now - lastRef.current) / 1000
      lastRef.current = now
      setUkVal(v  => v  + UK_PER_SECOND  * delta)
      setEeaVal(v => v  + EEA_PER_SECOND * delta)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <div style={{
      background: 'var(--dark)',
      borderRadius: 2,
      padding: 'clamp(28px, 4vw, 44px) clamp(24px, 5vw, 56px)',
      display: 'grid',
      gridTemplateColumns: '1fr 1px 1fr',
      gap: 'clamp(20px, 3vw, 44px)',
      alignItems: 'center',
      border: '1px solid rgba(184,150,46,0.45)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient pulse */}
      <div style={{
        position: 'absolute',
        top: -60, left: -60,
        width: 200, height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,150,46,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* UK */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 8,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--gold-light)',
          marginBottom: 10,
          opacity: 1,
        }}>
          UK: lost today
        </div>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(28px, 4.5vw, 48px)',
          fontWeight: 400,
          color: '#F5F5F0',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          transition: 'none',
        }}>
          {formatGBP(ukVal)}
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 8,
          color: 'var(--gold-light)',
          marginTop: 8,
          opacity: 0.7,
          letterSpacing: '0.1em',
        }}>
          Source: BRC Annual Retail Crime Survey
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 1, height: '100%', background: 'rgba(184,150,46,0.2)', alignSelf: 'stretch' }} />

      {/* EEA */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 8,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--gold-light)',
          marginBottom: 10,
          opacity: 0.7,
        }}>
          Europe: lost today
        </div>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(28px, 4.5vw, 48px)',
          fontWeight: 400,
          color: '#F5F5F0',
          letterSpacing: '-0.02em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}>
          {formatEUR(eeaVal)}
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 8,
          color: 'var(--gold-light)',
          marginTop: 8,
          opacity: 0.7,
          letterSpacing: '0.1em',
        }}>
          Source: Eurocommerce Retail Report
        </div>
      </div>

      {/* Live badge */}
      <div style={{
        position: 'absolute',
        top: 14, right: 18,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: '#4CAF50',
          boxShadow: '0 0 0 0 rgba(76,175,80,0.5)',
          animation: 'livePulse 1.8s infinite',
          display: 'inline-block',
        }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 8,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#4CAF50',
        }}>
          Live
        </span>
      </div>

      <style>{`
        @keyframes livePulse {
          0%   { box-shadow: 0 0 0 0 rgba(76,175,80,0.5); }
          70%  { box-shadow: 0 0 0 8px rgba(76,175,80,0); }
          100% { box-shadow: 0 0 0 0 rgba(76,175,80,0); }
        }
      `}</style>
    </div>
  )
}

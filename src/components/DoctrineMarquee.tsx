import Marquee from './ui/Marquee'

const ITEMS = [
  'Economic Sterilisation',
  'Resale Interdiction',
  'Forensic Asset Intelligence',
  'Retail Theft Doctrine',
  'Market Disruption',
  'Chain-of-Custody Architecture',
  'Origin Verification',
  'Anti-Resale Infrastructure',
]

function Item({ text }: { text: string }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10.5,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        whiteSpace: 'nowrap',
      }}>
        {text}
      </span>
      <span style={{
        display: 'inline-block',
        width: 3,
        height: 3,
        borderRadius: '50%',
        background: 'var(--red)',
        flexShrink: 0,
      }} />
    </span>
  )
}

export default function DoctrineMarquee() {
  return (
    <div style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-section)',
      padding: '18px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Left fade mask */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 120,
        background: 'linear-gradient(to right, var(--bg-section), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />
      {/* Right fade mask */}
      <div style={{
        position: 'absolute',
        right: 0, top: 0, bottom: 0,
        width: 120,
        background: 'linear-gradient(to left, var(--bg-section), transparent)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      <Marquee pauseOnHover repeat={3}>
        {ITEMS.map(item => (
          <span key={item} style={{ display: 'flex', alignItems: 'center', marginRight: 28 }}>
            <Item text={item} />
          </span>
        ))}
      </Marquee>
    </div>
  )
}

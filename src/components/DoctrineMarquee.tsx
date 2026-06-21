import Marquee from './ui/Marquee'

const ITEMS = [
  'Markets', 'Institutions', 'Nigeria', 'Manchester',
  'Why Things Break', 'How Systems Fail', 'First Principles',
  'African Business', 'Economic Crime', 'Diaspora', 'Building from Scratch',
]

function Item({ text }: { text: string }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
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
      <span style={{ display: 'inline-block', width: 3, height: 3, borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }} />
    </span>
  )
}

export default function DoctrineMarquee() {
  return (
    <div style={{
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      background: 'var(--bg-section)', padding: '16px 0', overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to right, var(--bg-section), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(to left, var(--bg-section), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <Marquee pauseOnHover repeat={3}>
        {ITEMS.map(item => (
          <span key={item} style={{ display: 'flex', alignItems: 'center', marginRight: 24 }}>
            <Item text={item} />
          </span>
        ))}
      </Marquee>
    </div>
  )
}

// The drawn portrait waves once and settles, on a loop that starts and ends
// on the same frame. A speech bubble beside it is the one call to action.
export default function Hero() {
  return (
    <section aria-label="Introduction" style={{ paddingTop: 72 }}>
      <div className="wrap hero" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(24px, 4vw, 64px)', alignItems: 'end', minHeight: 'min(88dvh, 860px)' }}>
        <div style={{ alignSelf: 'center', padding: 'clamp(32px, 5vw, 72px) 0' }}>
          <h1 className="display">Michael Esema</h1>
          <p style={{ font: '500 clamp(24px, 3.4vw, 46px)/1.08 var(--font-sans)', letterSpacing: '-0.03em', color: 'var(--green)', marginTop: 'clamp(10px, 1.2vw, 18px)' }}>
            Graphic and multimedia designer
          </p>
          <p style={{ font: '400 clamp(17px, 1.5vw, 21px)/1.5 var(--font-sans)', color: 'var(--text-secondary)', maxWidth: '38ch', marginTop: 'clamp(22px, 2.6vw, 36px)' }}>
            Brand identities, marketing campaigns, publications and multimedia content, designed for businesses since
            2018.
          </p>
        </div>

        <div className="hero-figure" style={{ position: 'relative', alignSelf: 'end' }}>
          <a href="mailto:hello@michaelesema.com" className="bubble">Contact me</a>
          <div className="plate" style={{ aspectRatio: '3 / 4' }}>
            <video className="wave" src="/michael-esema-wave.mp4" poster="/michael-esema-illustrated.jpg" autoPlay muted loop playsInline
              aria-label="An illustrated Michael Esema waving" />
            <img className="still" src="/michael-esema-illustrated.jpg" alt="An illustrated portrait of Michael Esema" width={896} height={1120} />
          </div>
          <p className="label" style={{ fontSize: 14, marginTop: 14 }}>Illustration and animation generated from my photograph.</p>
        </div>
      </div>
      <style>{`
        .hero-figure .still { display: none; object-position: center top; }
        .hero-figure .wave { object-position: center top; }
        .bubble {
          position: absolute; z-index: 2; left: clamp(-70px, -5vw, -24px); top: 13%;
          background: var(--ink); color: var(--on-ink); text-decoration: none;
          font: 600 clamp(16px, 1.4vw, 20px)/1 var(--font-sans); padding: 16px 22px; border-radius: 22px 22px 4px 22px;
          box-shadow: 4px 4px 0 var(--green); transition: transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out);
        }
        .bubble::after { content: ''; position: absolute; right: -9px; bottom: 0; width: 18px; height: 18px; background: var(--ink); clip-path: polygon(0 0, 100% 100%, 0 100%); }
        .bubble:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--green); }
        @media (max-width: 820px) {
          .hero { grid-template-columns: 1fr !important; min-height: 0 !important; }
          .hero-figure { max-width: 340px; margin-left: 24px; }
          .bubble { left: -24px; top: 8%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-figure .wave { display: none; }
          .hero-figure .still { display: block; }
          .bubble { transition: none; }
        }
      `}</style>
    </section>
  )
}

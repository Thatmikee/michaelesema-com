import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Process from '../components/Process'
import Toolkit from '../components/Toolkit'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

const TITLE = 'About Michael Esema | Graphic and Multimedia Designer'
const DESC = 'Michael Esema, graphic and multimedia designer in Manchester. Designing since 2018. BSc Accounting, MBA, MSc International Business Management (Merit), Lean Six Sigma.'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href="https://michaelesema.com/about" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content="https://michaelesema.com/about" />
      </Helmet>
      <Nav />
      <main id="main-content" style={{ paddingTop: 72 }}>
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'end' }} data-grid="about-hero">
            <div>
              <h1 style={{ font: '600 clamp(36px, 5vw, 64px)/1.03 var(--font-sans)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>
                About
              </h1>
              <p className="lede">
                I grew up in Nigeria and live in Manchester. I am a graphic and multimedia designer with an
                accountant's training, which means I ask what a piece of design has to achieve before I ask
                how it should look.
              </p>
            </div>
            <div className="tile" style={{ aspectRatio: '4 / 5', maxWidth: 420, justifySelf: 'end' }}>
              <img src="/michael-esema-hero.jpg" alt="Michael Esema" loading="eager" />
            </div>
          </div>
        </section>
        <Process />
        <Toolkit />
        <Connect />
      </main>
      <Footer />
      <style>{`@media (max-width: 760px) { [data-grid="about-hero"] { grid-template-columns: 1fr !important; } [data-grid="about-hero"] .tile { justify-self: start; max-width: 320px; } }`}</style>
    </>
  )
}

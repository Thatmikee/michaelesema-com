import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

const TITLE = 'About Michael Esema | Graphic and Multimedia Designer'
const DESC = 'Michael Esema is a graphic and multimedia designer based in the UK, originally from Nigeria, with a background in accounting and business management.'

const QUALS: [string, string][] = [
  ['BSc (Hons) Accounting, 2018', 'Benson Idahosa University'],
  ['Master of Business Administration, 2022', 'Nigerian Defence Academy'],
  ['MSc International Business Management, Merit, 2024', 'Manchester Metropolitan University'],
  ['Lean Six Sigma Certification, 2025', ''],
]

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="about-block" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'clamp(20px, 5vw, 80px)', padding: 'clamp(36px, 5vw, 64px) 0', borderTop: '1px solid var(--border-mid)' }}>
      <h2 style={{ font: '700 clamp(24px, 2.8vw, 38px)/1.05 var(--font-sans)', letterSpacing: '-0.03em', color: 'var(--ink)' }}>{title}</h2>
      <div className="about-copy">{children}</div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content="https://michaelesema.com/about" />
      </Helmet>
      <Nav />
      <main id="main-content" style={{ paddingTop: 'clamp(110px, 12vw, 160px)' }}>
        <div className="wrap">
          <div className="about-top" style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 'clamp(24px, 5vw, 80px)', alignItems: 'end', paddingBottom: 'clamp(40px, 6vw, 80px)' }}>
            <div>
              <h1 className="display">About</h1>
              <div className="about-copy" style={{ marginTop: 'clamp(22px, 3vw, 40px)' }}>
                <p>I’m Michael Esema, a graphic and multimedia designer based in the UK, originally from Nigeria.</p>
                <p>
                  My background is a little different. I trained as an accountant and studied business management, so I
                  tend to think about what a design needs to achieve before deciding how it should look. I enjoy bringing
                  those two sides together: creative thinking and practical problem-solving.
                </p>
              </div>
            </div>
            <div className="plate" style={{ aspectRatio: '4 / 5' }}>
              <img src="/michael-esema-portrait.jpg" alt="Michael Esema" width={1000} height={1249} style={{ objectPosition: 'center top' }} />
            </div>
          </div>

          <Block title="How I got here">
            <p>
              My design journey started in 2018 when I became part-time Design Lead for Silent Party 9ja, an events brand
              in Nigeria. I worked on its visual identity and promotional materials, helping the brand connect with its
              audience.
            </p>
            <p>
              In 2019, I joined B’s Hive Hotels &amp; Suites in Abuja as Head Accountant. Alongside my finance
              responsibilities, I designed the hotel’s logo and letterhead, created promotional materials and managed its
              social media. Over time, I became involved in the wider running of the business.
            </p>
            <p>
              Later, I founded a security technology start-up, Mykei Securities Ltd. That gave me another opportunity to
              bring design and business together. I developed its brand identity, website and publications, while also
              working on the product and its wider direction. The company has a UK patent application.
            </p>
            <p>
              Since moving to the UK, I’ve continued taking on independent creative projects, working with small
              businesses and developing ideas of my own.
            </p>
            <p>
              I enjoy the whole process, from understanding a brief and exploring ideas to refining the details and
              preparing the finished work.
            </p>
          </Block>

          <Block title="Beyond design">
            <p>My academic background includes:</p>
            <ul style={{ listStyle: 'none', display: 'grid', gap: 16, margin: '6px 0 10px' }}>
              {QUALS.map(([q, where]) => (
                <li key={q}>
                  <span style={{ display: 'block', color: 'var(--ink)', fontWeight: 600 }}>{q}</span>
                  {where && <span style={{ display: 'block' }}>{where}</span>}
                </li>
              ))}
            </ul>
            <p>
              These qualifications have shaped how I approach projects. They help me think about audiences, business
              objectives, budgets, consistency and the details that make creative work useful.
            </p>
          </Block>

          <Block title="Tools and approach">
            <p>I work with Photoshop, Illustrator, InDesign, Figma, Canva, CapCut and Blender.</p>
            <p>
              Whether I’m developing a brand identity, designing a marketing campaign, laying out a publication or
              creating multimedia content, I want the finished work to look considered, communicate clearly and serve a
              purpose.
            </p>
            <p style={{ color: 'var(--ink)', fontWeight: 600 }}>Good design should look right, feel right and work.</p>
          </Block>
        </div>
        <Connect />
      </main>
      <Footer />
      <style>{`
        .about-copy { display: grid; gap: 18px; font: 400 clamp(17px, 1.45vw, 20px)/1.6 var(--font-sans); color: var(--text-secondary); max-width: 62ch; }
        @media (max-width: 760px) {
          .about-top, .about-block { grid-template-columns: 1fr !important; }
          .about-top .plate { max-width: 320px; }
        }
      `}</style>
    </>
  )
}

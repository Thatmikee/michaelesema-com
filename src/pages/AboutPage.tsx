import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Michael Esema | Finance and International Business Analysis'

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', "Michael Esema, finance and international business analyst based in Manchester. BSc Accounting, MBA, MSc International Business Management.")

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://michaelesema.com/about')

    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'mainEntity': {
        '@id': 'https://michaelesema.com/#person',
        '@type': 'Person',
        'name': 'Michael Esema',
        'jobTitle': 'Finance and International Business Analyst',
        'description': 'Finance and international business analyst based in Manchester. BSc Accounting, MBA, MSc International Business Management.',
        'knowsAbout': ['Financial analysis', 'International business', 'Trade', 'Development finance', 'Data visualisation', 'Power BI', 'Graphic design', 'Brand identity', 'Web design', 'Entrepreneurship', 'Asset integrity'],
        'alumniOf': [
          { '@type': 'CollegeOrUniversity', 'name': 'Manchester Metropolitan University' },
          { '@type': 'CollegeOrUniversity', 'name': 'Nigerian Defence Academy' },
          { '@type': 'CollegeOrUniversity', 'name': 'Benson Idahosa University' },
        ],
        'url': 'https://michaelesema.com/about',
        'sameAs': [
          'https://www.linkedin.com/in/michaelesema',
          'https://michaelesema.com',
          'https://mykei.io',
        ],
      },
    })
    document.head.appendChild(schema)
    return () => { document.head.removeChild(schema) }
  }, [])

  return (
    <>
      <Helmet>
        <title>About Michael Esema | Finance and International Business Analysis</title>
        <meta name="description" content="Michael Esema, finance and international business analyst based in Manchester. BSc Accounting, MBA, MSc International Business Management." />
        <link rel="canonical" href="https://michaelesema.com/about" />
        <meta property="og:title" content="About Michael Esema | Finance and International Business Analysis" />
        <meta property="og:description" content="Finance and international business analyst based in Manchester. BSc Accounting, MBA, MSc International Business Management." />
        <meta property="og:url" content="https://michaelesema.com/about" />
      </Helmet>
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <About />

        {/* LinkedIn CTA */}
        <section style={{
          background: 'var(--dark)',
          padding: '72px 40px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-on-dark)',
              marginBottom: 16,
            }}>
              Connect
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontWeight: 400,
              color: '#F5F5F0',
              marginBottom: 20,
              lineHeight: 1.25,
            }}>
              Follow the build on LinkedIn
            </h2>
            <p style={{
              fontSize: 15.5,
              lineHeight: 1.8,
              color: 'rgba(245,245,240,0.72)',
              marginBottom: 36,
            }}>
              I post design work in progress, finished sites, and what I learn building
              for small businesses.
            </p>
            <a
              href="https://www.linkedin.com/in/michaelesema"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta-link"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#fff',
                padding: '13px 32px',
                fontSize: 14,
                fontWeight: 700,
                borderRadius: 4,
                letterSpacing: '0.02em',
              }}
            >
              View LinkedIn Profile →
            </a>
          </div>
        </section>
        <style>{`
          /* Global focus outline is teal, which fails 3:1 against this section's
             dark background — override with the light-on-dark accent instead. */
          .about-cta-link:focus-visible { outline: 2px solid var(--accent-on-dark); outline-offset: 3px; }
        `}</style>
      </main>
      <Footer />
    </>
  )
}

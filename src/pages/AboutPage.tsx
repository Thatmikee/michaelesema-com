import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Michael Esema | Graphics & Multimedia Designer | Teal Sand Studios, Manchester'

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', "Michael Esema, graphics and multimedia designer in Manchester. Brand identity and websites for small businesses through Teal Sand Studios. Designer of the Silent Party 9ja site. Previously founder of Mykei Securities Ltd. MBA, MSc.")

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
        'jobTitle': 'Graphics & Multimedia Designer',
        'worksFor': { '@type': 'Organization', 'name': 'Teal Sand Studios' },
        'description': 'Graphics and multimedia designer building brand identities and websites for small businesses. Previously founder of Mykei Securities Ltd.',
        'knowsAbout': ['Graphic design', 'Brand identity', 'Web design', 'Design systems', 'Multimedia design', 'Entrepreneurship', 'Asset integrity'],
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
        <title>About Michael Esema | Graphics & Multimedia Designer | Teal Sand Studios, Manchester</title>
        <meta name="description" content="Michael Esema, graphics and multimedia designer in Manchester. Brand identity and websites for small businesses through Teal Sand Studios. Designer of the Silent Party 9ja site. Previously founder of Mykei Securities Ltd. MBA, MSc." />
        <link rel="canonical" href="https://michaelesema.com/about" />
        <meta property="og:title" content="About Michael Esema | Graphics & Multimedia Designer, Teal Sand Studios" />
        <meta property="og:description" content="Brand identity and websites for small businesses. Designer of the Silent Party 9ja site. Previously founder of Mykei Securities Ltd." />
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
              color: 'var(--gold)',
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
              style={{
                display: 'inline-block',
                background: 'var(--gold)',
                color: 'var(--dark)',
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
      </main>
      <Footer />
    </>
  )
}

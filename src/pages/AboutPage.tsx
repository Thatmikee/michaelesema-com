import { useEffect } from 'react'
import Nav from '../components/Nav'
import About from '../components/About'
import Footer from '../components/Footer'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Michael Esema | Founder & CEO, Mykei Securities | MBA · MSc · Manchester'

    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Michael Esema — Founder & CEO of Mykei Securities Ltd. Nigerian-British entrepreneur based in Manchester, UK. MBA (Nigerian Defence Academy), MSc (Manchester Metropolitan University). Creator of the ADN-1 and originator of Economic Sterilisation.')

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
        'jobTitle': 'Founder & CEO',
        'worksFor': { '@type': 'Organization', 'name': 'Mykei Securities Ltd', 'url': 'https://mykei.io' },
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
      <Nav />
      <main style={{ paddingTop: 64 }}>
        <About />

        {/* LinkedIn CTA */}
        <section style={{
          background: 'var(--dark-bg)',
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
              color: 'var(--text-light)',
              marginBottom: 20,
              lineHeight: 1.25,
            }}>
              Follow the build on LinkedIn
            </h2>
            <p style={{
              fontSize: 15.5,
              lineHeight: 1.8,
              color: 'var(--text-light-secondary)',
              marginBottom: 36,
            }}>
              I share updates on the ADN-1 pilot, Economic Sterilisation research,
              and the reality of building a deep-tech startup from Manchester.
            </p>
            <a
              href="https://www.linkedin.com/in/michaelesema"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--gold)',
                color: 'var(--dark-bg)',
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

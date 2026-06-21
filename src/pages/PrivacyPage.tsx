import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 100 }}>
        <article style={{ maxWidth: 720, margin: '0 auto', padding: '0 40px 96px' }}>

          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-secondary)',
            marginBottom: 24,
          }}>
            Michael Esema
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            marginBottom: 12,
            lineHeight: 1.15,
          }}>
            Privacy & Cookies
          </h1>

          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'var(--text-secondary)',
            marginBottom: 48,
          }}>
            Last updated: 12 June 2026
          </p>

          <div style={{ height: 1, background: 'var(--border)', marginBottom: 48 }} />

          {[
            {
              heading: 'Who this is',
              body: 'This is the personal site of Michael Esema, Founder & CEO of Mykei Securities Ltd (Company No. 16984969), based in Manchester, UK. For any data-related enquiries, contact privacy@mykei.io.',
            },
            {
              heading: 'What data is collected',
              body: 'This site does not operate its own contact or lead-capture forms. If you reach out via LinkedIn or email, that interaction is governed by those platforms\' own privacy policies. Standard server logs (IP address, browser type, referring URL) are processed by Cloudflare, which hosts this site, under its own retention policies.',
            },
            {
              heading: 'Analytics',
              body: 'This site does not currently run any analytics or marketing scripts. If analytics is introduced in the future, it will be disclosed here first and operated on the basis of consent (UK GDPR Art. 6(1)(a)).',
            },
            {
              heading: 'Your rights',
              body: 'Under UK GDPR, you have the right to access, correct, or request erasure of any personal data held. You may also object to processing, request restriction, or lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk. To exercise your rights, email privacy@mykei.io.',
            },
            {
              heading: 'Cookies',
              body: 'This site sets no analytics or marketing cookies. Strictly necessary cookies may be set by Cloudflare to deliver and secure the service. You can manage or delete cookies through your browser settings at any time.',
            },
            {
              heading: 'Changes',
              body: 'This policy may be updated from time to time. The date at the top reflects the most recent revision.',
            },
          ].map(({ heading, body }) => (
            <section key={heading} style={{ marginBottom: 48 }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 400,
                color: 'var(--text-primary)',
                marginBottom: 14,
                borderLeft: '2px solid var(--gold)',
                paddingLeft: 16,
              }}>
                {heading}
              </h2>
              <p style={{
                fontSize: 15,
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                paddingLeft: 18,
              }}>
                {body}
              </p>
            </section>
          ))}

        </article>
      </main>
      <Footer />
    </>
  )
}

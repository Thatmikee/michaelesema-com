import { Helmet } from 'react-helmet-async'
import Crumbs from '../site/Crumbs'

// Policy wording as published; contact address and date updated 28 November 2026.
const SECTIONS = [
  {
    heading: 'Who this is',
    body: 'This is the personal site of Michael Esema, based in the UK. For any data-related enquiries, contact hello@michaelesema.com.',
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
    body: 'Under UK GDPR, you have the right to access, correct, or request erasure of any personal data held. You may also object to processing, request restriction, or lodge a complaint with the Information Commissioner\'s Office (ICO) at ico.org.uk. To exercise your rights, email hello@michaelesema.com.',
  },
  {
    heading: 'Cookies',
    body: 'This site sets no analytics or marketing cookies. Strictly necessary cookies may be set by Cloudflare to deliver and secure the service. You can manage or delete cookies through your browser settings at any time.',
  },
  {
    heading: 'Changes',
    body: 'This policy may be updated from time to time. The date at the top reflects the most recent revision.',
  },
]

export default function PrivacyPage() {
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main sx-about">
      <Helmet>
        <title>Privacy &amp; Cookies | Michael Esema</title>
        <meta name="description" content="How michaelesema.com handles personal data, server logs and cookies, and how to use your UK GDPR rights." />
        <meta property="og:title" content="Privacy & Cookies | Michael Esema" />
        <meta property="og:description" content="How michaelesema.com handles personal data, server logs and cookies, and how to use your UK GDPR rights." />
        <meta property="og:url" content="https://michaelesema.com/privacy" />
      </Helmet>
      <Crumbs here="Privacy and cookies" />
      <h1 className="sx-page-title">Privacy &amp; Cookies</h1>
      <p className="sx-meta">Last updated: 28 November 2026</p>
      {SECTIONS.map(({ heading, body }) => (
        <section key={heading} className="sx-row">
          <h2 className="sx-label">{heading}</h2>
          <div className="sx-prose"><p>{body}</p></div>
        </section>
      ))}
    </main>
  )
}

import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page not found | Michael Esema</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Nav />
      <main
        style={{
          background: 'var(--bg)',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 80px',
          textAlign: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-text)',
              marginBottom: 18,
            }}
          >
            404
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: 16,
            }}
          >
            This page does not exist.
          </h1>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 28 }}>
            The link may be old or mistyped.
          </p>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              background: 'var(--text-primary)',
              color: '#fff',
              padding: '12px 26px',
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: 2,
            }}
          >
            Back to the home page
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}

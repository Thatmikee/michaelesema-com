import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main id="sx-main" tabIndex={-1} className="sx-main sx-about">
      <Helmet>
        <title>Page not found | Michael Esema</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="sx-page-title">Page not found</h1>
      <div className="sx-prose">
        <p>That address does not lead anywhere on this site.</p>
        <p><Link to="/" className="sx-link">Go to the home page</Link></p>
        <p><Link to="/work" className="sx-link">See the work</Link></p>
      </div>
    </main>
  )
}

import { Link } from 'react-router-dom'

// A visible trail that matches the BreadcrumbList structured data in src/seo.ts.
export default function Crumbs({ here }: { here: string }) {
  return (
    <nav aria-label="Breadcrumb" className="sx-crumbs">
      <ol>
        <li><Link to="/">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{here}</li>
      </ol>
    </nav>
  )
}

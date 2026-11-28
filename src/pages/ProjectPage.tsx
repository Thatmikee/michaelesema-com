import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import NotFoundPage from './NotFoundPage'
import BrandWorld from './BrandWorld'
import { PROJECTS, bySlug } from '../work'

export default function ProjectPage() {
  const { slug } = useParams()
  const p = bySlug(slug)
  if (!p) return <NotFoundPage />
  const next = PROJECTS[(PROJECTS.indexOf(p) + 1) % PROJECTS.length]
  const title = `${p.title} | Michael Esema`
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={p.summary} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={p.summary} />
        <meta property="og:url" content={`https://michaelesema.com/work/${p.slug}`} />
      </Helmet>
      <a href="#main-content" className="sx-skiplink">Skip to main content</a>
      <BrandWorld p={p} w={p.world} next={next} />
    </>
  )
}

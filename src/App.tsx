import { Route } from 'react-router-dom'
import Shell from './site/Shell'
import { Home, Work, Blog, About } from './site/pages'
import ProjectPage from './pages/ProjectPage'
import PrivacyPage from './pages/PrivacyPage'
import NotFoundPage from './pages/NotFoundPage'
import './index.css'

export default function App() {
  return (
    <Shell>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:slug" element={<ProjectPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Shell>
  )
}

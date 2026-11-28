import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import { PROJECTS } from './work'

export { seo } from './seo'

// Every real page, in the order they are written to disk by scripts/prerender.mjs.
export const routes = ['/', '/work', '/blog', '/about', '/privacy', ...PROJECTS.map(p => `/work/${p.slug}`)]

export function render(url: string) {
  return renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  )
}

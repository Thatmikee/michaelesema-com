import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

const app = (
  <StrictMode>
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  </StrictMode>
)

// Pages are prerendered at build time, so the root already holds real markup:
// hydrate it. During development the root is empty, so render from scratch.
const root = document.getElementById('root')!
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

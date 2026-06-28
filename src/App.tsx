import { Routes, Route } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Milestones from './components/Milestones'
import FocusAreas from './components/FocusAreas'
import Work from './components/Work'
import Thinking from './components/Thinking'
import Connect from './components/Connect'
import Footer from './components/Footer'
import NigeriaSection from './components/NigeriaSection'
import PhilosophyPage from './pages/PhilosophyPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import ThesisPage from './pages/ThesisPage'
import ThinkingPage from './pages/ThinkingPage'
import ProtocolPage from './pages/ProtocolPage'
import NotFoundPage from './pages/NotFoundPage'
import GrainOverlay from './components/ui/GrainOverlay'
import './index.css'

function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Milestones />
        <FocusAreas />
        <Work />
        <Thinking />
        <NigeriaSection />
        <Connect />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <GrainOverlay opacity={0.032} />
      {!prefersReducedMotion && <motion.div className="scroll-progress" style={{ scaleX }} />}
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/privacy"   element={<PrivacyPage />} />
        <Route path="/thesis"    element={<ThesisPage />} />
        <Route path="/thinking"  element={<ThinkingPage />} />
        <Route path="/protocol"  element={<ProtocolPage />} />
        <Route path="*"          element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App

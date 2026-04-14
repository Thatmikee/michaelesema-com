import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ESInterview from './components/ESInterview'
import About from './components/About'
import Work from './components/Work'
import Connect from './components/Connect'
import Footer from './components/Footer'
import PhilosophyPage from './pages/PhilosophyPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import ThesisPage from './pages/ThesisPage'
import './index.css'

function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ESInterview />
        <Work />
        <About />
        <Connect />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/privacy"   element={<PrivacyPage />} />
        <Route path="/thesis"    element={<ThesisPage />} />
        <Route path="*"          element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App

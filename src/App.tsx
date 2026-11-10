import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CaseStudy from './components/CaseStudy'
import Films from './components/Films'
import WebWork from './components/WebWork'
import Process from './components/Process'
import Ledger from './components/Ledger'
import Toolkit from './components/Toolkit'
import Connect from './components/Connect'
import Footer from './components/Footer'
import PhilosophyPage from './pages/PhilosophyPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import ThinkingPage from './pages/ThinkingPage'
import NotFoundPage from './pages/NotFoundPage'
import './index.css'

function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <CaseStudy />
        <Films />
        <WebWork />
        <Process />
        <Ledger />
        <Toolkit />
        <Connect />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/philosophy" element={<PhilosophyPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/thinking" element={<ThinkingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

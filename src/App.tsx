import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Connect from './components/Connect'
import Footer from './components/Footer'
import PhilosophyPage from './pages/PhilosophyPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import './index.css'

function App() {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const dot = cursorDotRef.current
    const ring = cursorRingRef.current
    if (!dot || !ring) return

    let ringX = 0, ringY = 0
    let dotX = 0, dotY = 0
    let animId: number

    const move = (e: MouseEvent) => {
      dotX = e.clientX
      dotY = e.clientY
    }

    const animate = () => {
      ringX += (dotX - ringX) * 0.12
      ringY += (dotY - ringY) * 0.12
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    const onEnter = (e: Event) => {
      const el = e.currentTarget as Element
      if (el.matches('a, button, [data-cursor]')) ring.classList.add('hovered')
    }
    const onLeave = (e: Event) => {
      const el = e.currentTarget as Element
      if (el.matches('a, button, [data-cursor]')) ring.classList.remove('hovered')
    }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      <Routes>
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={
          <>
            <Nav />
            <main>
              <Hero />
              <About />
              <Work />
              <Connect />
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </>
  )
}

export default App

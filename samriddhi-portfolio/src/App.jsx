import { useEffect } from 'react'
import Lenis from 'lenis'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Achievements } from './components/Achievements'
import { Interests } from './components/Interests'
import { Coffee } from './components/Coffee'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
      wheelMultiplier: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <Interests />
      <Coffee />
      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Specials from './components/Specials.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import CookingLoader from './components/CookingLoader.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const [cooking, setCooking] = useState(false)

  // Show the cooking animation first, then open the menu page
  const openMenu = () => {
    if (cooking) return
    if (page === 'menu') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setCooking(true)
    setTimeout(() => {
      setPage('menu')
      window.scrollTo(0, 0)
      setCooking(false)
    }, 2800)
  }

  // Go to a section on the home page (switches back to home if needed)
  const goHome = (hash) => {
    const target = hash && hash !== '#home' ? hash : null
    const el = target ? document.querySelector(target) : null
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setPage('home')
    setTimeout(() => {
      const t = target ? document.querySelector(target) : null
      if (t) t.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo(0, 0)
    }, 50)
  }

  return (
    <>
      <Navbar page={page} onMenu={openMenu} onHome={goHome} />
      <main>
        {page === 'home' ? (
          <>
            <Hero onMenu={openMenu} />
            <About onMenu={openMenu} />
            <Specials />
          </>
        ) : (
          <Menu onHome={goHome} />
        )}
      </main>
      <Contact onMenu={openMenu} onHome={goHome} />
      <AnimatePresence>{cooking && <CookingLoader />}</AnimatePresence>
    </>
  )
}
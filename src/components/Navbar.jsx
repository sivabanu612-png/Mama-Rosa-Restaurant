import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { GiMapleLeaf } from 'react-icons/gi'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Specials', href: '#specials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ page, onMenu, onHome }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open || page === 'menu'

  const handleClick = (e, link) => {
    e.preventDefault()
    setOpen(false)
    if (link.label === 'Menu') onMenu()
    else onHome(link.href)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'bg-night/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <nav aria-label="Main navigation" className="wrap flex h-[72px] items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, links[0])} aria-label="Mama Rosa home" className="inline-flex items-center gap-2 no-underline">
          <GiMapleLeaf className="text-sign" size={26} aria-hidden="true" />
          <span className="font-script text-3xl font-bold italic leading-none text-sign">Mama Rosa</span>
        </a>

        <ul className="m-0 hidden list-none items-center gap-8 p-0 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={(e) => handleClick(e, l)} className="text-sm font-bold text-white no-underline transition-colors hover:text-tan">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#locations" className="btn btn-red hidden sm:inline-flex">Order Online</a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="cursor-pointer border-0 bg-transparent text-white lg:hidden"
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-night px-5 pb-6 lg:hidden">
          <ul className="m-0 flex list-none flex-col px-0 py-2">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={(e) => handleClick(e, l)} className="block py-3 text-lg font-bold text-white no-underline hover:text-tan">{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#locations" onClick={() => setOpen(false)} className="btn btn-red">Order Online</a>
        </div>
      )}
    </header>
  )
}
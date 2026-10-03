import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LuTruck } from 'react-icons/lu'
import { HiLocationMarker } from 'react-icons/hi'
import { GiMapleLeaf } from 'react-icons/gi'
import burger from '../assets/burger.png'
import pizza from '../assets/pizza.png'
import fries from '../assets/fries.png'
import chicken from '../assets/chicken.png'
import fish from '../assets/fish.png'



// Placeholder photos. Swap for your own dish photos in src/assets later.
const dishes = [
  { name: 'Juicy Burger', img: burger },
  { name: 'Hot Pizza', img: pizza },
  { name: 'Golden Fries', img: fries },
  { name: 'Crispy Chicken', img: chicken },
  { name: 'Fish & Chips', img: fish },
]

const slideUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero({ onMenu }) {
  const [current, setCurrent] = useState(0)

  // Change the main dish every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % dishes.length), 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-night pb-16 pt-24 text-white"
    >
      <div className="absolute -right-40 top-1/2 hidden h-[900px] w-[900px] -translate-y-1/2 rounded-full bg-sign lg:block" aria-hidden="true" />

      <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Left side: text */}
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.15 }}>
          <motion.p variants={slideUp} className="font-condensed m-0 flex items-center gap-2 text-xl font-semibold uppercase tracking-wide text-sign">
            <GiMapleLeaf aria-hidden="true" /> Mama Rosa Restaurant &amp; Bar
          </motion.p>

          <motion.h1 variants={slideUp} className="font-condensed mb-0 mt-3 text-6xl font-bold uppercase leading-[0.95] sm:text-7xl lg:text-[104px]">
            Good Food.<br />Good People.<br />Feel at Home.
          </motion.h1>

          <motion.p variants={slideUp} className="mb-0 mt-6 max-w-md text-lg text-white/85">
            Fresh flavours, comforting favourites, and a warm table waiting for you.
          </motion.p>

          <motion.div variants={slideUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#locations" className="btn btn-red font-condensed !rounded-lg !px-8 !py-4 text-xl uppercase tracking-wide">
              <LuTruck className="mr-3" size={26} aria-hidden="true" /> Order Now
            </a>
            <button
              type="button"
              onClick={onMenu}
              className="btn btn-white font-condensed cursor-pointer !rounded-lg !px-8 !py-4 text-xl uppercase tracking-wide"
            >
              View Menu
            </button>
          </motion.div>

          <motion.p variants={slideUp} className="mt-10 inline-flex items-center gap-2 text-sm text-white/85">
            <HiLocationMarker className="text-sign" aria-hidden="true" />
            Serving our guests across the Greater Toronto Area
          </motion.p>
        </motion.div>

        {/* Right side: main plate in the middle, small dishes orbiting around it */}
        <motion.div
          className="mx-auto w-full max-w-[560px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="relative aspect-square w-full">
            {/* Dashed ring turning slowly */}
            <div className="spin-slow absolute inset-[8%] rounded-full border-2 border-dashed border-white/50" aria-hidden="true" />

            {/* Orbiting small dishes */}
            <div className="orbit absolute inset-0" aria-hidden="true">
              {dishes.map((dish, i) => {
                const angle = (i / dishes.length) * 2 * Math.PI
                return (
                  <div
                    key={dish.name}
                    className="absolute w-[19%] -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${50 + 42 * Math.sin(angle)}%`, top: `${50 - 42 * Math.cos(angle)}%` }}
                  >
                    <div className="orbit-counter">
                      <img src={dish.img} alt="" className="aspect-square w-full rounded-full border-4 border-white object-cover shadow-lg" />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Main plate: spins in, then spins out for the next dish */}
            <div className="absolute inset-[20%] rounded-full border-8 border-white bg-night shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={dishes[current].name}
                  src={dishes[current].img}
                  alt={dishes[current].name}
                  className="h-full w-full rounded-full object-cover"
                  initial={{ opacity: 0, rotate: -120, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 120, scale: 0.6 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Dish name and dots */}
          <div className="mt-6 text-center" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={dishes[current].name}
                className="font-condensed m-0 text-3xl font-bold uppercase tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {dishes[current].name}
              </motion.p>
            </AnimatePresence>
            <div className="mt-3 flex justify-center gap-2">
              {dishes.map((dish, i) => (
                <button
                  key={dish.name}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Show ${dish.name}`}
                  className={`h-2.5 cursor-pointer rounded-full border-0 transition-all ${i === current ? 'w-8 bg-sign' : 'w-2.5 bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
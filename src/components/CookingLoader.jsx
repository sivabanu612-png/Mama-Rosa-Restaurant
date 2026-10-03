import { motion } from 'framer-motion'
import { GiCookingPot, GiFlame } from 'react-icons/gi'

export default function CookingLoader() {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-56 w-56">
        {/* Steam */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute bottom-40 h-5 w-5 rounded-full bg-white/70"
            style={{ left: `${35 + i * 18}%` }}
            animate={{ y: [0, -90], opacity: [0.8, 0], scale: [0.6, 1.6] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
          />
        ))}

        {/* Pot */}
        <motion.div
          className="absolute inset-x-0 top-10 flex justify-center text-sign"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <GiCookingPot size={150} />
        </motion.div>

        {/* Flames */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-door"
              animate={{ scale: [1, 1.35, 1], y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            >
              <GiFlame size={44} />
            </motion.span>
          ))}
        </div>
      </div>

      <p className="mb-0 mt-4 font-script text-4xl text-sign">Mama Rosa</p>
      <p className="mt-2 text-lg text-white/85">Cooking up our menu&hellip;</p>

      <div className="mt-6 h-1.5 w-56 overflow-hidden rounded-full bg-white/15">
        <motion.div
          className="h-full bg-sign"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.6, ease: 'linear' }}
        />
      </div>
    </motion.div>
  )
}
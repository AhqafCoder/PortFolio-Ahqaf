'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    // Call onComplete after fade animation completes (2.5s + 0.8s fade)
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3300)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" as const }}
        >
      <div className="text-center space-y-6">
        {/* Animated Logo/Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zinc-200 via-white to-zinc-400 bg-clip-text text-transparent">
            Ahqaf Ali
          </h1>
        </motion.div>

        {/* Animated subtitle */}
        <motion.p
          className="text-zinc-400 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" as const }}
        >
          Full-Stack Developer
        </motion.p>

        {/* Loading animation */}
        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
      )}
    </AnimatePresence>
  )
}

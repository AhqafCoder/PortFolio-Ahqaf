'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const hackathonWins = [
  {
    name: "Smart India Hackathon",
    shortName: "SIH",
    year: "2025",
    position: "Winner",
    icon: "🏆"
  },
  {
    name: "Inverthon",
    shortName: "INV",
    year: "2025",
    position: "Winner",
    icon: "🥇"
  },
  {
    name: "Techathon",
    shortName: "TCH",
    year: "2024",
    position: "Winner",
    icon: "🎯"
  }
]

const stats = [
  { label: "Open Source Contributions", value: "1000+", icon: "📊" },
  { label: "Projects Shipped", value: "15+", icon: "🚀" },
  { label: "Hackathons Won", value: "3", icon: "🏆" },
  { label: "Communities Built", value: "2", icon: "👥" }
]

const recognitions = [
  { text: "Member — Google Developer Group (GDG)", icon: "🌐" },
  { text: "Co-Host & Web Team — TEDx Invertis", icon: "🎤" },
  { text: "Organizing Committee — INSPIRE Science Bootcamp", icon: "🔬" },
  { text: "Game Server Hosting & Cloud Deployment", icon: "🎮" },
  { text: "Hardware & System Troubleshooting", icon: "🔧" }
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground starDensity={0.00015} />
        <ShootingStars starColor="#ffffff" trailColor="#666666" minSpeed={10} maxSpeed={25} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />


      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Achievements
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1]"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
          >
            Recognition &
            <br />
            <span className="italic font-medium text-white/90">milestones.</span>
          </motion.h2>
        </div>

        {/* Hackathon Wins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-8 font-semibold">Hackathon Victories</p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {hackathonWins.map((win, index) => (
              <motion.div
                key={win.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative p-6 border border-white/15 rounded-xl bg-black/50 backdrop-blur-sm hover:bg-black/70 hover:border-white/25 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{win.icon}</span>
                  <span className="text-white/50 text-xs font-mono font-bold">{win.year}</span>
                </div>

                <h3 className="text-white text-lg font-bold mb-1" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>{win.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-white/70 text-sm font-semibold">{win.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mb-16 py-10 border-y border-white/15 bg-black/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.08 }}
                className="text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <p className="text-white text-3xl md:text-4xl font-bold" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}>{stat.value}</p>
                </div>
                <p className="text-white/60 text-xs font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-8 font-semibold">Other Recognitions</p>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {recognitions.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.06 }}
                className="flex items-center gap-4 py-4 px-5 border border-white/10 rounded-lg bg-black/50 hover:border-white/20 hover:bg-black/70 transition-all"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white text-sm font-semibold">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

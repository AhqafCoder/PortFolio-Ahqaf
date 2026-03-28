'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground starDensity={0.00015} />
        <ShootingStars starColor="#ffffff" trailColor="#666666" minSpeed={8} maxSpeed={20} />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />



      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
          >
            Builder. Problem-solver.
            <br />
            <span className="italic font-medium text-white/90">Innovation-driven.</span>
          </motion.h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left - Main Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <p
              className="text-white text-lg md:text-xl leading-relaxed font-medium"
              style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}
            >
              I&apos;m a builder focused on creating real-world, high-impact systems that solve actual problems.
            </p>

            <p
              className="text-white/90 text-base md:text-lg leading-relaxed font-normal"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
            >
              With strong expertise in full-stack development, AI workflows, and system design,
              I actively work across software, robotics, IoT, and autonomous systems. I don&apos;t just
              write code — I architect solutions.
            </p>

            <p
              className="text-white/80 text-sm md:text-base leading-relaxed"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
            >
              Currently, I&apos;m leading R&D on a Hybrid VTOL Drone — integrating aerodynamics,
              robotics, and AI for autonomous flight. Alongside this, I work as a Tech Associate
              at the Invertis Incubation Center and contribute to an early-stage startup,
              gaining hands-on experience building production-grade systems in fast-paced environments.
            </p>

            {/* Quote */}
            <div className="pt-6 border-l-2 border-white/30 pl-6 bg-black/30 py-4 rounded-r-lg">
              <p className="text-white/70 text-sm italic leading-relaxed font-medium">
                &ldquo;From web apps to hybrid VTOL drones — I build what others only plan.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right - Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Education */}
            <div>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Education</p>
              <div className="p-5 border border-white/15 rounded-xl bg-black/50 backdrop-blur-sm">
                <p className="text-white text-base font-semibold mb-1">B.Tech Computer Science</p>
                <p className="text-white/70 text-sm font-medium">Invertis University</p>
                <p className="text-white/50 text-xs mt-2 font-medium">2024 — 2028</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Based In</p>
              <p className="text-white text-sm font-semibold">India</p>
              <p className="text-white/60 text-xs mt-1 font-medium">Available for remote work worldwide</p>
            </div>

            {/* Focus Areas */}
            <div>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "AI & Automation",
                  "Autonomous Systems",
                  "System Design"
                ].map((area) => (
                  <span
                    key={area}
                    className="text-white/80 text-xs px-3 py-1.5 border border-white/15 rounded-full bg-black/50 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="p-5 border border-white/15 rounded-xl bg-black/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold">Current R&D</p>
              </div>
              <p className="text-white text-sm font-semibold">Hybrid VTOL Drone</p>
              <p className="text-white/60 text-xs mt-2 leading-relaxed font-medium">
                Autonomous flight system with AI-based navigation, targeting completion by 2026.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

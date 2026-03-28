'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

interface HeroProps {
  splashComplete: boolean
}

export default function Hero({ splashComplete }: HeroProps) {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Resume.pdf'
    link.download = 'Ahqaf_Ali_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    }
  }

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center px-4 md:px-6 py-16 md:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground starDensity={0.00015} />
        <ShootingStars starColor="#ffffff" trailColor="#888888" minSpeed={15} maxSpeed={35} />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />


      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Text Content */}
          <motion.div
            className="space-y-5 text-center lg:text-left order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={splashComplete ? "visible" : "hidden"}
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-black/50">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-[10px] font-semibold">Available for work</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
                style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
              >
                <span className="text-white">Building</span>
                <br />
                <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Intelligent Systems
                </span>
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl text-white/80 font-medium"
                style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}
              >
                & Scalable Tech Products
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-2 max-w-md mx-auto lg:mx-0">
              <p
                className="text-white/90 text-sm md:text-base leading-relaxed font-medium"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
              >
                Hi, I&apos;m <span className="text-white font-bold">Ahqaf Ali</span> — Full-Stack Developer
                and R&D Engineer at the intersection of software, AI, and autonomous systems.
              </p>
              <p
                className="text-white/60 text-xs md:text-sm italic font-medium"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
              >
                From web apps to hybrid VTOL drones — I build what others only plan.
              </p>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 justify-center lg:justify-start">
              {[
                { value: "800+", label: "Contributions" },
                { value: "3x", label: "Hackathon Wins" },
                { value: "15+", label: "Projects" }
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p
                    className="text-white text-lg md:text-xl font-bold"
                    style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-[10px] font-semibold">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="default"
                onClick={() => scrollToSection('projects')}
                className="bg-white text-black hover:bg-white/90 text-sm font-bold px-5 h-10 rounded-lg group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="default"
                onClick={downloadResume}
                className="border-white/25 bg-black/50 hover:bg-white/10 text-sm font-semibold px-5 h-10 rounded-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/AhqafCoder", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/ahqafali", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ahqafaliofficial@gmail.com", label: "Email" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/15 bg-black/50 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Centered with laser flow */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate={splashComplete ? "visible" : "hidden"}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full blur-2xl scale-110" />

              {/* Main Image */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/20 bg-black shadow-2xl">
                <Image
                  src="/profile-image.jpg"
                  alt="Ahqaf Ali"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 288px"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-1 -right-1 px-3 py-1.5 rounded-lg bg-black border border-white/20 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={splashComplete ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-white text-[10px] font-bold">R&D Engineer</p>
                <p className="text-white/50 text-[8px] font-medium">Autonomous Systems</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={splashComplete ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

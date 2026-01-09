'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface HeroProps {
  splashComplete: boolean
}

export default function Hero({ splashComplete }: HeroProps) {
  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/Resume.pdf' // You'll need to add your resume to the public folder
    link.download = 'Ahqaf_Ali_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Profile Image - Shows first on mobile, second on desktop */}
        <motion.div 
          className="flex justify-center lg:justify-end order-1 lg:order-2"
          variants={imageVariants}
          initial="hidden"
          animate={splashComplete ? "visible" : "hidden"}
        >
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-full blur-xl opacity-20 scale-110 animate-pulse"></div>
            
            {/* Main avatar */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 sm:border-4 border-zinc-700 rounded-full overflow-hidden z-10">
              <Image 
                src="/profile-image.jpg"
                alt="Ahqaf Ali"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content - Shows second on mobile, first on desktop */}
        <motion.div 
          className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
          variants={textVariants}
          initial="hidden"
          animate={splashComplete ? "visible" : "hidden"}
        >
          <motion.div className="space-y-3 md:space-y-4" variants={itemVariants}>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="outline" className="border-zinc-600 text-xs">
                Full-Stack Developer
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-xs">
                Open Source Contributor
              </Badge>
              <Badge variant="outline" className="border-zinc-600 text-xs">
                Hackathon Winner
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Ahqaf Ali
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0">
              Results-driven Full-Stack Developer with 800+ GitHub contributions, hackathon winner, 
              and expertise in scalable web applications using Next.js, React, Node.js, and cloud platforms.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black hover:bg-zinc-200 text-sm md:text-base"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={downloadResume}
              className="border-zinc-600 hover:bg-zinc-800 text-sm md:text-base"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-3 md:gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/AhqafCoder" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/ahqafali" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:ahqafaliofficial@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
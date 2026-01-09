'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants for navbar
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-end">
        {/* Navigation Items - Centered on mobile, Right on desktop */}
        <motion.div 
          className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/40 border border-white/20' 
              : 'bg-black/30 border border-white/15'
          }`}
          style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'text-black bg-white'
                  : 'text-white hover:text-zinc-300'
              }`}
              variants={itemVariants}
            >
              {item.name}
            </motion.button>
          ))}
          
          <motion.div variants={itemVariants}>
            <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/Resume.pdf'
              link.download = 'Ahqaf_Ali_Resume.pdf'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
            className="ml-1 text-white hover:text-zinc-300 hover:bg-white/10 text-xs md:text-sm"
          >
            Resume
          </Button>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  )
}
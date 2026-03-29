'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = ["Home", "About", "Experience", "Achievements", "Projects", "Contact"]

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AhqafCoder", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/ahqafali", icon: Linkedin },
    { name: "Email", url: "mailto:ahqafaliofficial@gmail.com", icon: Mail },
    { name: "Portfolio", url: "https://www.ahqafali.site", icon: Globe }
  ]

  return (
    <footer className="relative py-16 md:py-20 overflow-hidden bg-black border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground starDensity={0.00008} />
        <ShootingStars starColor="#ffffff" trailColor="#666666" minSpeed={5} maxSpeed={15} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />


      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Left - Brand */}
          <div className="md:col-span-5">
            <p className="text-white text-xl font-bold mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Ahqaf Ali</p>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-6 font-medium">
              Full-stack developer building intelligent systems, autonomous machines,
              and scalable tech products. Open to collaborations and opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-white/15 bg-black/50 flex items-center justify-center hover:bg-black/70 hover:border-white/30 transition-all"
                    title={link.name}
                  >
                    <IconComponent className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right - Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4 font-bold">Navigate</p>
              <div className="space-y-2.5">
                {navLinks.slice(0, 3).map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-white/80 text-sm font-medium hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4 font-bold">&nbsp;</p>
              <div className="space-y-2.5">
                {navLinks.slice(3).map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-white/80 text-sm font-medium hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4 font-bold">Connect</p>
              <div className="space-y-2.5">
                {socialLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/80 text-sm font-medium hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Large Text */}
        <div className="overflow-hidden mb-12">
          <motion.p
            initial={{ y: 80 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white/[0.06] select-none"
          >
            BUILD · SHIP · REPEAT
          </motion.p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/50 text-xs font-medium">
            © {new Date().getFullYear()} Ahqaf Ali. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <button
              onClick={scrollToTop}
              className="text-white/60 hover:text-white text-xs font-bold transition-colors flex items-center gap-1"
            >
              Back to top <span>↑</span>
            </button>
            <span className="text-white/50 text-xs font-medium">•</span>
            <div className="flex items-center gap-1">
              <span className="text-white/50 text-xs font-medium">Made with</span>
              <motion.span 
                className="text-red-500 text-sm"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              >
                ❤️
              </motion.span>
              <span className="text-white/50 text-xs font-medium">by</span>
              <a 
                href="https://github.com/AhqafCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white text-xs font-medium transition-colors hover:underline"
              >
                ahqafcoder
              </a>
            </div>
            
            
          </div>
        </div>

      </div>
    </footer>
  )
}

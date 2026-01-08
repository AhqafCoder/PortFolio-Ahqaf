'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
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
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Left */}
        <button 
          onClick={() => scrollToSection("#home")}
          className="text-lg font-bold tracking-tight text-white hover:text-zinc-300 transition-colors"
        >
          
        </button>

        {/* Navigation Items - Right (Grouped in rounded container) */}
        <div 
          className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/40 border border-white/20' 
              : 'bg-black/30 border border-white/15'
          }`}
          style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                activeSection === item.href.substring(1)
                  ? 'text-black bg-white'
                  : 'text-white hover:text-zinc-300'
              }`}
            >
              {item.name}
            </button>
          ))}
          
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
            className="ml-1 text-white hover:text-zinc-300 hover:bg-white/10"
          >
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-zinc-300 hover:bg-white/10 rounded-full"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 mx-6">
          <div className="px-4 py-4 space-y-1 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-black bg-white'
                    : 'text-white hover:text-zinc-300 hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <div className="pt-2 mt-2 border-t border-white/10">
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
                  setIsOpen(false)
                }}
                className="w-full text-white hover:text-zinc-300 hover:bg-white/10 rounded-full"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
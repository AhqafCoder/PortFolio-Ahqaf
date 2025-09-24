'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/AhqafCoder",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ahqafali",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:ahqaf.dev@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold">Ahqaf Ali</h3>
            <p className="text-zinc-400 max-w-md">
              Results-driven Full-Stack Developer with 800+ GitHub contributions, hackathon winner,
              and expertise in delivering high-impact web solutions. Always eager to take on new challenges.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Button key={index} variant="ghost" size="icon" asChild>
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-200">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-200">Get in Touch</h4>
            <div className="space-y-2 text-zinc-400">
              <p>ahqafaliofficial@gmail.com</p>
              <p>+91 7084089921</p>
              <p>Available for remote work</p>
              <p>
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Open to freelance projects
                </span>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>© {currentYear} Ahqaf Ali. Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-zinc-400 hover:text-zinc-200"
          >
            Back to top
            <ArrowUp className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
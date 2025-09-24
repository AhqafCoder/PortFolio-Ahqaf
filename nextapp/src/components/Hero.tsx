'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Hero() {
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

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-zinc-950/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="outline" className="border-zinc-600">
                Full-Stack Developer
              </Badge>
              <Badge variant="outline" className="border-zinc-600">
                Open Source Contributor
              </Badge>
              <Badge variant="outline" className="border-zinc-600">
                Hackathon Winner
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Ahqaf Ali
              </span>
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-2xl">
              Results-driven Full-Stack Developer with 800+ GitHub contributions, hackathon winner, 
              and expertise in scalable web applications using Next.js, React, Node.js, and cloud platforms.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-white text-black hover:bg-zinc-200"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={downloadResume}
              className="border-zinc-600 hover:bg-zinc-800"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center lg:justify-start">
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
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-full blur-xl opacity-20 scale-110 animate-pulse"></div>
            
            {/* Main avatar */}
            <Avatar className="w-80 h-80 border-4 border-zinc-700 relative z-10">
              <AvatarImage 
                src="/profile-image.jpg" // You'll need to add your profile image to the public folder
                alt="Ahqaf Ali"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl bg-gradient-to-br from-zinc-700 to-zinc-900">
                AA
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}
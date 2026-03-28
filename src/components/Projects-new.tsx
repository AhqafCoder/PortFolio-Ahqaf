'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    name: "OpenGeek Community App",
    description: "Developer community platform for collaboration, discussions, and resource sharing. Built with industry-grade UI & security, responsive across all devices with role-based authentication.",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Clerk Auth", "Tailwind CSS"],
    liveUrl: "https://community.opengeek.in/",
    githubUrl: "https://github.com/AhqafCoder/OPENGEEK",
    image: "/projects/opengeek-community.png",
    date: "June 2025",
    featured: true
  },
  {
    name: "InvertisPrep App",
    description: "Educational webapp for university students to access previous year questions and notes with gamified learning experience. Winner project of INVERTHON 2025 hackathon.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Gamification"],
    liveUrl: "https://www.invertisprep.in/",
    githubUrl: "https://github.com/AhqafCoder/InvertisPrep",
    image: "/projects/invertisprep.png",
    date: "July 2025",
    featured: true
  },
  {
    name: "Healing Website (UK Client)",
    description: "Professional wellness website developed for an international client from London, UK. My first paid international project with complete UI/UX design and deployment.",
    technologies: ["React", "CSS", "JavaScript", "Professional UI/UX"],
    liveUrl: "https://showershealing.com/",
    githubUrl: "https://github.com/AhqafCoder/DivineEnergyFlow",
    image: "/projects/healing-website.png",
    date: "March 2025",
    featured: true
  },
  {
    name: "Hostel Management Software",
    description: "Comprehensive platform for hostel management with role-based access for Admin, Warden, and Students. Full-stack application with modern architecture.",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "Role-based Auth"],
    liveUrl: "#",
    githubUrl: "https://github.com/AhqafCoder/HMS",
    image: "/projects/hms.png",
    date: "In Progress",
    featured: false
  },
  {
    name: "EZ Code Platform",
    description: "Interactive coding platform for learning programming, algorithms, and DSA through real-time coding challenges. Complete EdTech solution with modern UI.",
    technologies: ["React", "Node.js", "Real-time Challenges", "EdTech"],
    liveUrl: "https://ezcode-xi.vercel.app/",
    githubUrl: "https://github.com/AhqafCoder/ezcode",
    image: "/projects/ezcode.png",
    date: "February 2025",
    featured: false
  },
  {
    name: "OpenGeek Main Site",
    description: "Official website of OpenGeek community featuring events, resources, and community details. Clean, professional design with modern web standards.",
    technologies: ["Next.js", "Tailwind CSS", "Community Features"],
    liveUrl: "https://www.opengeek.in/",
    githubUrl: "https://github.com/AhqafCoder/OPENGEEK",
    image: "/projects/opengeek-main.png",
    date: "May 2025",
    featured: false
  },
  {
    name: "IndiPixel Gaming Site",
    description: "Interactive website for Minecraft server community showcasing game modes, updates, and community integration. Managed 400+ member gaming community.",
    technologies: ["HTML", "CSS", "JavaScript", "Community Management"],
    liveUrl: "https://www.indipixel.online/",
    githubUrl: "https://github.com/AhqafCoder/INDIPIXEL",
    image: "/projects/indipixel.png",
    date: "June 2024",
    featured: false
  },
  {
    name: "CWeb Server Framework",
    description: "Lightweight custom web framework for efficient HTTP request and response handling. Built from scratch to understand server-side fundamentals.",
    technologies: ["Node.js", "Custom Framework", "HTTP Handling"],
    liveUrl: "https://cweb-7pbz.onrender.com/",
    githubUrl: "https://github.com/AhqafCoder/CWEB",
    image: "/projects/cweb.png",
    date: "February 2025",
    featured: false
  },
  {
    name: "DocSmart System",
    description: "Smart document management system for efficient storage, organization, and retrieval. Focus on scalability and user-friendly document handling.",
    technologies: ["React", "Node.js", "Document Management", "Scalable Architecture"],
    liveUrl: "#",
    githubUrl: "https://github.com/AhqafCoder/DocSmart",
    image: "/projects/docsmart.png",
    date: "January 2025",
    featured: false
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A showcase of my recent work, including hackathon winners, client projects, 
            community platforms, and open-source contributions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Featured Work</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 overflow-hidden hover:bg-zinc-900/70 transition-colors">
                <div className="aspect-video relative bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-white text-black">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-zinc-400">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <CardDescription className="text-zinc-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-zinc-600 text-zinc-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3">
                  {project.liveUrl !== "#" && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  <Button variant="outline" asChild size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/70 transition-colors">
                <div className="aspect-video relative bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <div className="flex items-center gap-1 text-xs text-zinc-400">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description.length > 120 
                      ? project.description.substring(0, 120) + "..." 
                      : project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs border-zinc-600 text-zinc-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-zinc-600 text-zinc-300">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2 pt-0">
                  {project.liveUrl !== "#" && (
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                  
                  <Button variant="outline" asChild size="sm" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
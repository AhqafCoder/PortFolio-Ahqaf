'use client'

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const projects = [
  {
    id: 1,
    name: "SIH Aquasense Software",
    description: "Smart India Hackathon winning software for real-time water quality monitoring with autonomous navigation and hyperspectral data collection & analysis.",
    tech: ["IoT", "Real-time Processing", "Cloud", "Autonomous Systems"],
    liveUrl: "#",
    githubUrl: "https://github.com/AhqafCoder",
    year: "2025",
    featured: true
  },
  {
    id: 2,
    name: "AI Crop Recommendation System",
    description: "Intelligent farming solution with 95% crop recommendation accuracy using soil & weather data. Features disease detection (90%), fertilizer optimization (87.5%), and profit prediction (92.3%) with farmer dashboard.",
    tech: ["Machine Learning", "React", "Python", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "https://github.com/AhqafCoder",
    year: "2025",
    featured: true
  },
  
  {
    id: 3,
    name: "OpenGeek Community Platform",
    description: "Developer community platform with modern UI, authentication, and scalable backend.",
    tech: ["Next.js", "Express", "Clerk", "PostgreSQL"],
    liveUrl: "https://community.opengeek.in/",
    githubUrl: "https://github.com/AhqafCoder/OPENGEEK",
    year: "2025",
    featured: true
  },
  {
    id: 4,
    name: "InvertisPrep",
    description: "Gamified EdTech platform providing PYQs, notes, and learning tools. Hackathon winner.",
    tech: ["Next.js", "Node.js"],
    liveUrl: "https://www.invertisprep.in/",
    githubUrl: "https://github.com/AhqafCoder/InvertisPrep",
    year: "2025",
    featured: true
  },
  {
    id: 5,
    name: "Hostel Management System",
    description: "Full-stack system with role-based access for managing hostel operations.",
    tech: ["Next.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/AhqafCoder/HMS",
    year: "2025",
    featured: true
  },
  {
    id: 6,
    name: "WhatsApp CRM Automation",
    description: "Automated CRM workflows using WhatsApp API and HubSpot via n8n.",
    tech: ["n8n", "APIs", "HubSpot"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2025",
    featured: false
  },
  {
    id: 7,
    name: "EZ Code Platform",
    description: "Interactive platform for learning coding and DSA.",
    tech: ["React", "Node.js"],
    liveUrl: "https://ezcode-xi.vercel.app/",
    githubUrl: "https://github.com/AhqafCoder/ezcode",
    year: "2025",
    featured: false
  },
  {
    id: 8,
    name: "Healing Website",
    description: "Production-grade client project with complete UI/UX and deployment. UK Client.",
    tech: ["Next.js"],
    liveUrl: "https://showershealing.com/",
    githubUrl: "https://github.com/AhqafCoder/DivineEnergyFlow",
    year: "2025",
    featured: true
  },
  {
    id: 9,
    name: "CWeb Server",
    description: "Custom lightweight web framework for handling HTTP requests.",
    tech: ["Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    featured: false
  },
  {
    id: 10,
    name: "DocSmart",
    description: "Scalable document management system.",
    tech: ["Full-stack"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    featured: false
  }
]

function Modal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white/60 hover:text-white text-sm font-semibold transition-colors"
          >
            Close ×
          </button>

          <div className="border border-white/15 rounded-xl bg-black/90 p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-2 font-semibold">{project.year}</p>
                <h3 className="text-white text-2xl font-bold">{project.name}</h3>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-8 font-medium">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-white/80 text-xs px-3 py-1.5 border border-white/15 rounded-full bg-black/50 font-medium">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center text-sm text-black bg-white rounded-lg hover:bg-white/90 transition-colors font-bold"
                >
                  View Live
                </a>
              )}
              {project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center text-sm text-white border border-white/30 rounded-lg hover:border-white/50 transition-colors font-semibold"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)
  const [showAll, setShowAll] = useState(false)

  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)
  const displayProjects = showAll ? projects : featured

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground starDensity={0.00012} />
        <ShootingStars starColor="#ffffff" trailColor="#666666" minSpeed={10} maxSpeed={22} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />


      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
            >
              Selected Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1]"
              style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
            >
              Projects that
              <br />
              <span className="italic font-medium text-white/90">shipped.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm max-w-xs font-medium"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
          >
            From web apps to automation systems — real products solving real problems.
          </motion.p>
        </div>

        {/* Projects List */}
        <div className="space-y-3 mb-12">
          {displayProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between py-5 px-4 border border-white/10 rounded-lg bg-black/50 hover:border-white/25 hover:bg-black/70 transition-all">
                <div className="flex items-center gap-5">
                  <span className="text-white/40 text-xs font-mono font-bold w-8">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-bold group-hover:text-white transition-colors" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                      {project.name}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm mt-1 max-w-md font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="hidden md:flex gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-white/60 text-xs font-medium">{t}</span>
                    ))}
                  </div>
                  <span className="text-white/50 text-xs font-semibold">{project.year}</span>
                  <span className="text-white/40 group-hover:text-white transition-colors font-bold">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {!showAll && others.length > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            onClick={() => setShowAll(true)}
            className="text-white/70 text-sm hover:text-white transition-colors font-bold"
          >
            + {others.length} more projects
          </motion.button>
        )}

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Shipped", value: "15+" },
              { label: "GitHub Contributions", value: "800+" },
              { label: "Hackathons Won", value: "3" },
              { label: "Client Projects", value: "2" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white text-2xl md:text-3xl font-bold mb-1" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}>{stat.value}</p>
                <p className="text-white/60 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Modal */}
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

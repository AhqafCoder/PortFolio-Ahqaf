'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const experiences = [
  {
    role: "Tech Associate",
    company: "Invertis Incubation Center",
    period: "2025 — Present",
    type: "current",
    description: [
      "Working on real-world product development and innovation-driven projects",
      "Building scalable and production-ready systems",
      "Collaborating with teams in a startup-like environment"
    ]
  },
  {
    role: "Part-Time Developer",
    company: "EduSphere Technologies",
    period: "2024 — Present",
    type: "current",
    description: [
      "Contributing to early-stage startup product development",
      "Building and scaling tech solutions",
      "Working in fast-paced, execution-focused environment"
    ]
  },
  {
    role: "Developer",
    company: "OpenGeek Tech Community",
    period: "2024 — 2025",
    type: "past",
    description: [
      "Built a full-stack community platform with secure authentication",
      "Designed scalable backend and modern UI",
      "Deployed production-grade system"
    ]
  },
  {
    role: "Discord Community Manager",
    company: "IndiPixel",
    period: "2023 — 2024",
    type: "past",
    description: [
      "Managed and grew a 400+ member tech community",
      "Handled engagement, moderation, and content strategy"
    ]
  }
]

const techStack = {
  "Frontend": [
    { name: "Next.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" }
  ],
  "Backend": [
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Firebase", icon: "🔥" }
  ],
  "AI & Automation": [
    { name: "AI Workflows", icon: "🤖" },
    { name: "n8n", icon: "🔗" },
    { name: "APIs", icon: "🔌" },
    { name: "Prompt Eng.", icon: "💬" }
  ],
  "DevOps & Systems": [
    { name: "Linux", icon: "🐧" },
    { name: "GCP", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "CI/CD", icon: "🔄" }
  ]
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground starDensity={0.00012} />
        <ShootingStars starColor="#ffffff" trailColor="#666666" minSpeed={8} maxSpeed={20} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />


      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Experience & Skills
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1]"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
          >
            Where I&apos;ve
            <br />
            <span className="italic font-medium text-white/90">worked.</span>
          </motion.h2>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm hover:border-white/20 transition-all">
                  {/* Left - Role Info */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${
                        exp.type === 'current' ? 'bg-green-400 animate-pulse' : 'bg-white/40'
                      }`} />
                      <span className={`text-xs tracking-[0.15em] uppercase font-semibold ${
                        exp.type === 'current' ? 'text-white/90' : 'text-white/50'
                      }`}>
                        {exp.type === 'current' ? 'Current' : exp.period}
                      </span>
                    </div>
                    <h3 className="text-white text-lg md:text-xl font-bold" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>{exp.role}</h3>
                    <p className="text-white/70 text-sm font-medium">{exp.company}</p>
                  </div>

                  {/* Right - Description */}
                  <div className="md:w-2/3">
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-white/50 mt-1.5 font-bold">—</span>
                          <span className="text-white/80 text-sm leading-relaxed font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="p-6 border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm"
        >
          <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-8 font-semibold">Technical Stack</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {Object.entries(techStack).map(([category, items], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + catIndex * 0.1 }}
              >
                <p className="text-white text-sm font-bold mb-4">{category}</p>
                <div className="space-y-3">
                  {items.map((tech) => (
                    <div key={tech.name} className="flex items-center gap-3 group/item">
                      <span className="text-lg group-hover/item:scale-110 transition-transform">{tech.icon}</span>
                      <span className="text-white/70 text-sm font-medium group-hover/item:text-white transition-colors">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Working On */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-6 font-semibold">Currently Working On</p>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Hybrid VTOL Drone", icon: "🚁" },
              { name: "AI-integrated Systems", icon: "🧠" },
              { name: "Automation Workflows", icon: "⚙️" },
              { name: "Startup Products", icon: "🚀" }
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.05 }}
                className="flex items-center gap-3 px-4 py-3 border border-white/15 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-white text-sm font-semibold">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

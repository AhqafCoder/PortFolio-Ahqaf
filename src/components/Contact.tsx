'use client'

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
import { Mail, MessageCircle, Send, Github, Linkedin, ExternalLink } from "lucide-react"

const contactMethods = [
  {
    name: "Email",
    description: "Best for professional inquiries",
    value: "ahqafaliofficial@gmail.com",
    href: "mailto:ahqafaliofficial@gmail.com",
    icon: Mail,
    color: "hover:border-red-500/50 hover:bg-red-500/5",
    iconBg: "bg-red-500/10 text-red-400",
  },
  {
    name: "WhatsApp",
    description: "Quick responses",
    value: "+91 XXXXXXXXXX",
    href: "https://wa.me/91XXXXXXXXXX?text=Hi%20Ahqaf!%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect.",
    icon: MessageCircle,
    color: "hover:border-green-500/50 hover:bg-green-500/5",
    iconBg: "bg-green-500/10 text-green-400",
  },
  {
    name: "Telegram",
    description: "For instant messaging",
    value: "@ahqafali",
    href: "https://t.me/ahqafali",
    icon: Send,
    color: "hover:border-blue-500/50 hover:bg-blue-500/5",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
]

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AhqafCoder",
    icon: Github,
    stats: "1000+ contributions",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ahqafali",
    icon: Linkedin,
    stats: "Connect professionally",
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <StarsBackground starDensity={0.0001} />
        <ShootingStars starColor="#ffffff" trailColor="#666666" minSpeed={6} maxSpeed={18} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
          >
            Let&apos;s build
            <br />
            <span className="italic font-medium text-white/90">something together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-medium"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
          >
            Got a project idea? Want to collaborate? Or just want to say hi?
            Reach out through any of these channels.
          </motion.p>
        </div>

        

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Availability Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="p-6 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <span className="w-3 h-3 rounded-full bg-green-400 block" />
                <span className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
              </div>
              <span className="text-white text-base font-bold">Available for work</span>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-4 font-medium">
              Currently open to freelance projects, full-time opportunities, and exciting collaborations.
              Specializing in full-stack development, AI integration, and autonomous systems.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Freelance", "Full-time", "Contract", "Remote"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold text-white/60 border border-white/10 rounded-full bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-6 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm"
          >
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-5 font-semibold">
              Also find me on
            </p>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-white/10 rounded-xl bg-black/30 hover:border-white/25 hover:bg-white/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <link.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-bold">{link.name}</p>
                    <p className="text-white/50 text-xs font-medium">{link.stats}</p>
                  </div>
                  <span className="text-white/30 group-hover:text-white/60 transition-colors">→</span>
                </a>
              ))}
            </div>

            {/* Quick Email CTA */}
            <a
              href="mailto:ahqafaliofficial@gmail.com"
              className="mt-4 block w-full py-3 text-center text-sm font-bold text-black bg-white rounded-xl hover:bg-white/90 transition-colors"
            >
              Send me an email →
            </a>
          </motion.div>
        </div>

        {/* Response Time Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-white/40 text-xs mt-10 font-medium"
        >
          Usually responds within 24 hours
        </motion.p>

      </div>
    </section>
  )
}

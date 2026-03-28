'use client'

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const links = [
  { label: "GitHub", href: "https://github.com/AhqafCoder", icon: "⌨️" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ahqafali", icon: "💼" },
  { label: "Email", href: "mailto:ahqafaliofficial@gmail.com", icon: "✉️" },
  { label: "Portfolio", href: "https://www.ahqafali.site", icon: "🌐" }
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

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
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4 font-semibold"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
          >
            Let&apos;s build
            <br />
            <span className="italic font-medium text-white/90">something together.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-6 border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm"
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-16 text-center"
              >
                <p className="text-white text-xl font-bold mb-2">Message sent.</p>
                <p className="text-white/60 text-sm font-medium">I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-black/50 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-black/50 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/60 text-xs tracking-[0.2em] uppercase mb-3 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-black/50 border border-white/15 rounded-lg px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-white/40 transition-colors resize-none placeholder:text-white/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 text-sm text-black bg-white rounded-lg hover:bg-white/90 transition-colors font-bold tracking-wide"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            {/* Availability */}
            <div className="p-5 border border-white/10 rounded-xl bg-black/50">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-sm font-bold">Available for work</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                Open to freelance projects, full-time roles, and collaborations.
                Currently working on autonomous systems and startup products.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-6 font-semibold">Connect</p>
              <div className="space-y-3">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="group flex items-center gap-4 py-3 px-4 border border-white/10 rounded-lg bg-black/50 hover:border-white/25 hover:bg-black/70 transition-all"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-white text-sm font-semibold group-hover:text-white transition-colors flex-1">
                      {link.label}
                    </span>
                    <span className="text-white/40 group-hover:text-white transition-colors font-bold">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Direct */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/50 text-xs tracking-[0.2em] uppercase mb-4 font-semibold">Direct</p>
              <a
                href="mailto:ahqafaliofficial@gmail.com"
                className="text-white text-sm font-bold hover:text-white/80 transition-colors"
              >
                ahqafaliofficial@gmail.com
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}

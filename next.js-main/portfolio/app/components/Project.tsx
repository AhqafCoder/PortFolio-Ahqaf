"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Abhiruchi the Hobby Club",
    description: "Modern tech company website with sleek UI, service showcases, and professional branding.",
    longDesc: "A polished technology company website featuring service showcases, professional branding, smooth animations, and a modern layout. Built to highlight IT solutions and digital services with a clean, conversion-focused design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    color: "#00ff88",
    preview: "Screenshot from 2026-03-17 22-37-34.png",
    liveUrl: "https://abhiruchi-i-tech.vercel./",
    githubUrl: "#",
  },




  {
    id: 2,
    title: "Chandan's Portfolio",
    description: "Personal portfolio site with project showcases, skills section, and contact form.",
    longDesc: "A fully responsive personal portfolio website showcasing projects, technical skills, and professional experience. Features smooth scroll animations, a dynamic project grid, contact form, and a clean modern aesthetic that reflects a developer's personal brand.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    year: "2024",
    color: "#00cc6a",
    preview: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    liveUrl: "https://chandansite.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "TrimTrend",
    description: "Salon & barbershop booking platform with service listings and appointment scheduling.",
    longDesc: "A full-featured salon and barbershop web application with service catalog, stylist profiles, appointment booking, and gallery showcases. Designed for a seamless customer experience with a modern aesthetic tailored to the grooming industry.",
    tags: ["React", "Node.js", "Tailwind CSS", "Booking API"],
    year: "2024",
    color: "#00ffaa",
    preview: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
    liveUrl: "https://trim-trend.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "The Hungry Snake Game",
    description: "Classic snake game reimagined with smooth controls, score tracking, and modern visuals.",
    longDesc: "A fun and addictive browser-based snake game built with vanilla JavaScript and Canvas API. Features smooth directional controls, progressive speed increase, high score tracking, and a polished retro-modern visual style. Great showcase of game loop logic and DOM manipulation.",
    tags: ["JavaScript", "Canvas API", "HTML5", "CSS3"],
    year: "2024",
    color: "#33ff99",
    preview: "image.png",
    liveUrl: "https://chandan-team.netlify.app/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "The Takshsila Library",
    description: "Self-study zone website for Oxy Reading Zone Bhilai — features, gallery, and contact.",
    longDesc: "A professional website for The Takshsila Library, a modern self-study destination in Bhilai. Showcases the library's features like personal cabins, AC facilities, CCTV security, and 500+ happy students. Includes a gallery, video section, timings (7 AM–10 PM daily), and a contact form — all wrapped in a clean, student-friendly design.",
    tags: ["React", "Tailwind CSS", "Vercel", "Responsive Design"],
    year: "2024",
    color: "#00e07a",
    preview: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
    liveUrl: "https://takshsila-library.vercel.app/",
    githubUrl: "#",
  },
];

function Modal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(20px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
          style={{ background: "#0a0a0a", border: "1px solid rgba(0,255,136,0.2)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Preview Image */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.preview}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.5)" }}
            />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)`
            }} />
            <div className="absolute top-4 right-4">
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:border-[#00ff88] transition-all"
              >
                ✕
              </button>
            </div>
            <div className="absolute bottom-4 left-6">
              <span className="text-[#00ff88] text-xs font-bold tracking-widest uppercase">
                {project.year}
              </span>
              <h3 className="text-3xl font-black text-white">{project.title}</h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-white/60 text-base leading-relaxed mb-6">{project.longDesc}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-bold border border-[#00ff88]/30 text-[#00ff88] bg-[#00ff88]/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,136,0.4)" }}
                className="flex-1 py-3 rounded-full font-bold text-black bg-[#00ff88] text-center text-sm"
              >
                Live Preview →
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex-1 py-3 rounded-full font-bold text-[#00ff88] border border-[#00ff88]/40 text-center text-sm hover:bg-[#00ff88]/10 transition-all"
              >
                View Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32"
      style={{ background: "#000000", fontFamily: "'Syne', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-10 h-px bg-[#00ff88]" />
          <span className="text-[#00ff88] text-sm font-bold tracking-[0.3em] uppercase">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
        >
          Selected{" "}
          <span className="text-[#00ff88]">Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-white/40 mb-16"
        >
          Click any project to see full details
        </motion.p>

        {/* Grid — 5 cards: 2+2 then last centered */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setSelected(project)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer${
                i === 4 ? " md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""
              }`}
              style={{ border: "1px solid rgba(0,255,136,0.1)" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ filter: "brightness(0.4)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 30%, #0a0a0a 100%)" }}
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="px-3 py-1 rounded-full bg-[#00ff88] text-black text-xs font-bold">
                    View →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#050505]">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-black text-white group-hover:text-[#00ff88] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-white/30 text-xs font-mono">{project.year}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-[#00ff88]/5 text-[#00ff88] border border-[#00ff88]/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-md text-white/30">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0,255,136,0.3)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>
    </section>
  );
}
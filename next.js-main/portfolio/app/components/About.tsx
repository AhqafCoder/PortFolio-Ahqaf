"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#000000", fontFamily: "'Syne', sans-serif" }}
    >
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-10 h-px bg-[#00ff88]" />
          <span className="text-[#00ff88] text-sm font-bold tracking-[0.3em] uppercase">About Me</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow frame */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, #00ff88 0%, transparent 60%)",
                  padding: "1px",
                }}
              >
                <div className="w-full h-full rounded-3xl bg-[#050505]" />
              </div>

              {/* Photo - full square fill */}
              <div className="absolute inset-[1px] rounded-3xl overflow-hidden">
                <Image
                  src="/chand.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
              Crafting{" "}
              <span className="text-[#00ff88]">beautiful</span>,<br />
              responsive UIs.
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-6">
              I'm a <span className="text-[#00ff88] font-bold">Frontend Developer</span> and B.Tech CSE student 
              at <span className="text-white/70 font-semibold">Invertis University, Bareilly, Uttar Pradesh</span>. 
              I specialize in building modern, responsive, and visually stunning web interfaces 
              that deliver exceptional user experiences.
            </p>

            <p className="text-white/40 text-base leading-relaxed mb-10">
              I'm actively open to <span className="text-[#00ff88]/70 font-semibold">freelance projects</span> — 
              whether it's landing pages, portfolio sites, dashboards, or complete web apps. 
              I bring clean code, on-time delivery, and pixel-perfect design to every project. 
              Let's build something amazing together!
            </p>

            {/* Skills / Highlight Tags */}
            <div className="flex flex-wrap gap-3">
              {["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Framer Motion", "Responsive Design", "Freelance Ready ✅"].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.05 }}
                  className="border border-[#00ff88]/30 rounded-full px-4 py-2 text-sm font-semibold text-[#00ff88] bg-[#00ff88]/5 hover:border-[#00ff88]/60 hover:bg-[#00ff88]/10 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>
    </section>
  );
}
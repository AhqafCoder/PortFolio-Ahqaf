"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "React",
    category: "Frontend",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
    desc: "UI Library",
  },
  {
    name: "Next.js",
    category: "Framework",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" fill="white"/>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.833 14.617L9.214 8H8v8.003h1.333v-5.86l5.867 7.82c-.38.144-.77.257-1.2.334zM15.333 8h1.334v8h-1.334V8z" fill="#000000"/>
      </svg>
    ),
    desc: "React Framework",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 17.85 9.5 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#06B6D4"/>
      </svg>
    ),
    desc: "CSS Framework",
  },
  {
    name: "JavaScript",
    category: "Language",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
        <path d="M6.235 18.98c.372.614.87 1.067 1.741 1.067.73 0 1.196-.364 1.196-.868 0-.603-.479-.817-1.282-1.168l-.44-.189c-1.27-.541-2.115-1.219-2.115-2.652 0-1.32.005-2.634 1.908-2.634 1.258 0 2.105 1.085 2.105 1.085l-1.152.74s-.34-.604-.956-.604c-.627 0-.963.38-.963.875 0 .612.376.86 1.247 1.238l.44.189c1.496.642 2.353 1.297 2.353 2.765 0 1.585-1.246 2.777-3.095 2.777-1.735 0-2.853-.926-3.399-2.14l1.212-.481zM13.076 13.663h1.561v5.532c0 .792.321 1.063.83 1.063.51 0 .83-.271.83-1.063v-5.532h1.561v5.516c0 1.692-.965 2.509-2.391 2.509-1.427 0-2.391-.817-2.391-2.509v-5.516z" fill="#000"/>
      </svg>
    ),
    desc: "Programming Language",
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="24" height="24" rx="2" fill="#3178C6"/>
        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.069-.248-.079-.383-.034-.529.122-.45.487-.56.867-.479.232 0 .456.062.66.189.167.112.327.302.428.492.398-.26.398-.26.679-.445-.106-.164-.155-.224-.224-.313-.241-.295-.568-.449-1.092-.449l-.28.017c-.735.049-1.22.47-1.355 1.126-.056.29-.04.565.063.818.295.848 1.117 1.087 1.9 1.376.358.155.735.375.826.688.098.427-.12.868-.616.957-.347.082-.674.023-.95-.181-.23-.164-.383-.354-.525-.625-.31.176-.31.176-.636.357-.046.029-.089.055-.133.083.12.29.293.549.521.756.536.48 1.256.641 1.964.547.86-.116 1.514-.663 1.663-1.521l.017-.114c.029-.154.049-.311.056-.47zm-7.427 2.248c-.106.463-.409.821-.878.949-.361.097-.772.046-1.078-.196-.249-.199-.385-.454-.505-.753-.301.195-.574.37-.88.566.128.282.28.547.494.766.545.548 1.298.756 2.035.617.75-.141 1.334-.619 1.51-1.362.131-.554.066-1.14-.194-1.658l-.051-.094-.64.411c.127.36.238.714.187 1.054z" fill="white"/>
      </svg>
    ),
    desc: "Typed JavaScript",
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082 c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.275-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" fill="#339933"/>
      </svg>
    ),
    desc: "JS Runtime",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
      </svg>
    ),
    desc: "Animation Library",
  },
  {
    name: "Git & GitHub",
    category: "DevOps",
    logo: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717"/>
      </svg>
    ),
    desc: "Version Control",
  },
];

const tools = ["VS Code", "Figma", "Vercel", "Postman", "Notion", "Chrome DevTools"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: "#000000", fontFamily: "'Syne', sans-serif" }}
    >
      {/* BG Glow */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-4 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-10 h-px bg-[#00ff88]" />
          <span className="text-[#00ff88] text-sm font-bold tracking-[0.3em] uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-white mb-16 tracking-tighter"
        >
          My Tech{" "}
          <span className="text-[#00ff88]">Arsenal</span>
        </motion.h2>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-20">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.05 * i + 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                scale: 1.06,
                borderColor: "rgba(0,255,136,0.6)",
                boxShadow: "0 0 30px rgba(0,255,136,0.15)",
              }}
              className="relative group cursor-default rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col items-center gap-4 transition-all duration-300"
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Glow on hover bg */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(circle at center, rgba(0,255,136,0.06), transparent 70%)" }}
              />

              {/* Category badge */}
              <span className="absolute top-3 right-3 text-[9px] px-2 py-0.5 rounded-full border border-[#00ff88]/20 text-[#00ff88]/60 uppercase tracking-wider font-bold">
                {skill.category}
              </span>

              {/* Logo */}
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {skill.logo}
              </motion.div>

              {/* Name */}
              <div className="relative z-10 text-center">
                <div className="text-white font-black text-base tracking-tight group-hover:text-[#00ff88] transition-colors duration-300">
                  {skill.name}
                </div>
                <div className="text-white/30 text-xs mt-0.5 font-medium">
                  {skill.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Belt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-white/40 text-sm font-bold tracking-[0.3em] uppercase mb-6">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 * i + 0.7 }}
                whileHover={{ scale: 1.08, borderColor: "#00ff88", color: "#00ff88" }}
                className="px-4 py-2 rounded-full border border-white/10 text-white/50 text-sm font-medium cursor-default transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>
    </section>
  );
}
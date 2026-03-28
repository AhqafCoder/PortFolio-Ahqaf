"use client";
import { motion } from "framer-motion";

const links = {
  Navigation: ["Home", "About", "Skills", "Projects", "Contact"],
  Connect: [
    { name: "GitHub", url: "https://github.com/chandanXcoder" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/chandan-verma-5b3b0337b" },
    { name: "Instagram", url: "https://www.instagram.com/__mr._chand__810__" },
    { name: "Email", url: "mailto:chaandanverma@gmail.com" },
  ],
  Services: ["Web Development", "UI/UX Design", "Consulting", "Code Review"],
};

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden border-t border-white/5"
      style={{ background: "#000000", fontFamily: "'Syne', sans-serif" }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00ff88, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black mb-4 block"
              style={{ color: "#00ff88", letterSpacing: "-0.04em" }}
            >
              {"<Dev />"}
            </motion.a>

            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Crafting digital experiences with passion and precision.
              Available worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: "⌨️", url: "https://github.com/chandanXcoder" },
                { icon: "💼", url: "https://www.linkedin.com/in/chandan-verma-5b3b0337b" },
                { icon: "📸", url: "https://www.instagram.com/__mr._chand__810__" },
                { icon: "✉️", url: "mailto:chaandanverma@gmail.com" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:border-[#00ff88]/40 hover:bg-[#00ff88]/10 transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h5 className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">
                {category}
              </h5>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={typeof item === "string" ? item : item.name}>
                    <a
                      href={typeof item === "string" ? "#" : item.url}
                      target={typeof item === "string" ? "_self" : "_blank"}
                      className="text-white/50 text-sm hover:text-[#00ff88] transition-colors duration-200"
                    >
                      {typeof item === "string" ? item : item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Big Text */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: 60 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[8vw] font-black tracking-tighter leading-none text-transparent select-none"
            style={{ WebkitTextStroke: "1px rgba(0,255,136,0.1)" }}
          >
            LET'S CREATE
          </motion.p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          <p className="text-white/20 text-sm">
            © {new Date().getFullYear()} Chandan Verma. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-white/20 text-sm">
              Built with Next.js & Framer Motion
            </span>
          </div>

          <div className="flex gap-6">
            {["Privacy", "Terms"].map((item) => (
              <a key={item} href="#" className="text-white/20 text-sm hover:text-[#00ff88] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>
    </footer>
  );
}
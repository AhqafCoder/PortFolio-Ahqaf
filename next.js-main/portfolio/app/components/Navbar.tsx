"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !dark);
  }, [dark]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-[#00ff88]/10 shadow-[0_0_40px_rgba(0,255,136,0.05)]"
            : "bg-transparent"
        }`}
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter"
            style={{ color: "#00ff88", letterSpacing: "-0.04em" }}
          >
            {"<Chandan/>"}
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="relative text-sm font-medium text-white/60 hover:text-[#00ff88] transition-colors duration-300 group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Dark/Light Toggle */}
            <motion.button
              onClick={() => setDark(!dark)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] hover:bg-[#00ff88]/10 transition-all"
            >
              {dark ? (
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              ) : (
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM4.22 4.22a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-1.42 1.41L4.22 5.64a1 1 0 0 1 0-1.42zm13.14 13.14a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1-1.42 1.41l-1.41-1.41a1 1 0 0 1 0-1.42zM3 11a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h2zm20 0a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2zM5.63 17.36a1 1 0 0 1 0 1.41l-1.41 1.42a1 1 0 0 1-1.41-1.42l1.41-1.41a1 1 0 0 1 1.41 0zm13.14-13.14a1 1 0 0 1 0 1.41l-1.41 1.42a1 1 0 0 1-1.42-1.42l1.42-1.41a1 1 0 0 1 1.41 0z"/>
                </svg>
              )}
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,136,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block px-5 py-2 rounded-full text-sm font-bold text-black bg-[#00ff88] transition-all"
            >
              Hire Me
            </motion.a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#00ff88] block transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#00ff88] block transition-all"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#00ff88] block transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-40 bg-black/95 backdrop-blur-xl border border-[#00ff88]/20 rounded-2xl p-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-white/70 hover:text-[#00ff88] font-medium border-b border-white/5 last:border-0 transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Google Font Import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');`}</style>
    </>
  );
}
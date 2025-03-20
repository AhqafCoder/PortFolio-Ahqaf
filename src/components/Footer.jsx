import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

// Blinking heart animation
const heartVariants = {
  blink: {
    opacity: [1, 0, 1], // Fade in and out
    transition: {
      duration: 2, // Duration of one full blink cycle
      repeat: Infinity, // Loop indefinitely
      ease: "easeInOut", // Smooth easing
    },
  },
};

const Footer = () => {
  return (
    <footer className="w-full bg-[url('./assets/bg2.jpg')] text-gray-300 py-10">
      <hr className="w-full border-gray-700 my-6" />
      <div className="max-w-6xl mx-auto flex flex-col items-center px-6">
        {/* Newsletter Signup at the Top */}
        <div className="w-full text-center mb-6">
          <h3 className="text-lg font-semibold text-white">Subscribe to my Newsletter</h3>
          <p className="text-sm text-gray-400 mt-2">Get updates on my latest projects and blogs.</p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-64 rounded-l-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold px-4 py-2 rounded-r-lg hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="w-full border-gray-700 my-6" />

        {/* Footer Content */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start">
          {/* Brand & Tagline */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">Ahqaf Ali</h2>
            <p className="text-sm mt-2">Full-Stack Developer & Server Engineer</p>
            <p className="text-sm">Building the future, one project at a time.</p>
            <p className="text-sm">Passionate about gaming, AI, and hardware.</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
              <li><a href="#about" className="hover:text-pink-400">About Me</a></li>
              <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
              <li><a href="#services" className="hover:text-pink-400">Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white">Contact Me</h3>
            <p className="flex items-center mt-2">
              <FaEnvelope className="mr-2 text-blue-400" />
              ahqafaliofficial@gmail.com
            </p>
            <p className="flex items-center mt-2">
              <FaPhone className="mr-2 text-blue-400" />
              +91 7084089921
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/AhqafCoder" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/ahqaf-ali/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/ahqafali0403/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="w-full border-gray-700 my-6" />

        {/* Made with Love */}
        <div className="text-center text-sm">
          <p>
            Made with{" "}
            <motion.span
              className="inline-block text-red-500"
              animate="blink" // Directly use animate to trigger the animation
              variants={heartVariants}
            >
              ❤️
            </motion.span>{" "}
            by
            <a href="https://github.com/AhqafCoder" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <span className="ml-1">AhqafCoder </span>
           </a>
           

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import HeroImage from '../assets/myinstadp.jpg';
import BgImage from '../assets/bg.png'; // Import background image directly
import Resume from '../assets/Resume.pdf';

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Staggered animation for "Welcome to My Portfolio"
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Typing animation for "I'm Ahqaf Ali, Full-Stack" and "Developer"
  const typingText1 = "I'm Ahqaf Ali, Full-Stack";
  const typingText2 = "Developer";
  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: {
        duration: typingText1.length * 0.05, // Duration for first line
        ease: "linear",
      },
    },
  };

  const typingVariants2 = {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: {
        duration: typingText2.length * 0.05, // Duration for second line
        ease: "linear",
        delay: typingText1.length * 0.05, // Start after first line finishes
      },
    },
  };

  // Blinking cursor animation
  const cursorVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Floating animation for the profile image
  const floatVariants = {
    float: {
      y: [0, 10, 0, -10, 0],
      x: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative text-white py-12 mt-0 flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 sm:px-6 lg:px-12 overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-4 sm:p-6 relative z-10">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={wordVariants}>Welcome</motion.span>{" "}
            <motion.span variants={wordVariants}>to</motion.span> <br />
            <motion.span variants={wordVariants} className="mt-2 sm:mt-3 inline-block">
              My Portfolio
            </motion.span>
          </motion.h1>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 text-center p-4 sm:p-6 relative z-10">
          {/* Profile Image with Floating Animation */}
          <motion.img
            src={HeroImage}
            alt="Profile"
            className="mx-auto mb-4 sm:mb-6 w-28 h-28 sm:w-32 sm:h-32 lg:w-48 lg:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={["float", { opacity: 1, scale: 1 }]}
            variants={floatVariants}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Heading with Typing Animation */}
          <motion.h1
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold flex flex-col items-center lg:items-start"
            initial="hidden"
            animate="visible"
          >
            {/* Container for both lines */}
            <div className="inline-block">
              {/* First Line: "I'm Ahqaf Ali, Full-Stack" */}
              <div className="flex justify-center lg:justify-start">
                <motion.span
                  className="inline-block overflow-hidden whitespace-nowrap"
                  variants={typingVariants}
                >
                  I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Ahqaf Ali, Full-Stack
                  </span>
                </motion.span>
              </div>

              {/* Second Line: "Developer" with Blinking Cursor */}
              <div className="flex justify-center lg:justify-start">
                <motion.div
                  className="inline-flex overflow-hidden whitespace-nowrap"
                  variants={typingVariants2}
                >
                  <span className="inline-block">
                    Developer
                  </span>
                  <motion.span
                    className="inline-block text-2xl sm:text-3xl lg:text-4xl ml-1"
                    variants={cursorVariants}
                    initial={{ opacity: 0 }}
                    animate="blink"
                    transition={{ delay: (typingText1.length + typingText2.length) * 0.05 }}
                  >
                    _
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: (typingText1.length + typingText2.length) * 0.05 + 0.2 }}
          >
            I specialize in building modern and responsive web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: (typingText1.length + typingText2.length) * 0.05 + 0.4 }}
          >
            <a href="#contact">
              <button className="bg-gradient-to-r from-purple-400 to-pink-500 font-semibold text-black px-3 py-2 sm:px-4 sm:py-2 rounded-full transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base">
                Contact With Me
              </button>
            </a>
            <a href={Resume} download>
              <button className="bg-gradient-to-r from-purple-400 to-pink-500 font-semibold text-black px-3 py-2 sm:px-4 sm:py-2 rounded-full transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base">
                Resume
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
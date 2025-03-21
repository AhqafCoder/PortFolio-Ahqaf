import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import AboutPage from "../assets/myimage2.jpg";
import Bg1Image from "../assets/bg1.jpg"

const About = () => {
  // Floating animation for the profile image (same as in Hero section)
  const floatVariants = {
    float: {
      y: [0, 10, 0, -10, 0], // Move up and down
      x: [0, 5, 0, -5, 0],   // Move left and right
      transition: {
        duration: 4, // Duration of one full cycle
        repeat: Infinity, // Loop indefinitely
        ease: "easeInOut", // Smooth easing
      },
    },
  };

  // Hover animation for "About Me" heading
  const headingVariants = {
    initial: {
      letterSpacing: "0px",
      y: 0,
    },
    hover: {
      letterSpacing: "2px", // Slightly increase letter spacing
      y: [-5, 5, -5, 5, 0], // Bounce effect
      color: ["#ffffff", "#ff00ff", "#00ffff", "#ffffff"], // Color transition (white -> pink -> cyan -> white)
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.3, 0.6, 1], // Timing for color changes
      },
    },
  };

  // Split "About Me" into individual characters for animation
  const headingText = "About Me".split("");

  return (
    <div
     className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12"
     style={{
               backgroundImage: `url(${Bg1Image})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
             }}
           
     id="about"
    >

      {/* Image Section */}
      <div className="flex justify-center items-center">
        <motion.img
          src={AboutPage}
          alt="Profile"
          className="shadow-lg object-cover rounded-full aspect-square lg:w-[400px] lg:max-h-[600px] lg:rounded-2xl transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={["float", { opacity: 1, scale: 1 }]} // Combine float animation with initial scale-in
          variants={floatVariants}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 text-left lg:text-left mt-8 mx-4 lg:mt-0 lg:pl-12">
        <motion.h1
          className="text-4xl lg:text-6xl text-center font-bold mb-6"
          initial="initial"
          whileHover="hover"
          variants={headingVariants}
        >
          {headingText.map((char, index) => (
            <motion.span
              key={index}
              style={{ display: "inline-block" }}
              transition={{ delay: index * 0.05 }} // Stagger the animation for each character
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Hey, I’m <span className="font-semibold">Ahqaf Ali</span>, also known as{" "}
          <span className="font-semibold">Jugadu Gaming</span>. I am a{" "}
          <strong>full-stack developer</strong>, <strong>server engineer</strong>, and the
          founder of <strong>IndiPixel</strong>, a Minecraft arcade server designed for{" "}
          <strong>competitive Bedwars and Practice modes</strong>. With a deep passion for{" "}
          <strong>game development, cloud server hosting, and Web Development</strong>, I
          specialize in creating responsive web applications and high-performance Minecraft
          Java servers.
        </p>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Currently pursuing <strong>B.Tech in Computer Science & Engineering</strong> at{" "}
          <strong>Invertis University</strong>, I have been deeply involved in{" "}
          <strong>Website development</strong> since <strong>8th grade</strong>, nowadays
          exploring <strong>MERN stack, Django, and cloud technologies</strong>. Beyond
          coding, I work on <strong>hardware engineering</strong>, including{" "}
          <strong>Formula Kart prototyping and RC models</strong>, while also innovating in{" "}
          <strong>AI-powered projects</strong> like DocSmart, an advanced AI-driven
          healthcare platform designed to optimize doctor availability, streamline
          appointment scheduling, and enhance patient care.
        </p>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Whether it's <strong>building scalable applications</strong>,{" "}
          <strong>optimizing cloud infrastructure</strong>, or{" "}
          <strong>creating immersive gaming experiences</strong>, I am always pushing
          boundaries. Let's connect and build something amazing together! 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
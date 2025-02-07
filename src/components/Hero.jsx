import React, { useState } from 'react';
import HeroImage from '../assets/myinstadp.jpg';
import BgImage from '../assets/bg.png'; // Import background image directly

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative text-white  py-12 flex flex-col lg:flex-row justify-center items-center h-auto lg:h-screen px-6 lg:px-12 overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover", backgroundPosition: "center" }} // ✅ Keeps BG
    >
      {/* ✅ Dynamic Hover Effect (Smaller Glow) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(180, 0, 255, 0.3), rgba(255, 0, 150, 0.15), rgba(0,0,0,0.85) 50%)`,
          transition: "background 0.05s ease",
        }}
      />

      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-6 relative z-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Welcome to <br />
          <span className="mt-3 inline-block">My Site</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 text-center p-6 relative z-10">
        {/* Profile Image */}
        <img
          src={HeroImage}
          alt="Profile"
          className="mx-auto mb-6 w-32 h-32 lg:w-48 lg:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />

        {/* Heading */}
        <h1 className="text-2xl lg:text-4xl font-bold">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Ahqaf Ali</span>, Full-Stack Developer
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm lg:text-lg text-gray-300">
          I specialize in building modern and responsive web applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-y-4 lg:space-y-0 lg:space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full w-full lg:w-auto bg-gradient-to-r from-purple-400 to-pink-500">
            Contact With Me
          </button>
          <button className="px-6 py-2 bg-gray-700 text-white rounded-full w-full lg:w-auto bg-gradient-to-r from-purple-400 to-pink-500">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

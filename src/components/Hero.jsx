import React, { useState } from 'react';
import HeroImage from '../assets/myinstadp.jpg';
import BgImage from '../assets/bg.png'; // Import background image directly
import Resume from '../assets/Resume.pdf';

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="flex flex-col min-h-screen" >
      

     <div className="relative text-white py-12 flex flex-col lg:flex-row justify-center items-center min-h-screen px-6 lg:px-12 overflow-hidden"
       on MouseMove={handleMouseMove}
       style={{ backgroundImage: `url(${BgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
     >

      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-6 relative z-10">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Welcome to <br />
          <span className="mt-3 inline-block">My PortFolio</span>
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
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#contact">
          <button className=" md:inline bg-gradient-to-r from-purple-400 to-pink-500 font-semibold text-black  px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
            Contact With Me
          </button>
          </a>
          <a href={Resume} download>
          <button className="md:inline bg-gradient-to-r from-purple-400 to-pink-500 font-semibold text-black f px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
            Resume
          </button>
          </a>
          
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Hero;

import React from "react";
import AboutPage from "../assets/myimage.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-[url('./assets/bg1.jpg')] text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12">
      
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img 
          src={AboutPage}
          alt="Profile" 
          className="shadow-lg object-cover 
          sm:w-[250px] sm:h-[250px] sm:rounded-xl 
          lg:w-auto lg:max-h-[400px] lg:rounded-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 text-left lg:text-left mt-8 mx-4 lg:mt-0 lg:pl-12">
        <h1 className="text-4xl lg:text-6xl text-center font-bold mb-6">About Me</h1>
        
        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Hey, I’m <span className="font-semibold">Ahqaf Ali</span>, also known as <span className="font-semibold">Jugadu Gaming</span>. 
          I am a <strong>full-stack developer</strong>, <strong>server engineer</strong>, and the creator of <strong>Indipixel</strong>, 
          a Minecraft arcade server designed for <strong>competitive Bedwars and practice modes</strong>. 
          With a deep passion for <strong>game development, cloud hosting, and AI-driven solutions</strong>, 
          I specialize in crafting scalable applications and high-performance server infrastructures.
        </p>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Currently pursuing <strong>B.Tech in Computer Science & Engineering</strong> at <strong>Invertis University</strong>, 
          I have been deeply involved in <strong>software development</strong> since <strong>8th grade</strong>, 
          exploring <strong>MERN stack, Django, and cloud technologies</strong>. Beyond coding, I work on <strong>hardware engineering</strong>, 
          including <strong>Formula Kart prototyping and RC models</strong>, while also innovating in <strong>AI-powered projects</strong> 
          like automated attendance systems and AI-driven diagnostics.
        </p>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Whether it's <strong>building scalable applications</strong>, <strong>optimizing cloud infrastructure</strong>, or 
          <strong>creating immersive gaming experiences</strong>, I am always pushing boundaries. Let's connect and build something amazing together! 🚀
        </p>
      </div>
      
    </div>
  );
};

export default About;

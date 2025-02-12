import React from "react";
import AboutPage from "../assets/myimage2.jpg";

const About = () => {
  return (
    
    <div className="min-h-screen bg-[url('./assets/bg1.jpg')] text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12" id="about">
      
      
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img 
          src={AboutPage}
          alt="Profile" 
          className="shadow-lg object-cover 
           rounded-full aspect-square
          lg:w-[400px] lg:max-h-[600px] lg:rounded-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 text-left lg:text-left mt-8 mx-4 lg:mt-0 lg:pl-12">
        <h1 className="text-4xl lg:text-6xl text-center font-bold mb-6">About Me</h1>
        
        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Hey, I’m <span className="font-semibold">Ahqaf Ali</span>, also known as <span className="font-semibold">Jugadu Gaming</span>. 
          I am a <strong>full-stack developer</strong>, <strong>server engineer</strong>, and the founder of <strong>IndiPixel</strong>, 
          a Minecraft arcade server designed for <strong>competitive Bedwars and Practice modes</strong>. 
          With a deep passion for <strong>game development, cloud server hosting, and Web Development</strong>, 
          I specialize in creating responsive web applications and high-performance minecraft java server.
        </p>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Currently pursuing <strong>B.Tech in Computer Science & Engineering</strong> at <strong>Invertis University</strong>, 
          I have been deeply involved in <strong>Website development</strong> since <strong>8th grade</strong>, 
          nowadays exploring <strong>MERN stack, Django, and cloud technologies</strong>. Beyond coding, I work on <strong>hardware engineering</strong>, 
          including <strong>Formula Kart prototyping and RC models</strong>, while also innovating in <strong>AI-powered projects</strong> 
          like DocSmart i.e advanced AI-driven healthcare platform designed to optimize doctor availability, streamline appointment scheduling, and enhance patient care.
        </p>

        <p className="mt-4 text-base text-gray-300 leading-relaxed">
          Whether it's <strong>building scalable applications</strong>, <strong>optimizing cloud infrastructure</strong>, or  
          <strong> creating immersive gaming experiences</strong>, I am always pushing boundaries. Let's connect and build something amazing together! 🚀
        </p>
      </div>
      
    </div>
  );
};

export default About;

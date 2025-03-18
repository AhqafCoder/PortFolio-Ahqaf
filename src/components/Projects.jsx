import React from "react";
import { FaGithub } from "react-icons/fa";
import indiimage from '../assets/image.png';
import cweb from '../assets/image2.png';
import portfolio from '../assets/image1.png';
import docsmart from '../assets/image3.png';
import ezcode from '../assets/ezcode.png';
import showershealing from '../assets/showershealing.png';

const projects = [
  {
    name: "Healing Website",
    description: "It's my first Paid Foreign Client Project. I have designed and developed this website for a client from the LONDON, UK.😎",
    link: "https://showershealing.com/",
    source: "https://github.com/AhqafCoder/DivineEnergyFlow",
    image: showershealing,
    date: "- 1 March, 2025",
  },
  {
    name: "EZ Code Website",
    description: "EZ Code is a platform for learning programming languages, algorithms, and data structures through interactive coding challenges.",
    link: "https://portfolio-ahqaf.onrender.com/",
    source: "https://github.com/AhqafCoder/ezcode",
    image: ezcode,
    date: "- 15 Feb, 2025",
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio showcasing my skills, experience, and projects.",
    link: "https://portfolio-ahqaf.onrender.com/",
    source: "https://www.ahqafali.site/",
    image: portfolio,
    date: "- 5 Feb, 2025",
  },
  {
    name: "CWeb Server",
    description: "A custom web framework server built to handle efficient web requests and responses.",
    link: "https://cweb-7pbz.onrender.com",
    source: "https://github.com/AhqafCoder/CWEB",
    image: cweb,
    date: "- 2 Feb, 2025",
  },
  {
    name: "DocSmart",
    description: "A smart document management system designed for efficient organization and retrieval.",
    link: "#",
    source: "https://github.com/AhqafCoder/DocSmart",
    image: docsmart,
    date: "- 14 Jan, 2025",
  },
  {
    name: "IndiPixel Website",
    description: "An interactive website for the IndiPixel Minecraft server, showcasing game modes, updates, and community features.",
    link: "https://indipixel.online/",
    source: "https://github.com/AhqafCoder/INDIPIXEL",
    image: indiimage,
    date: "- 4 Jan, 2025",
  },
];

const Projects = () => {
  return (
    <section className="p-6 bg-cover bg-center bg-[url('./assets/bg2.jpg')] min-h-screen flex flex-col items-center" id="projects">
     
      <h2 className="text-6xl font-bold mb-20 text-white">Projects</h2>
      <div className="space-y-14 w-full max-w-4xl relative">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            {index > 0 && <div className="w-1 h-8 bg-gray-400 mx-auto my-4"></div>} 
            <div className="flex flex-col md:flex-row items-center md:items-start bg-black text-white rounded-lg shadow-lg overflow-hidden w-full p-6 border border-gray-700 transform transition-transform duration-300 ">
              <div className="w-full md:w-1/2 flex justify-center items-center self-center">
                <img src={project.image} alt={project.name} className="w-[1340px] h-[640px] object-cover rounded-lg " />
              </div>
              <div className="p-6 flex flex-col justify-between w-full md:w-1/2 h-full min-h-[16rem]">
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{project.name}</h3>
                    <p className="text-gray-400 font-bold">{project.date}</p>
                  </div>
                  <p className="text-gray-300 mt-5 my-2">{project.description}</p>
                </div>
                <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-700">
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-400 flex items-center space-x-2">
                    <FaGithub size={20} />
                    <span>Source Code</span>
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

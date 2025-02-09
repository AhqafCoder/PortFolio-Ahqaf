import React from "react";

const projects = [
  {
    name: "IndiPixel Website",
    description: "An interactive website for the IndiPixel Minecraft server, showcasing game modes, updates, and community features.",
    link: "https://indipixel.netlify.app/",
  },
  {
    name: "CWeb Framework Server",
    description: "A custom web framework server built to handle efficient web requests and responses.",
    link: "#", // Replace with actual link
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio showcasing my skills, experience, and projects.",
    link: "#", // Replace with actual link
  },
  {
    name: "DocSmart",
    description: "A smart document management system designed for efficient organization and retrieval.",
    link: "#", // Replace with actual link
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[url('./assets/image.png)">
    <section className="p-6  ">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600 my-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Projects;

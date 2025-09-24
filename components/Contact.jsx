import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import Bg2Image from "../assets/bg2.jpg"


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    const response = await fetch("https://formspree.io/f/xkgovjdz", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  return (
    <div className="border-gray-700 min-h-screen bg-[url('./assets/bg1.jpg')] text-gray-300 flex flex-col items-center justify-center px-6 py-12" id="contact"
      style={{
                     backgroundImage: `url(${Bg2Image})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                   }}
    
    
    >
      
      <h1 className="text-3xl md:text-6xl font-bold text-white mb-8">Get in Touch</h1>
      <p className="text-gray-400 mb-16 text-center">
        🚀 Looking for a developer to bring your ideas to life? Drop me a message and let's build something great together!
      </p>

      <div className="w-full max-w-3xl bg-black p-8 rounded-lg shadow-lg border-gray-700">
        {submitted ? (
          <p className="text-green-400 text-center font-semibold">
            ✅ Message sent! I'll get back to you soon.
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input 
                type="email"
                name="email"
                placeholder="Enter your email" 
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea 
                name="message"
                placeholder="Write your message here..." 
                rows="5" 
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Social Links */}
      <div className="flex space-x-4 mt-8">
        <a href="mailto:ahqafaliofficial@gmail.com" className="text-gray-400 hover:text-pink-400">
          <FaEnvelope size={24} />
        </a>
        <a href="https://github.com/AhqafCoder" target="_blank" className="text-gray-400 hover:text-pink-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/ahqaf-ali/" target="_blank" className="text-gray-400 hover:text-pink-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/ahqafali0403/" target="_blank" className="text-gray-400 hover:text-pink-400">
          <FaInstagram size={24} />
        </a>
        <a href="tel:+917084089921" className="text-gray-400 hover:text-pink-400">
          <FaPhone size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;

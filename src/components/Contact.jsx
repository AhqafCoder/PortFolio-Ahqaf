import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    
    <div className="border-gray-700  min-h-screen bg-[url('./assets/bg1.jpg')] text-gray-300 flex flex-col items-center justify-center px-6 py-12" id="contact">
      <hr className="w-full border-gray-700 my-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h1>
      <p className="text-gray-400 mb-8 text-center">
        Feel free to reach out for collaborations, projects, or just a chat!
      </p>

      <div className="w-full max-w-3xl bg-black p-8 rounded-lg shadow-lg border-gray-700">
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Your Message</label>
            <textarea 
              placeholder="Write your message here..." 
              rows="5" 
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none border border-gray-600"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;

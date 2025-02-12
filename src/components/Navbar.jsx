import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for the menu button

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='bg-black text-white px-6 py-3 md:px-16 lg:px-24'>
            <div className='container flex justify-between items-center'>
                {/* Logo */}
                <div className='text-2xl font-bold'>
                    <a href="/">
                    Ahqaf Ali
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex space-x-6'>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Home</a>
                    <a href="#about" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>About Me</a>
                    <a href="#projects" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Projects</a>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Services</a>
                    <a href="#contact" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Contact</a>
                </div>

                {/* Desktop Button */}
                <a href="#contact">
                <button className='hidden md:inline bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
                    Connect Me
                </button>
                </a>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />} {/* Toggle between open/close icons */}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900 rounded-lg">
                    <a href="/" className='text-white hover:bg-white hover:text-black px-6 py-2 rounded-full'>Home</a>
                    <a href="#about" className='text-white hover:bg-white hover:text-black px-6 py-2 rounded-full'>About Me</a>
                    <a href="#projects" className='text-white hover:bg-white hover:text-black px-6 py-2 rounded-full'>Projects</a>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-6 py-2 rounded-full'>Services</a>
                    <a href="#contact" className='text-white hover:bg-white hover:text-black px-6 py-2 rounded-full'>Contact</a>
                    <a href="#contact">
                    <button className='bg-gradient-to-r from-purple-400 to-pink-500 text-black px-6 py-2 rounded-full'>
                        Connect Me
                    </button>
                    </a>
                </div>
            )}
        </div>
    );
}

export default Navbar;

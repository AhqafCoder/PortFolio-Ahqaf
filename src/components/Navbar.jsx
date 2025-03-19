import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '#about', label: 'About Me' },
        { href: '#projects', label: 'Projects' },
        { href: '/', label: 'Services' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 text-white px-4 py-3 sm:px-6 md:px-12 lg:px-24 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-black/70 backdrop-blur-md shadow-md' 
                    : 'bg-black shadow-md'
            }`}
            style={{ position: 'fixed' }} // Inline style as fallback
        >
            <div className='container mx-auto flex justify-between items-center max-w-7xl'>
                {/* Logo */}
                <div className='text-xl sm:text-2xl font-bold'>
                    <a href="/" className='hover:text-gray-300 transition-colors'>
                        Ahqaf Ali
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex justify-center items-center flex-1'>
                    <div className='flex space-x-6 lg:space-x-8'>
                        {navItems.map((item) => (
                            <a 
                                key={item.label}
                                href={item.href} 
                                className='relative text-white px-3 py-2 text-sm lg:text-base group'
                            >
                                <span className='relative z-10'>{item.label}</span>
                                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out'></span>
                                <span className='absolute inset-0 bg-white/10 rounded-full scale-95 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300'></span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop Button */}
                <div className='hidden md:flex items-center'>
                    <a href="#contact">
                        <button className='bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold px-4 py-2 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-md text-sm lg:text-base'>
                            Connect Me 
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white text-2xl sm:text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`md:hidden absolute top-full left-0 right-0 px-4 py-4 rounded-b-lg shadow-lg transition-all duration-300 ${
                    isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black'
                }`}>
                    <div className="flex flex-col items-center space-y-3">
                        {navItems.map((item) => (
                            <a 
                                key={item.label}
                                href={item.href} 
                                className='relative text-white px-6 py-2 w-full text-center text-sm sm:text-base group'
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className='relative z-10'>{item.label}</span>
                                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out'></span>
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                            <button className='bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold px-6 py-2 rounded-full w-full text-sm sm:text-base transition-shadow hover:shadow-md'>
                                Connect Me
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-black text-white px:8 py-3 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between items-center' >
                <div className='text-2xl font-bold hidden md:inline'>Ahqaf Ali</div>
                <div className='space-x-6'>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Home</a>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>About Me</a>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Services</a>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Projects</a>
                    <a href="/" className='text-white hover:bg-white hover:text-black px-4 py-2 rounded-full'>Contact</a>
                </div>
                <button className='bg-gradient-to-r from-white to-gray-300  text-black hidden md:inline 
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Connect Me</button>
            </div>
        </div>
    );
}

export default Navbar;

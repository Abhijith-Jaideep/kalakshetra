import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md font-playfair">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Kalakshetra Logo"
            className='h-20 w-100 rounded-md'
          />            
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-200">About</Link>
          <Link to="/events" className="hover:text-yellow-400 transition duration-200">Events</Link>
          <Link to="/booking" className="hover:text-yellow-400 transition duration-200">Book</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-200">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col px-6 pb-4 space-y-3 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/events" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/booking" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Book</Link>
          <Link to="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

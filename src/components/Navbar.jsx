import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation (for mobile view)
  };

  return (
    <nav className="sticky top-0 w-full flex py-6 justify-between items-center bg-[#fff]">
      {/* Logo Section */}
      <div className="flex items-center ml-[10%]">
        <img 
          src="/images/logo.png"
          alt="Logo"
          className="w-14 h-12"
        />
        <span className="font-bold text-3xl">Silo Fortune</span>
        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none text-gray-600 ml-auto"
        >
          {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <ul className="hidden lg:flex ml-14 space-x-12 mr-[10%] text-xl font-bold">
        <li>
          <Link to="/" className="hover:text-green-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-400">About Us</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-green-400">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-green-400">Contact Us</Link>
        </li>
      </ul>

      {/* Navigation Links for Mobile */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform opacity-100 z-10">
          <li 
            onClick={() => handleNavigation('/')} 
            className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer"
          >
            Home
          </li>
          <li 
            onClick={() => handleNavigation('/about')} 
            className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer"
          >
            About Us
          </li>
          <li 
            onClick={() => handleNavigation('/services')} 
            className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer"
          >
            Services
          </li>
          <li 
            onClick={() => handleNavigation('/contact')} 
            className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer"
          >
            Contact Us
          </li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

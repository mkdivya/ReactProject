import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toservices = () => {
    navigate("/services");
  };

  const toBlogs=()=>{
    navigate("/Blogs")
  }
  const toContact=()=>{
    navigate("/Contact")
  }
  const toAbout=()=>{
    navigate("/About")
  }

  return (
    <header className="sticky top-0 bg-green-400 text-black m-5 rounded-2xl max-w-full h-20 px-3 z-50">
      <div className="container mx-auto flex justify-between items-center h-20">

        {/* Brand Logo */}
        <div className="text-2xl font-bold flex">
          <img
            className="max-w-15 max-h-10"
            src="./src/assets/images/logo.png"
            alt="Logo"
          />
          <span className="mt-2 font-jost">Silo Fortune</span>
        </div>

        {/* Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none text-gray-600"
        >
          {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:space-x-6 absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto w-full lg:w-auto font-medium m-3 p-3 block rounded bg-white lg:bg-transparent lg:items-center`}
        >
          <Link
            to="/home"
            className="block px-6 py-2 text-xl hover:text-green-600 transition hover:bg-gray-100 rounded p-3 m-6"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-6 py-2 text-xl hover:text-green-600 transition hover:bg-gray-100 rounded p-3 m-6"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-6 py-2 text-xl hover:text-green-600 hover:bg-gray-100 rounded p-3 transition m-6"
          >
            Services
          </Link>
          <Link
            to="/Blogs"
            className="block px-6 py-2 text-xl hover:text-green-600 transition hover:bg-gray-100 rounded p-3 m-6"
          >
           Blogs
          </Link>
          <Link
            to="/contact"
            className="block px-6 py-2 text-xl hover:text-green-600 transition hover:bg-gray-100 rounded p-3 m-6"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

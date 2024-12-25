import React, { useState } from 'react';
import logo from "../assets/images/logo.png"

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
  return (

    

  
    <nav className="sticky top-0 w-full flex py-6 justify-between items-center  bg-[#fff]">
      
        {/* Logo Section */}
        <div className="flex items-center ml-[10%] ">
          <img 
            src="src/assets/images/logo.png"
            alt="Logo"
            className='w-14 h-12'
            
          />
          <span className="  font-bold text-3xl ">Silo Fortune</span>


{/* new roggle */}
<button
          onClick={toggleMenu}
          className="text-2xl lg:hidden focus:outline-none text-gray-600"
        >
          {isMenuOpen ?  <i class="fa-solid fa-xmark"></i> :<i class="fa-solid fa-bars"></i> }
        </button>

          </div>
{/* toggle button section for mobile */}
          
          
      

        {/* Navigation Links */}
        <div className=' mr-[10%]  text-xl justify-between font-bold'>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="#" className="hover:text-green-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 py-2 px-3 border rounded-lg">Sign In</a>
            </li>
            <li>
              <a href="#" className="hover:text-white bg-gradient-to-r from bg-green-300 py-2 px-3 border rounded-lg">Register</a>
            </li>
          </ul>

        </div>

        <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer'
        onClick={()=>setisOpen(!isOpen)}></i>

        <div className={'absolute xl:hidden top:24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isOpen ? "opacity-100":"opacity-0"}'}
        style={{transition:"transform 0.3s ease,opacity 0.3s ease"}}>
        
          <li className='list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer '>Home</li>
          <li className='list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer '>Services</li>
          <li className='list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer '>Contact Us</li>
          <li className='list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer '>About</li>
          <li className='list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer '>Sign In</li>
        
        </div>
        
      
    
    </nav>
  );
};

export default Navbar;

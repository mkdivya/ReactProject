import React from "react";


import { useNavigate } from "react-router-dom";
import RightBarButton from "../pages/RightBarButton";

function Navbar() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/Login");
  };

  const BacktoHome = () => {
    navigate("/");
  }

  return (
    <div className="fixed top-0 left-0 h-16 sm:h-20 shadow-md bg-white flex items-center justify-between w-full px-4 sm:px-8 z-50">
      {/* Logo Section */}
      <img
        onClick={BacktoHome}
        src="../assets/images/silo.png"
        alt="logo"
        className="h-8 sm:h-12 px-2"
      />

      {/* Search Input */}
      <div className="flex-grow sm:flex-grow-0 flex items-center justify-center mb-2 sm:mb-0">
        <div className="relative w-full max-w-xs sm:max-w-md sm:mx-8">
          <input
            type="text"
            placeholder="Product"
            className="font-jost pl-4 pr-10 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full bg-[#F2F1EB]"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            <FiSearch />
          </span>
        </div>
      </div>

      {/* Buttons and Icons */}
      <div className="flex items-center gap-2 sm:gap-4 mr-6">
        {/* Login and Get App Buttons */}
        <div className="flex gap-2">
          <button onClick={goToLogin} className="font-jost bg-white text-black font-regular py-1 px-3 text-sm sm:text-base rounded hover:text-green-800 hover:border-black border-green-800 border-2 w-[80px] sm:w-auto text-center">
            LOGIN
          </button>
          <a href="https://play.google.com/store/apps/details?id=com.silofortune.uapp&hl=en_IN" className="font-jost bg-white text-black font-regular py-1 px-3 text-sm sm:text-base rounded hover:text-green-800 hover:border-black border-green-800 border-2 w-[80px] sm:w-auto text-center">
            GET APP
          </a>
        </div>

        {/* Icons */}
        <div className="flex flex-row gap-3">
          <button>
            <FaTruckFast
              size={20}
              className="text-gray-700 hover:text-green-500 sm:text-2xl"
            />
          </button>
          <button>
            <FaCartShopping
              size={20}
              className="text-gray-700 hover:text-green-500 sm:text-2xl"
            />
          </button>
          <RightBarButton/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
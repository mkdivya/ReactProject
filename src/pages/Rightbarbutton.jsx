import React, { useState } from "react";
import { Link } from "react-router-dom";


const RightBarButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-2xl p-2"
      >
        &#9776;
      </button>

      
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-screen w-96 bg-white shadow-lg z-50 rounded-lg">
      
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-3 right-3 text-3xl font-light text-gray-40"
          >
            &times;
          </button>

      
          <Link to="/login">
            <div
              className="flex items-center justify-between p-6 mt-12 cursor-pointer mx-4 h-4 w-100"
              style={{
                backgroundColor: "#59702F",
                fontFamily: "Jost, Arial",
                fontWeight: 600,
                borderRadius: "10px", 
              }}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={faHandPaper} className="text-white text-xl mr-2" />
                <span className="text-white text-lg" style={{ lineHeight: "28px" }}>
                  Login
                </span>
              </div>
            </div>
          </Link>

      
          <div className="border-t border-gray-300 my-6"></div>

          
          <ul className="space-y-6 px-6">
            <li>
              <Link to="/categorypage" className="text-lg font-semibold hover:text-green-500">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/productpage" className="text-lg font-semibold hover:text-green-500">
                Products
              </Link>
            </li>
           
            <li>
              <Link to="/faqs" className="text-lg font-semibold hover:text-green-500">
                FAQS
              </Link>
            </li>
            <li>
              <Link to="/privacypolicy" className="text-lg font-semibold hover:text-green-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/termsandconditions" className="text-lg font-semibold hover:text-green-500">
                Terms and Conditions
              </Link>
            </li>
          </ul>

          
          <div className="border-t border-gray-300 my-6"></div>

      
          <div className="px-6 py-8 mb-4">
            <p className="font-bold text-lg mb-4">Download App</p>
            <div className="flex gap-6 justify-center">
          
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.silofortune.uapp&hl=en_IN",
                    "_blank"
                  )
                }
              />
            
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </div>
          </div>

    
          <div className="border-t border-gray-300 my-6"></div>

          
          <div className="flex justify-center items-center py-4 text-sm text-gray-600">
            <Link to="/contact-us" className="hover:text-green-500">
              Contact Us
            </Link>
            <div className="mx-4 h-5 w-px bg-[#A9BF7B]"></div>
            <Link to="/about-us" className="hover:text-green-500">
              About Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightBarButton;
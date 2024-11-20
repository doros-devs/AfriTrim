import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import AfriTrimLogo from "../assets/AfriTrimlogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="bg-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={AfriTrimLogo} alt="AfriTrim Logo" className="h-12 mr-3" />
            <span className="text-gold text-2xl font-bold">AfriTrim</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-gold">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-300 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex space-x-4 items-center">
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-gold text-black px-4 py-2 rounded-lg hover:bg-yellow-400 focus:outline-none"
              >
                Login
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-black text-gold rounded-lg shadow-lg w-48">
                  <ul>
                    <li>
                      <button
                        onClick={() => navigate("/general-login")}
                        className="block px-4 py-2 text-left hover:bg-yellow-400 w-full"
                      >
                        General Login
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/login")}
                        className="block px-4 py-2 text-left hover:bg-yellow-400 w-full"
                      >
                        Super Admin Login
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Sign Up */}
            <button
              onClick={() => navigate("/signup")}
              className="bg-gold text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <hr className="border-gray-700 mt-0" />
      </div>
    </div>
  );
};

export default Navbar;

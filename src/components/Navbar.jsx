import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import AfriTrimLogo from "../assets/AfriTrimlogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-gold text-2xl font-bold">
            <span className="flex items-center">
              <img
                src={AfriTrimLogo}
                alt="AfriTrim Logo"
                className="mr-2 h-16"
              />
            </span>
          </div>
          <ul className="flex space-x-6 text-gold">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about-us"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gold"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-gold text-black px-4 py-2 rounded hover:bg-mediumGray focus:outline-none"
              >
                Login
              </button>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-black text-gold rounded-lg shadow-lg w-48">
                  <ul>
                    <li>
                      <button
                        onClick={() => navigate("/General login")}
                        className="block px-4 py-2 text-left hover:bg-mediumGray"
                      >
                        General Login
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => navigate("/login")}
                        className="block px-4 py-2 text-left hover:bg-mediumGray"
                      >
                        Super Admin Login
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              onClick={() => navigate("/signup")}
              className="bg-gold text-black px-4 py-2 rounded hover:bg-mediumGray"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <hr className="border-lightGray mt-0" />
      </div>
    </div>
  );
};

export default Navbar;

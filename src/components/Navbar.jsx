import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import AfriTrimLogo from "../assets/AfriTrimlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="bg-blackGray p-4">
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

          {/* Hamburger Menu Button for small screens */}
          {screenWidth < 768 && (
            <button
              onClick={toggleMenu}
              className="text-gold md:hidden flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          {/* Desktop Menu */}
          <ul className={`md:flex space-x-6 text-lightGray ${isMenuOpen ? 'block' : 'hidden'}`}>
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
            <button
              onClick={() => navigate("/login")}
              className="bg-gold text-black px-4 py-2 rounded hover:bg-mediumGray"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-gold text-black px-4 py-2 rounded hover:bg-mediumGray"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-60">
        <hr className="border-lightGray mt-0" />
      </div>
    </div>
  );
};

export default Navbar;

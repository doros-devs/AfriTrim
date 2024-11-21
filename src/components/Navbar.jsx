import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import AfriTrimLogo from "../assets/AfriTrimlogo.png";

const Navbar = () => {
  const navigate = useNavigate();

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
          <ul className="flex space-x-6 text-lightGray">
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
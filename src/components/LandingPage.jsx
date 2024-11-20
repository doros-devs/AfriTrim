import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-black text-yellow-400 min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-6xl font-extrabold mb-8 animate__animated animate__fadeIn animate__delay-1s">
          The Best Men's Hair Salon In Your City
        </h1>
        <p className="text-2xl mb-8 max-w-3xl leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
          Experience the best new hairstyles in our hair salon. Just book your
          desired day now and easily style your hair with the best professionals.
        </p>
        <div className="flex space-x-6">
         
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="border-2 border-yellow-400 px-8 py-4 rounded-lg text-yellow-400 font-bold hover:bg-yellow-600 hover:text-black transition transform hover:scale-105 shadow-lg">
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* Optional: Add a Services Section */}
      <section id="services" className="bg-gray-800 text-yellow-400 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-xl mb-8">
            We offer a variety of hairstyling services, tailored to your needs.
            Explore our offerings today!
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

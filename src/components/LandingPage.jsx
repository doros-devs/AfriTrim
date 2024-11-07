import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-blackGray text-white min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl font-bold mb-6 text-white">
          The Best Men's Hair Salon In Your City
        </h1>
        <p className="text-xl mb-6 text-white">
          Experience The Best New Hairstyles In Our Hair Salon, Just Book Your
          Desired Day From Now On And Easily Style Your Hair.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gold text-white px-6 py-3 rounded hover:bg-mediumGray">
            Booking
          </button>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="border border-lightGray px-6 py-3 rounded text-white hover:bg-darkGray">
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="bg-black text-white p-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-xl">
            We offer the best new hairstyles in our salon with professional
            beauticians. Our branches are growing and providing excellent
            service to our clients.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-darkGray text-white p-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="mb-6 text-xl">
            The number of services we offer is small but comes with the best
            quality for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blackGray p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-4">Haircut</h3>
              <p>Experience the best haircut with our professional team.</p>
            </div>
            <div className="bg-blackGray p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-4">Shaving</h3>
              <p>Get a clean, stylish shave with our experienced barbers.</p>
            </div>
            <div className="bg-blackGray p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-4">Beard Trim</h3>
              <p>Keep your beard looking sharp with our trimming services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="bg-black text-lightGray p-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl mb-6">
            Feel free to reach out to us and book your next haircut or get more
            information about our services.
          </p>
          <button className="bg-gold text-black px-6 py-3 rounded hover:bg-mediumGray">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

const LandingPage = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-4 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <motion.img
          src="/images/Transform Your Look with Advanced Hair Replacement Techniques.jpeg"
          alt="Hair Replacement Techniques"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ filter: "blur(10px)" }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h1
          className="text-6xl font-bold mb-6 text-white relative z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The Best Men's Hair Salon In Your City
        </motion.h1>
        <motion.p
          className="text-xl mb-6 text-white max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Experience The Best New Hairstyles In Our Hair Salon. Book your desired appointment today and give your hair the attention it deserves.
        </motion.p>
        <motion.div
          className="flex space-x-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button className="bg-gold text-white px-6 py-3 rounded-full hover:bg-mediumGray transition-all duration-300 ease-in-out">
            Booking
          </button>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="border border-lightGray px-6 py-3 rounded-full text-white hover:bg-darkGray transition-all duration-300 ease-in-out">
              Read More
            </button>
          </Link>
        </motion.div>
      </motion.section>

      {/* About Us Section with Slideshow */}
      <motion.section
        id="about-us"
        className="bg-black text-white py-20 px-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-xl mb-8 mx-auto max-w-3xl">
            At our barbershop, we offer exceptional hairstyling, beard grooming, and shaving services. Our skilled barbers prioritize quality and customer satisfaction in every appointment.
          </p>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg mx-auto w-full max-w-lg"
            style={{ height: "300px" }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <motion.img
              src="/images/d5259c19-dba4-4259-86e3-80661a312e03.jpeg"
              alt="Barbershop"
              className="absolute top-0 left-0 w-full h-full object-cover"
              animate={{ x: [0, -100, 0] }} // Slide left and reset
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="bg-darkGray text-white py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Services</h2>
          <p className="mb-6 text-xl text-center">
            We provide a range of high-quality services tailored to your grooming needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Haircut", "Shaving", "Beard Trim"].map((service, index) => (
              <motion.div
                key={index}
                className="bg-blackGray p-6 rounded-lg shadow-md flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src="/images/New York Barber Shop, Rotterdam.jpeg"
                  alt={service}
                  className="rounded-full mb-4"
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                />
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-center">
                  {service === "Haircut"
                    ? "Experience the best haircut with our professional team."
                    : service === "Shaving"
                    ? "Get a clean, stylish shave with our experienced barbers."
                    : "Keep your beard looking sharp with our trimming services."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        id="contact-us"
        className="bg-black text-lightGray py-20 px-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl mb-6">
            Ready for a new style? Get in touch with us and book your next appointment.
          </p>
          <motion.button
            className="bg-gold text-black px-6 py-3 rounded-full hover:bg-mediumGray transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get In Touch
          </motion.button>
          {/* Flex container for the images */}
          <div className="flex space-x-4 justify-center mt-8">
            <motion.img
              src="/images/9b6e5690-002b-4b88-9a32-5485b92aff00.jpeg"
              alt="Contact Us"
              className="rounded-lg shadow-lg w-2/5 max-w-xs"
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src="/images/The Lisbon Connection.jpeg"
              alt="New Image"
              className="rounded-lg shadow-lg w-2/5 max-w-xs"
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;

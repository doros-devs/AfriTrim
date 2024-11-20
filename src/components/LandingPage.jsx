import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { Link } from "react-scroll";

const LandingPage = () => {
  const serviceImages = {
    Haircut: "/images/New hair cut gallery.jpeg",
    Shaving: "/images/94034b61-87da-4905-93e1-a9bda202a586.jpeg",
    "Beard Trim": "/images/Andis stand barbering live demo.jpeg",
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Text Section */}
        <div className="text-center md:text-left flex-1 relative z-10 md:pr-12">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            The Best Men's Hair Salon In Your City
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Experience the best new hairstyles in our hair salon. Book your
            desired appointment today and give your hair the attention it
            deserves.
          </motion.p>
          <motion.div
            className="flex space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <button className="bg-gold text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-mediumGray hover:text-white transition-all duration-300 ease-in-out">
              Booking
            </button>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <button className="border border-lightGray px-8 py-3 rounded-full text-gray-300 hover:bg-darkGray hover:text-white transition-all duration-300 ease-in-out">
                Read More
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className="relative z-10 flex-1 h-auto flex justify-center md:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.img
            src="/images/Showcasing my work from haircutting!.jpeg"
            alt="Hair Replacement Techniques"
            className="w-full max-w-md md:max-w-lg max-h-[500px] object-contain rounded-lg shadow-xl"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.section>

      {/* About Us Section */}
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
            At our barbershop, we offer exceptional hairstyling, beard grooming,
            and shaving services. Our skilled barbers prioritize quality and
            customer satisfaction in every appointment.
          </p>
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg mx-auto w-full max-w-lg"
            style={{ height: "300px" }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <motion.img
              src="/images/Premium Photo _ Black man in the barbershop Cute black man makes a haircut in the African salon.jpeg"
              alt="Barbershop"
              className="absolute top-0 left-0 w-full h-full object-cover"
              animate={{ x: [0, -100, 0] }}
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
            We provide a range of high-quality services tailored to your
            grooming needs.
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
                  src={serviceImages[service]}
                  alt={service}
                  className="rounded-full mb-4 w-32 h-32 object-cover"
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
            Ready for a new style? Get in touch with us and book your next
            appointment.
          </p>
          <motion.button
            className="bg-gold text-black px-6 py-3 rounded-full hover:bg-mediumGray transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get In Touch
          </motion.button>
          <div className="flex space-x-4 justify-center mt-8">
            <motion.img
              src="/images/_Barber_ Handsome Young Man After Haircut With Smile_ by Stocksy Contributor _Sean Locke_.jpeg"
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
              src="/images/Waves ❌ taper.jpeg"
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

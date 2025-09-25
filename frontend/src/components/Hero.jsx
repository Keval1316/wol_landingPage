import React from "react";
import { motion } from "framer-motion";

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
      delayChildren: 0.3,   
    },
  },
};

// Animation variants for individual item
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, 
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section
      className="mt-20 mx-4 md:mx-16 min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-16 lg:px-24"
      style={{
        backgroundImage: "url('/bgHero.jpg')",
        backgroundSize: "200%",
        backgroundPosition: "left center",
        borderRadius: "1rem"
      }}
    >
      <motion.div
        className="max-w-xl text-left text-white space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Small Badge */}
        <motion.span
          variants={itemVariants}
          className="inline-block bg-white/20 text-white text-sm px-6 py-3 rounded-full backdrop-blur-sm"
        >
          WOL
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl leading-tight"
        >
          World Oncology <br /> Leadership
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-white/90 leading-relaxed"
        >
          Bridge the Knowledge Gap in Oncology — Engage <br />
          with Global KOLs — Deliver Tangible Results in Oncology
        </motion.p>

        {/* Button */}
        <motion.button
          variants={itemVariants}
          className="bg-white text-black font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Join the Experts
        </motion.button>

        {/* Bottom Card */}
        <motion.div
          variants={itemVariants}
          className="mt-10 bg-white/30 backdrop-blur-md p-6 rounded-2xl w-fit"
        >
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl font-bold">1000+</h3>
            <p className="text-sm text-white/90">
              growing global community <br /> of oncology experts.
            </p>
          </div>
          <div className="flex -space-x-2 mt-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="user2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="user3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;


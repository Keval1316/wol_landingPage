import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation for title
const titleVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Animation for content
const riseUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
};


const UpcomingEvents = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2, 
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

  return (
    <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{ visible: { transition: { staggerChildren: 0.3 }}}}
        className="font-sans py-16 sm:py-12 bg-white overflow-x-hidden"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Left Column: Title */}
          <motion.div variants={titleVariant} className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight">
              Upcoming
              <br />
              Events at WOL
            </h2>
          </motion.div>

          {/* Right Column: Description and Button */}
          <motion.div variants={riseUpVariant} className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-600 text-lg mb-8">
              Stay ahead of the curve with our expert-led events. Bringing together oncology leaders, healthcare innovators, and strategic decision-makers from across the globe.
            </p>
            <button className="bg-[#DB3F1D] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300">
              View More
            </button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingEvents;


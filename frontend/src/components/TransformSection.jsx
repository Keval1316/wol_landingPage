import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants for the container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };
  
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

const TransformSection = () => {
  const bgImageUrl = '/dnabig.jpg';
  
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
    <section className="font-sans py-16 sm:py-24 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={riseUpVariant}
          className="relative rounded-3xl overflow-hidden bg-cover bg-center p-8 sm:p-12 md:p-16"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            className="relative z-10 flex flex-col items-start max-w-2xl"
          >
            <div className="bg-white/30 backdrop-blur-sm p-8 sm:p-10 rounded-2xl">
              <motion.h2
                variants={riseUpVariant}
                className="text-4xl md:text-5xl text-white leading-tight mb-4"
              >
                Ready to Transform Your Oncology Strategy?
              </motion.h2>
              <motion.p
                variants={riseUpVariant}
                className="text-white text-lg mb-8"
              >
                Connect with the world's leading oncology experts and drive impactful change.
              </motion.p>
              
              {/* Buttons */}
              <motion.div
                variants={riseUpVariant}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
                  Request a Consultation
                </button>
                <button className="bg-transparent backdrop-blur-sm border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-colors duration-300">
                  Contact Us
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;

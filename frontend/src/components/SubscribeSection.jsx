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

// Animation variant for individual elements
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

const SubscribeSection = () => {
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
        <section className="font-sans bg-white py-16 sm:pyb-24 overflow-x-hidden">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="bg-black rounded-3xl overflow-hidden flex flex-col lg:flex-row items-stretch"
                >
                    {/* Text Content Section */}
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 text-center lg:text-left flex flex-col justify-center">
                        <motion.h2
                            variants={riseUpVariant}
                            className="text-3xl md:text-4xl font-medium text-white leading-tight mb-6"
                        >
                            Get expert updates and event invites—straight to your inbox.
                        </motion.h2>
                        <motion.div variants={riseUpVariant}>
                            <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300 self-center lg:self-start">
                                Subscribe Now
                            </button>
                        </motion.div>
                    </div>

                    {/* Image Section */}
                    <motion.div
                        variants={riseUpVariant}
                        className="w-full lg:w-1/2 flex items-center justify-center p-8"
                    >
                        <img
                            src="/dnabg.jpg"
                            alt="Stylized DNA helix"
                            className="w-full max-h-76 object-cover rounded-2xl"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SubscribeSection;

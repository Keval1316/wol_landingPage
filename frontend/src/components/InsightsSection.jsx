import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data for the feature cards
const features = [
  {
    title: 'Tailored Engagement',
    description: 'Every interaction is customized. Choose from roundtables, webinars, podcasts, hybrid forums, or fully bespoke events.',
  },
  {
    title: 'Exclusive Community',
    description: 'Engage with a vetted network of global oncology KOLs, clinicians, and healthcare strategists.',
  },
  {
    title: 'Strategic Value',
    description: 'Every interaction is customized. Choose from roundtables, webinars, podcasts, hybrid forums, or fully bespoke events.',
  },
  {
    title: 'End-to-End Execution',
    description: 'Every interaction is customized. Choose from roundtables, webinars, podcasts, hybrid forums, or fully bespoke events.',
  },
];

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

// Animation for heading
const headingVariants = {
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

// Animation for paragraph
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Insights = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
      variants={containerVariants}
      className="bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24"
    >
      {/* Top section with header and description */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16"
      >
        <motion.h2
          variants={headingVariants} 
          className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight"
        >
          Where Clinical <br /> Insights Meet Real <br /> World Pharma Strategy
        </motion.h2>
        <motion.p
          variants={itemVariants} 
          className="text-gray-600 text-lg lg:mt-2"
        >
          WOL is an expert-driven platform designed to bridge the gap between oncology specialists, emerging opinion leaders, and healthcare industry stakeholders across the globe. Whether launching a new therapy, exploring novel care models, or seeking strategic guidance, WOL provides direct, timely access to the right experts.
        </motion.p>
      </motion.div>

      {/* Four-card feature grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants} 
            className="bg-gray-100/70 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <div className="w-16 h-16 bg-white rounded-full mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 flex-grow">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Insights;


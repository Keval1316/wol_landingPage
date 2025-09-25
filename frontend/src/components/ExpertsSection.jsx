import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Personalized Event Planning',
    description: 'Collaborate with our team to define objectives and select the right experts from our world oncology network.',
  },
  {
    number: '02',
    title: 'Seamless Execution',
    description: 'We handle content development, technology, and moderation to ensure every event is impactful and engaging.',
  },
  {
    number: '03',
    title: 'Actionable Deliverables',
    description: 'Receive post-event summaries, key takeaways, and expert recommendations to guide your next steps.',
  },
];

// Animation variant for the main title (top to bottom)
const titleVariants = {
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

// Animation variant for each timeline step (rising up)
const stepVariants = {
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


const ExpertSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Animation controls and refs for different parts of the component
  const titleControls = useAnimation();
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const timelineControls = useAnimation();
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });


  useEffect(() => {
    if (titleInView) {
      titleControls.start('visible');
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (timelineInView) {
      timelineControls.start('visible');
    }
  }, [timelineControls, timelineInView]);


  return (
    <section className="bg-white font-sans py-16 sm:p-24 lg:pt-12 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Component Title */}
        <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleControls}
            variants={titleVariants}
            className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight">
            Choose The Expert <br />Who Resonates With Your Idea.
          </h2>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative">
          <div className="hidden md:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200" aria-hidden="true"></div>

          {/* Steps container */}
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineControls}
            variants={{ visible: { transition: { staggerChildren: 0.4 } } }} // Stagger children animation
            className="flex flex-col gap-y-12 md:gap-y-24"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="group relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(0)}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    {index % 2 === 0 ? (
                      <h4 className="text-3xl font-medium text-gray-900 mb-2">{step.title}</h4>
                    ) : (
                      <p className="text-gray-600">{step.description}</p>
                    )}
                  </div>

                  <div className="relative flex-shrink-0 z-10">
                    <div className={`hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 transition-colors duration-300 ${activeStep === index ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                    <div
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold border-2 transition-colors duration-300 cursor-pointer ${
                        activeStep === index
                          ? 'border-red-500 text-red-500 bg-white'
                          : 'border-gray-200 text-gray-400 bg-gray-100'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2 pl-8 text-left">
                    {index % 2 === 0 ? (
                      <p className="text-gray-600">{step.description}</p>
                    ) : (
                      <h4 className="text-3xl font-medium text-gray-900 mb-2">{step.title}</h4>
                    )}
                  </div>

                  <div className="md:hidden mt-6 text-center">
                    <h4 className="text-3xl font-medium text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;

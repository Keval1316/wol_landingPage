import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Data for the feature cards
const features = [
  {
    title: 'Exclusive Access',
    description: 'Private, curated forums with top oncologists and thought leaders, beyond public conferences.',
  },
  {
    title: 'On-Demand, Custom Engagements',
    description: 'Host expert-led events or 1:1 consultation exactly when you need them, without waiting for annual conferences.',
  },
  {
    title: 'Actionable Insights',
    description: 'Real-world, data-backed recommendations designed to support better and faster decision-making.',
  },
  {
    title: 'Tech-Enabled Innovation',
    description: 'AI-powered analytics, interactive Q&A, and seamless integration with your existing digital engagement strategies.',
  },
  {
    title: 'Flexible, Scalable Models',
    description: 'Choose from Subscription-based, per-event, or fully customized advisory sessions that best suits your goals.',
  },
];

// Animation variant for elements rising up
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

// A reusable card component wrapped in motion for animation
const FeatureCard = ({ title, description }) => (
  <motion.div
    variants={riseUpVariant}
    className="bg-gray-100/70 rounded-3xl p-8 h-full flex flex-col"
  >
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <div className="bg-white rounded-2xl w-full h-48"></div>
  </motion.div>
);

// A helper component to make parts of the grid animate independently
const AnimatedGridGroup = ({ children, className }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className={className}
        >
            {children}
        </motion.div>
    );
};


const WhyChooseWOL = () => {
    const titleControls = useAnimation();
    const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if(titleInView) {
            titleControls.start('visible');
        }
    }, [titleControls, titleInView]);

  return (
    <section className="bg-white font-sans py-16 sm:py-12 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Component Title */}
        <motion.div
            ref={titleRef}
            initial="hidden"
            animate={titleControls}
            variants={riseUpVariant}
            className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-gray-900">
            Why Choose WOL?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Top row */}
            <AnimatedGridGroup className="lg:col-span-5 grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                    <FeatureCard title={features[0].title} description={features[0].description} />
                </div>
                <div className="lg:col-span-3">
                    <FeatureCard title={features[1].title} description={features[1].description} />
                </div>
            </AnimatedGridGroup>

            {/* Bottom row */}
            <AnimatedGridGroup className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <FeatureCard title={features[2].title} description={features[2].description} />
                </div>
                <div>
                    <FeatureCard title={features[3].title} description={features[3].description} />
                </div>
                <div>
                    <FeatureCard title={features[4].title} description={features[4].description} />
                </div>
            </AnimatedGridGroup>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWOL;


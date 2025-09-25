import React, { useState } from 'react';

const ExpertSection = () => {
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

  // State to track the currently active step, defaulting to the first one (index 0)
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white font-sans pb-16 sm:pb-24">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Component Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-medium  text-gray-900 leading-tight">
            Choose The Expert <br />Who Resonates With Your Idea.
          </h2>
          
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* The main vertical line for desktop view */}
          <div className="hidden md:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200" aria-hidden="true"></div>

          {/* Steps container */}
          <div className="flex flex-col gap-y-12 md:gap-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(0)} 
              >
                <div className="flex flex-col md:flex-row items-center">
                  
                  {/* === DESKTOP: Left Text Block === */}
                  <div className="hidden md:block w-1/2 pr-8 text-right">
                    {index % 2 === 0 ? (
                      <h4 className="text-3xl font-medium text-gray-900 mb-2">{step.title}</h4>
                    ) : (
                      <p className="text-gray-600">{step.description}</p>
                    )}
                  </div>

                  {/* === Circle (Middle) === */}
                  <div className="relative flex-shrink-0 z-10">
                    {/* Line segment for hover effect on desktop */}
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

                  {/* === DESKTOP: Right Text Block === */}
                  <div className="hidden md:block w-1/2 pl-8 text-left">
                     {index % 2 === 0 ? (
                      <p className="text-gray-600">{step.description}</p>
                    ) : (
                      <h4 className="text-3xl font-medium text-gray-900 mb-2">{step.title}</h4>
                    )}
                  </div>

                  {/* === MOBILE: Text Block below circle === */}
                  <div className="md:hidden mt-6 text-center">
                    <h4 className="text-3xl font-medium text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;


import React from 'react';

const TransformSection= () => {
  const bgImageUrl = '/dnabig.jpg'; // Path to the background image in the public folder

  return (
    <section className="font-sans py-16 sm:py-24">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div
          className="relative rounded-3xl overflow-hidden bg-cover bg-center p-8 sm:p-12 md:p-16"
          style={{ backgroundImage: `url(${bgImageUrl})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start max-w-2xl">
            <div className="bg-white/30 backdrop-blur-sm p-8 sm:p-10 rounded-2xl">
              <h2 className="text-4xl md:text-5xl  text-white leading-tight mb-4">
                Ready to Transform Your Oncology Strategy?
              </h2>
              <p className="text-white text-lg mb-8">
                Connect with the world's leading oncology experts and drive impactful change.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
                  Request a Consultation
                </button>
                <button className="bg-transparent backdrop-blur-sm border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white/20 transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;

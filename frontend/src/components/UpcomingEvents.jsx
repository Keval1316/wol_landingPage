import React from 'react';

const UpcomingEvents = () => {
  return (
    <section className="font-sans py-16 sm:py-12 bg-white">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* Left Column: Title */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight">
              Upcoming
              <br />
              Events at WOL
            </h2>
          </div>

          {/* Right Column: Description and Button */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-600 text-lg mb-8">
              Stay ahead of the curve with our expert-led events. Bringing together oncology leaders, healthcare innovators, and strategic decision-makers from across the globe.
            </p>
            <button className="bg-[#DB3F1D] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300">
              View More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

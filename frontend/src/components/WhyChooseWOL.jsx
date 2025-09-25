import React from 'react';

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

// A reusable card component for a cleaner structure
const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-100/70 rounded-3xl p-8 h-full flex flex-col">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    {/* Placeholder for the inner white box */}
    <div className="bg-white rounded-2xl w-full h-48"></div>
  </div>
);


const WhyChooseWOL = () => {
  return (
    <section className="bg-white font-sans py-16 sm:py-12">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Component Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-medium text-gray-900">
            Why Choose WOL?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* First Card */}
            <div className="lg:col-span-2">
                <FeatureCard title={features[0].title} description={features[0].description} />
            </div>
            {/* Second Card */}
            <div className="lg:col-span-3">
                 <FeatureCard title={features[1].title} description={features[1].description} />
            </div>

            {/* Wrapper for the bottom three cards to make them equal width */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Third Card */}
                <div>
                    <FeatureCard title={features[2].title} description={features[2].description} />
                </div>
                {/* Fourth Card */}
                <div>
                    <FeatureCard title={features[3].title} description={features[3].description} />
                </div>
                {/* Fifth Card */}
                <div>
                    <FeatureCard title={features[4].title} description={features[4].description} />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWOL;


import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


// Data for the event cards
const eventsData = [
  {
    id: 1,
    image: '/image1.jpg',
    title: 'The Evolving Landscape of Triple-Negative Breast Cancer',
    description: 'Join global experts as they explore treatment breakthroughs, biomarker trends, and recent clinical data shaping TNBC strategies for pharma and clinicians.',
    speakers: [
      { name: 'Dr. Samuel Turner', affiliation: 'Dana-Farber Cancer Institute', userImage: 'https://randomuser.me/api/portraits/men/76.jpg', avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=ST' },
    ],
    date: '18 July 2025',
    time: '04pm IST',
  },
  {
    id: 2,
    image: '/image2.jpg',
    title: 'Market Access Challenges in Oncology Across APAC',
    description: 'An invite-only roundtable featuring regional KOLs and policy advisors discussing reimbursement barriers and access issues across Southeast Asia.',
    speakers: [
        { name: 'Medical Affairs and Market Access Leaders', affiliation: 'from Top Pharma', userImage: 'https://randomuser.me/api/portraits/men/46.jpg', avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=MA' },
    ],
    date: '02 Aug 2025',
    time: '11am IST',
  },
  {
    id: 3,
    image: '/image3.jpg',
    title: 'Digital Therapeutics in Oncology: Hype or Hope?',
    description: 'Explore how digital tools—from symptom tracking apps to virtual CBT—are being integrated into oncology workflows and what that means for patient outcomes.',
    speakers: [
      { name: 'Dr. Jonah Ellis', affiliation: 'UK', userImage: 'https://randomuser.me/api/portraits/men/32.jpg', avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=JE' },
      { name: 'Dr. Laura Mendes', affiliation: 'Roche Digital Health', userImage: 'https://randomuser.me/api/portraits/women/76.jpg', avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=LM' },
    ],
    date: '25 July 2025',
    time: 'On Demand',
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

// A new component for a single event card to handle its own animation
const EventCard = ({ event }) => {
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

    const dateParts = event.date.split(' ');
    const day = dateParts.shift();
    const restOfDate = dateParts.join(' ');

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={riseUpVariant}
            className="bg-gray-50 rounded-3xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                
                <div className="mb-4">
                    {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <img src={speaker.userImage ? speaker.userImage : speaker.avatar} alt={speaker.name} className="w-8 h-8 rounded-full mr-3" />
                            <div>
                                <p className="font-semibold text-sm text-gray-800">{speaker.name}</p>
                                <p className="text-xs text-gray-500">{speaker.affiliation}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Date and Time Section */}
                <div className="bg-white rounded-2xl p-3 flex justify-center items-center gap-x-8 text-sm my-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-black">{day}</span>
                        <span className="text-sm text-gray-500 whitespace-nowrap">{restOfDate}</span>
                    </div>
                    <div className="h-6 w-px bg-gray-200"></div>
                    {event.time === 'On Demand' ? (
                        <div className="flex items-baseline">
                            <span className="text-lg font-medium text-gray-700">-- {event.time}</span>
                        </div>
                    ) : (
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-medium text-black">{event.time.split(' ')[0]}</span>
                            <span className="text-sm text-gray-500">{event.time.split(' ')[1]}</span>
                        </div>
                    )}
                </div>

                <button className="mt-auto w-full bg-[#DB3F1D] text-white font-bold py-3 px-6 rounded-xl hover:bg-opacity-90 transition-colors duration-300">
                    Register Now
                </button>
            </div>
        </motion.div>
    );
};


const EventsSection = () => {
  return (
    <section className="font-sans bg-white py-16 sm:py-12 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;


import React from 'react';

const SubscribeSection = () => {
    return (
        <section className="font-sans bg-white py-16 sm:pyb-24">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="bg-black rounded-3xl  overflow-hidden flex flex-col lg:flex-row items-stretch">

                    {/* Text Content Section */}
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 text-center lg:text-left flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight mb-6">
                            Get expert updates and event invites—straight to your inbox.
                        </h2>
                        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300 self-center lg:self-start">
                            Subscribe Now
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                        <img
                            src="/dnabg.jpg"
                            alt="Stylized DNA helix"
                            className="w-full max-h-76 object-cover rounded-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;

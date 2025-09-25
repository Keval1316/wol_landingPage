import React from "react";

function Hero() {
  return (
    <section
      className=" mt-20 mx-16 min-h-screen flex items-center justify-start px-6 md:px-16 lg:px-24"
      // py-16 sm:py-24 px-6 md:px-16 lg:px-24
      style={{
        backgroundImage: "url('public/bgHero.jpg')",
        backgroundSize: "200%",
        backgroundPosition: "left center",
        borderRadius: "1rem",
      }}
    >
      <div className="max-w-xl text-left text-white space-y-6">
        {/* Small Badge */}
        <span className="inline-block bg-white/20 text-white text-sm px-6 py-3 rounded-full">
          WOL
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl  leading-tight">
          World Oncology <br /> Leadership
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white/90 leading-relaxed">
          Bridge the Knowledge Gap in Oncology — Engage <br />
          with Global KOLs — Deliver Tangible Results in Oncology
        </p>

        {/* Button */}
        <button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Join the Experts
        </button>

        {/* Bottom Card */}
       <div className="mt-10 bg-white/30 backdrop-blur-md p-6 rounded-2xl w-fit">
  {/* Number and text side by side */}
  <div className="flex items-center space-x-4">
    <h3 className="text-2xl font-bold">1000+</h3>
    <p className="text-sm text-white/90">
      growing global community <br /> of oncology experts.
    </p>
  </div>

  {/* Images under both */}
  <div className="flex -space-x-2 mt-4">
    <img
      src="https://randomuser.me/api/portraits/men/32.jpg"
      alt="user1"
      className="w-10 h-10 rounded-full border-2 border-white"
    />
    <img
      src="https://randomuser.me/api/portraits/women/44.jpg"
      alt="user2"
      className="w-10 h-10 rounded-full border-2 border-white"
    />
    <img
      src="https://randomuser.me/api/portraits/men/76.jpg"
      alt="user3"
      className="w-10 h-10 rounded-full border-2 border-white"
    />
  </div>
</div>

      </div>
    </section>
  );
}

export default Hero;
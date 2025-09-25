import React, { useState, useRef } from 'react';

const AboutWOL = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause for the video
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="bg-white sm:pb-24">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        {/* Header Section */}
        <div className="flex flex-col pb-12 md:flex-row justify-between md:items-end mb-10">
          <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 leading-tight mb-4 md:mb-0">
            Know more <br /> about the WOL
          </h2>
          <p className="text-gray-600 text-base md:text-right max-w-xs">
            WOL stands for World Oncology Leadership.
          </p>
        </div>


        {/* Video Player Section */}
        <div
          className="relative group w-full aspect-[16/8] rounded-3xl overflow-hidden  cursor-pointer"
          onClick={handlePlayPause}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            src="/WolVideo.mp4"
            loop
            muted
            preload="metadata"       // or "auto"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          />


          {/* Play Button Overlay - only shows when video is paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/30  rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-all duration-300 ease-in-out  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 82 82"
                  fill="none"
                  className="relative w-full h-full"
                >
                  {/* Outer Circle - White Border */}
                  <circle cx="41" cy="41" r="40" stroke="white" strokeWidth="2" />
                  {/* Inner Circle - Semi-transparent so the blurred background from the div behind it shows through */}
                  <circle cx="41" cy="41" r="28" fill="white" fillOpacity="0.4" />
                  {/* Play Triangle */}
                  <path
                    d="M35.0337 35.6633C35.0337 34.081 36.7842 33.1253 38.1152 33.981L46.4167 39.3176C47.6413 40.1049 47.6413 41.8951 46.4167 42.6824L38.1152 48.019C36.7842 48.8747 35.0337 47.919 35.0337 46.3367V35.6633Z"
                    fill="#DB3F1D"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutWOL;


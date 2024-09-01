import React from 'react';

const Hero = ({ title = "Mars Hill University Study Lion", subtitle = "AI Enabled Student and Instructor Assistant" }) => {
  return (
    <section className="bg-blue-900 py-16 mb-6 mt-0"> {/* Removed top margin and reduced padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-5xl font-serif font-bold text-[#f4c547] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="my-6 text-2xl text-gray-200">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

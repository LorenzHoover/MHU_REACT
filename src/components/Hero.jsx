import React from 'react';

const Hero = ({ title = "Mars Hill University Study Lion", subtitle = "AI Enabled Student and Instructor Assistant" }) => {
  return (
    <section className="bg-[#002D72] py-16 mb-6 mt-0"> {/* Mars Hill Blue as background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          {/* Title: Trajan Pro Regular, all caps, 30 pt font on 36 pt leading */}
          <h1 className="text-[30pt] leading-[36pt] font-serif uppercase text-[#FFDD00] sm:text-[30pt] md:text-[36pt]">
            {title}
          </h1>
          {/* Subtitle: Source Sans Pro Regular, 12 pt font on 16 pt leading */}
          <p className="my-6 text-[12pt] leading-[16pt] text-white">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

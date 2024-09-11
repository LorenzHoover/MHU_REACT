import React, { useState } from 'react';

// Import the images
import floyd from '../assets/images/floyd.jpg';
import football from '../assets/images/football.jpg';
import graduation from '../assets/images/graduation.jpg';
import stonewall from '../assets/images/stonewall.jpg';
import BigCheck from '../assets/images/BigCheck.jpg';
import BrickWall from '../assets/images/BrickWall.jpg';
import DuncanOrange from '../assets/images/DuncanOrange.jpg';
import Entrepreneurship from '../assets/images/Entrepreneurship.jpg';
import MMPresenters from '../assets/images/MMPresenters.jpg';
import Presenter from '../assets/images/Presenter.jpg';

const images = [
  { src: stonewall }, // Stonewall is now the first image
  { src: floyd },
  { src: football },
  { src: graduation },
  { src: BigCheck },
  { src: BrickWall },
  { src: DuncanOrange },
  { src: Entrepreneurship },
  { src: MMPresenters },
  { src: Presenter },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative w-[90%] max-w-6xl mx-auto rounded-lg overflow-hidden"> {/* Adjusted width */}
      <div className="relative h-112 md:h-[600px]"> {/* Increased height */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Updated buttons to match MHU blue and yellow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-[#002D72] text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#FFDD00]"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-[#002D72] text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#FFDD00]"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === current ? 'bg-[#FFDD00]' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

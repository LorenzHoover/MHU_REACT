import React, { useState } from 'react';

// Import the images
import floyd from '../assets/images/floyd.jpg';
import football from '../assets/images/football.jpg';
import graduation from '../assets/images/graduation.jpg';
import stonewall from '../assets/images/stonewall.jpg';

const images = [
  { src: floyd },
  { src: football },
  { src: graduation },
  { src: stonewall },
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
    <div className="relative w-full mx-auto rounded-lg overflow-hidden">
      <div className="relative h-64 md:h-80">
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
              className="w-full h-full object-cover rounded-b-lg"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-900 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#f4c547]"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-900 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#f4c547]"
      >
        &#10095;
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === current ? 'bg-[#f4c547]' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

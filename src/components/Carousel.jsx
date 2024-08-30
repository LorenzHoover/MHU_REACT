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
<<<<<<< HEAD
    <div className="relative w-[90%] max-w-6xl mx-auto rounded-lg overflow-hidden"> {/* Adjusted width */}
      <div className="relative h-112 md:h-[600px]"> {/* Increased height */}
=======
    <div className="relative w-full mx-auto rounded-lg overflow-hidden">
      <div className="relative h-96 md:h-112"> {/* Increased the height */}
>>>>>>> f018782 (saving local but not pushing to main repo)
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
<<<<<<< HEAD
              className="w-full h-full object-cover rounded-lg"
=======
              className="w-full h-full object-cover rounded-lg" // Remove rounded-b-lg to round all corners
>>>>>>> f018782 (saving local but not pushing to main repo)
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-blue-900 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#f4c547]"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-blue-900 text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-[#f4c547]"
        aria-label="Next Slide"
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

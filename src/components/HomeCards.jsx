import React from 'react';
import Carousel from './Carousel';

const HomeCards = () => {
  return (
    <section className="py-8 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-screen-lg px-8">
        <Carousel />
      </div>
    </section>
  );
};

export default HomeCards;

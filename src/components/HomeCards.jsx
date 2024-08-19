import React from 'react';
import Carousel from './Carousel';

const HomeCards = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 p-6">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default HomeCards;

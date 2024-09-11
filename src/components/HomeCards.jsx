import React from 'react';
import Carousel from './Carousel';

const HomeCards = () => {
  return (
    <section className="py-8 bg-[#E0E0E0] flex justify-center items-center"> {/* Mars Hill Light Gray background */}
      <div className="w-full max-w-screen-lg px-8">
        <Carousel />
      </div>
    </section>
  );
};

export default HomeCards;

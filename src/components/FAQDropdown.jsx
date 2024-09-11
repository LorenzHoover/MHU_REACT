import React, { useState } from 'react';

const FAQDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-gray-200 py-4">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full text-left text-lg font-bold text-black"
      >
        {/* FAQ Question: Source Sans Pro Bold */}
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-2 text-sm font-light leading-[1.4rem] text-black">
          {/* FAQ Answer: Source Sans Pro Light */}
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQDropdown;

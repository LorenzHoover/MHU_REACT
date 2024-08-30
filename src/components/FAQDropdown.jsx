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
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900"
      >
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-sm text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQDropdown;

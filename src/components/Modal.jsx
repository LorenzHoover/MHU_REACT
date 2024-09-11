import React from 'react';

const Modal = ({ showModal, closeModal, message }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
        {/* Heading: Trajan Pro Regular, all caps */}
        <h2 className="text-xl font-serif font-bold uppercase text-[#002D72] mb-4">
          Submission Received
        </h2>
        
        {/* Body Text: Source Sans Pro Light */}
        <p className="text-gray-700 font-light text-[10pt] leading-[14pt] mb-6">
          {message}
        </p>
        
        {/* Close Button: Mars Hill Blue with hover effect */}
        <button
          onClick={closeModal}
          className="bg-[#002D72] text-white px-4 py-2 rounded-lg hover:bg-[#0048A8] focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

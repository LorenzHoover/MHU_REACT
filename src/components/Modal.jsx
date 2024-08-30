import React from 'react';

const Modal = ({ showModal, closeModal, message }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Submission Received</h2>
        <p className="text-gray-700 mb-6">{message}</p>
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

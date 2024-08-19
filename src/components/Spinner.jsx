import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-blue-900 h-12 w-12" style={{ borderTopColor: '#f2ae00' }}></div>
    </div>
  );
};

export default Spinner;

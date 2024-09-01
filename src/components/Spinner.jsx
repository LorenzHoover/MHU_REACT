import React from 'react';

const Spinner = ({ size = 12, color = '#f2ae00', borderSize = 4 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="loader"
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          border: `${borderSize}px solid ${color}`,
          borderTop: `${borderSize}px solid transparent`,
        }}
        aria-label="Loading"
      ></div>
    </div>
  );
};x

export default Spinner;

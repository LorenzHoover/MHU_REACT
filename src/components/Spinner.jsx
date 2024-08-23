import React from 'react';

const Spinner = ({ size = 12, color = '#f2ae00', borderSize = 4 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`loader ease-linear rounded-full border-${borderSize} border-t-${borderSize}`}
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          borderColor: `${color} transparent`,
          borderTopColor: color,
          animation: 'spin 1s linear infinite',
        }}
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Spinner;

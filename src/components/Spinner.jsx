import React from 'react';

const Spinner = ({ size = 12, borderSize = 4 }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="loader"
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          border: `${borderSize}px solid #FFDD00`, // Mars Hill Yellow
          borderTop: `${borderSize}px solid #002D72`, // Mars Hill Blue
          borderRight: `${borderSize}px solid transparent`, // Creates the two-tone effect
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
        aria-label="Loading"
      ></div>
    </div>
  );
};

export default Spinner;

import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, bg = "bg-gray-100" }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-lg border border-black hover:shadow-xl transition-shadow duration-300`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
};

Card.defaultProps = {
  bg: "bg-gray-100",
};

export default Card;

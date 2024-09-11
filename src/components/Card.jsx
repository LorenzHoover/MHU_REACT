import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, bg = "bg-white" }) => {
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
  bg: "bg-white", // Default background set to white to match MHU's color palette
};

export default Card;

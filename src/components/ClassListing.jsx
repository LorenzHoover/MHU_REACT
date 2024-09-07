import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ClassListing = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="mb-6">
          <div className="text-teal-600 my-2">{item["Class Code"]}</div>
          <h3 className="text-2xl font-serif text-blue-900">{item["Class Name"]}</h3>
        </div>
        <div className="mb-5">
          <strong className="text-gray-800">Professor:</strong> {item.Professor}
        </div>
        <div className="mb-5">
          <strong className="text-gray-800">Description:</strong> {item.Description}
        </div>
        <div className="mb-5">
          <strong className="text-gray-800">Contact Email:</strong> <a href={`mailto:${item["Contact Email"]}`} className="text-teal-600 hover:underline">{item["Contact Email"]}</a>
        </div>
        <div className="mb-5">
          <strong className="text-gray-800">Department:</strong> {item.Department}
        </div>
        <div className="mb-5">
          <strong className="text-gray-800">Office Location:</strong> {item["Office Location"]}
        </div>
        <div className="border-t border-gray-300 mb-5"></div>
        <div className="flex justify-center">
          <Link
            to={`/class/${item.id}`}
            className="class-gpt-button h-[36px] bg-blue-900 text-white px-4 py-2 rounded-lg text-center text-sm transition-colors duration-300 hover:bg-[#f4c547]"
            aria-label={`Go to GPT Assistant for ${item["Class Name"]}`}
          >
            Class GPT
          </Link>
        </div>
      </div>
    </div>
  );
};

ClassListing.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    "Class Code": PropTypes.string.isRequired,
    "Class Name": PropTypes.string.isRequired,
    Professor: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    "Contact Email": PropTypes.string.isRequired,
    Department: PropTypes.string.isRequired,
    "Office Location": PropTypes.string.isRequired,
  }).isRequired,
};

export default ClassListing;

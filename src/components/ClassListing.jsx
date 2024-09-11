import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ClassListing = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="mb-6">
          {/* Class Code: Source Sans Pro Bold, 10pt on 14pt, Mars Hill Yellow */}
          <div className="text-[#FFDD00] font-bold text-[10pt] leading-[14pt] my-2">
            {item["Class Code"]}
          </div>
          
          {/* Class Name: Source Sans Pro Regular, all caps, 12pt on 16pt, Mars Hill Blue */}
          <h3 className="text-[#002D72] font-regular text-[12pt] leading-[16pt] uppercase">
            {item["Class Name"]}
          </h3>
        </div>

        <div className="mb-5">
          {/* Body Text: Source Sans Pro Light, 10pt on 14pt, bolded label */}
          <strong className="font-bold text-[10pt] leading-[14pt] text-black">Professor:</strong>{' '}
          <span className="font-light text-[10pt] leading-[14pt] text-black">{item.Professor}</span>
        </div>

        <div className="mb-5">
          <strong className="font-bold text-[10pt] leading-[14pt] text-black">Description:</strong>{' '}
          <span className="font-light text-[10pt] leading-[14pt] text-black">{item.Description}</span>
        </div>

        <div className="mb-5">
          {/* Contact Email: Mars Hill Blue */}
          <strong className="font-bold text-[10pt] leading-[14pt] text-black">Contact Email:</strong>{' '}
          <a href={`mailto:${item["Contact Email"]}`} className="text-[#002D72] hover:underline">
            {item["Contact Email"]}
          </a>
        </div>

        <div className="mb-5">
          <strong className="font-bold text-[10pt] leading-[14pt] text-black">Department:</strong>{' '}
          <span className="font-light text-[10pt] leading-[14pt] text-black">{item.Department}</span>
        </div>

        <div className="mb-5">
          <strong className="font-bold text-[10pt] leading-[14pt] text-black">Office Location:</strong>{' '}
          <span className="font-light text-[10pt] leading-[14pt] text-black">{item["Office Location"]}</span>
        </div>

        <div className="border-t border-gray-300 mb-5"></div>

        <div className="flex justify-center">
          <Link
            to={`/class/${item.id}`}
            className="class-gpt-button h-[36px] bg-[#002D72] text-white px-4 py-2 rounded-lg text-center text-sm transition-colors duration-300 font-bold hover:bg-[#FFDD00]"
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

import React from 'react';
import { Link } from 'react-router-dom';

const ClassListing = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{item["Class Code"]}</div>
          <h3 className="text-xl font-bold">{item["Class Name"]}</h3>
        </div>
        <div className="mb-5">
          <strong>Professor:</strong> {item.Professor}
        </div>
        <div className="mb-5">
          <strong>Description:</strong> {item.Description}
        </div>
        <div className="mb-5">
          <strong>Contact Email:</strong> {item["Contact Email"]}
        </div>
        <div className="mb-5">
          <strong>Department:</strong> {item.Department}
        </div>
        <div className="mb-5">
          <strong>Location:</strong> {item.Location}
        </div>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex justify-center">
          <Link
            to={`/class/${item.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Class GPT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassListing;

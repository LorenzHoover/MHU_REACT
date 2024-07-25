import React from 'react';
import ClassListing from './ClassListing';
import classes from '../classes.json';

const ClassListings = () => {
  console.log('Classes:', classes); // Log the JSON data to check its structure
  const classList = classes.classes; // Access the classes array
  // const recentClassList = classList.slice(0,3); // Get the first 3 classes for the recent section
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classList.map((item, index) => (
            <ClassListing key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassListings;

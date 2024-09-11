import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classData from '../classes.json'; // Ensure the path to your JSON file is correct
import ClassListing from './ClassListing'; // Import the ClassListing component

const ClassListings = () => {
  const classesPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const totalPages = Math.ceil(classData.classes.length / classesPerPage);

  const handleClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    setTranslateX(-pageIndex * 100);
  };

  const getVisibleClasses = (pageIndex) => {
    const start = pageIndex * classesPerPage;
    const end = start + classesPerPage;
    const visibleClasses = classData.classes.slice(start, end);

    while (visibleClasses.length < classesPerPage) {
      visibleClasses.push(null);
    }

    return visibleClasses;
  };

  return (
    <div className="container mx-auto p-6">
      {/* Heading: Trajan Pro Regular, all caps, Mars Hill Blue */}
      <h2 className="text-3xl font-serif uppercase text-[#002D72] mb-6">Courses</h2>
      
      <div className="class-list-wrapper overflow-hidden relative">
        <div
          className="class-list flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="flex min-w-full">
              {getVisibleClasses(pageIndex).map((classItem, index) => (
                <div key={index} className="class-item p-4">
                  {classItem ? <ClassListing item={classItem} /> : <div className="empty-slot"></div>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel circles: Mars Hill Blue and Yellow */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handleClick(pageIndex)}
            aria-label={`Go to page ${pageIndex + 1}`}
            className={`carousel-circle w-4 h-4 mx-1 rounded-full ${
              pageIndex === currentPage
                ? 'bg-[#002D72]' // Mars Hill Blue for the active circle
                : 'bg-white border border-[#002D72]' // White with a Mars Hill Blue border for inactive circles
            } transition-colors duration-300 hover:bg-[#FFDD00]`} // Mars Hill Yellow for hover
          ></button>
        ))}
      </div>

      {/* View All Classes Button */}
      <div className="flex justify-center mt-6">
        <Link
          to="/view-all-classes"
          className="view-all-classes-button h-[36px] bg-[#002D72] text-white px-4 py-2 rounded-lg text-center text-sm transition-colors duration-300 font-bold hover:bg-[#FFDD00]"
        >
          View All Classes
        </Link>
      </div>
    </div>
  );
};

export default ClassListings;

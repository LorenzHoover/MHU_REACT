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
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
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
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handleClick(pageIndex)}
            className={`w-4 h-4 mx-1 rounded-full ${
              pageIndex === currentPage
                ? 'bg-indigo-500'
                : 'bg-white border border-indigo-500'
            }`}
          ></button>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/view-all-classes" className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
          View All Classes
        </Link>
      </div>
    </div>
  );
};

export default ClassListings;

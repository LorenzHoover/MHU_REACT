import React, { useState, useEffect } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa'; // Import icons for search and filter
import classData from '../classes.json'; // Ensure the path to your JSON file is correct
import ClassListing from './ClassListing'; // Import the ClassListing component

const ViewAllClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterDepartment(event.target.value);
  };

  const filteredClasses = classData.classes.filter((classItem) => {
    return (
      (classItem['Class Name'].toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      classItem['Class Code'].toLowerCase().includes(debouncedSearchTerm.toLowerCase())) &&
      (filterDepartment === '' || classItem.Department === filterDepartment)
    );
  });

  const departments = [...new Set(classData.classes.map((classItem) => classItem.Department))];

  return (
    <div className="container mx-auto p-6">
      {/* Main Heading: Trajan Pro, all caps */}
      <h2 className="text-[30pt] leading-[36pt] font-serif font-bold text-[#002D72] uppercase mb-8">All Classes</h2>
      
      {/* Search and Filter Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search by class name or code"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#002D72] transition-colors duration-300 shadow-sm"
            />
          </div>
          <div className="relative">
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <select 
              value={filterDepartment} 
              onChange={handleFilter} 
              className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#002D72] transition-colors duration-300 shadow-sm"
            >
              <option value="">All Departments</option>
              {departments.map((department) => (
                <option key={department} value={department}>{department}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Class Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.length > 0 ? (
          filteredClasses.map((classItem) => (
            <div 
              key={classItem.id} 
              className="class-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:translate-y-[-5px]"
            >
              <ClassListing item={classItem} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">No classes found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewAllClasses;

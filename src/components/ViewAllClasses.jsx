import React, { useState } from 'react';
import classData from '../classes.json'; // Ensure the path to your JSON file is correct
import ClassListing from './ClassListing'; // Import the ClassListing component

const ViewAllClasses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterDepartment(event.target.value);
  };

  const filteredClasses = classData.classes.filter((classItem) => {
    return (
      (classItem['Class Name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      classItem['Class Code'].toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterDepartment === '' || classItem.Department === filterDepartment)
    );
  });

  const departments = [...new Set(classData.classes.map((classItem) => classItem.Department))];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Classes</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search by class name or code"
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg mr-4"
        />
        <select value={filterDepartment} onChange={handleFilter} className="p-2 border border-gray-300 rounded-lg">
          <option value="">All Departments</option>
          {departments.map((department) => (
            <option key={department} value={department}>{department}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClasses.map((classItem) => (
          <div key={classItem.id} className="class-item p-4">
            <ClassListing item={classItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllClasses;

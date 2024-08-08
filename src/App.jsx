import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import ClassListings from './components/ClassListings';
import ViewAllClasses from './components/ViewAllClasses';
import ClassDetail from './components/ClassDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HomeCards />
            <ClassListings />
            <ViewAllClasses />
          </>
        } />
        <Route path="/class/:classId" element={<ClassDetail />} />
        <Route path="/view-all-classes" element={<ViewAllClasses />} />
      </Routes>
    </Router>
  );
};

export default App;

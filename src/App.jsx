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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <HomeCards />
                  <ClassListings />
                </>
              }
            />
            <Route path="/class/:classId" element={<ClassDetail />} />
            <Route path="/view-all-classes" element={<ViewAllClasses />} />
            <Route
              path="*"
              element={<div className="text-center p-6">404: Page Not Found</div>}
            />
          </Routes>
        </main>
        <footer className="bg-blue-900 text-white text-center py-4">
          <p>&copy; 2024 Mars Hill University. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

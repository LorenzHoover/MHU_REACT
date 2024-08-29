import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ViewAllClasses from './components/ViewAllClasses';
import ClassDetail from './components/ClassDetail';
import Footer from './components/Footer'; // Import the Footer component
import AboutUs from './components/AboutUs'; // Import the About Us component
import MissionStatement from './components/MissionStatement'; // Import the Mission Statement component
import Carousel from './components/Carousel'; // Import the Carousel component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={true} onLogout={() => console.log('Logged out')} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero /> {/* MHU Study Lion Section */}
                  <Carousel /> {/* Carousel */}
                  <MissionStatement /> {/* Mission Statement section */}
                </>
              }
            />
            <Route path="/view-all-classes" element={<ViewAllClasses />} />
            <Route path="/class/:classId" element={<ClassDetail />} />
            <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
            <Route
              path="*"
              element={<div className="text-center p-6">404: Page Not Found</div>}
            />
          </Routes>
        </main>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
};

export default App;

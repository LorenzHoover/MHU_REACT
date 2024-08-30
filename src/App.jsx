import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
<<<<<<< HEAD
import ViewAllClasses from './components/ViewAllClasses';
import ClassDetail from './components/ClassDetail';
import Footer from './components/Footer'; // Import the Footer component
import AboutUs from './components/AboutUs'; // Import the About Us component
import MissionStatement from './components/MissionStatement'; // Import the Mission Statement component
import Carousel from './components/Carousel'; // Import the Carousel component
=======
import HomeCards from './components/HomeCards';
import ClassListings from './components/ClassListings';
import ViewAllClasses from './components/ViewAllClasses';
import ClassDetail from './components/ClassDetail';
>>>>>>> f018782 (saving local but not pushing to main repo)

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
<<<<<<< HEAD
        <Navbar isLoggedIn={true} onLogout={() => console.log('Logged out')} />
=======
        <Navbar />
>>>>>>> f018782 (saving local but not pushing to main repo)
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
<<<<<<< HEAD
                  <Hero /> {/* MHU Study Lion Section */}
                  <Carousel /> {/* Carousel */}
                  <MissionStatement /> {/* Mission Statement section */}
                </>
              }
            />
            <Route path="/view-all-classes" element={<ViewAllClasses />} />
            <Route path="/class/:classId" element={<ClassDetail />} />
            <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
=======
                  <Hero />
                  <HomeCards />
                  <ClassListings />
                </>
              }
            />
            <Route path="/class/:classId" element={<ClassDetail />} />
            <Route path="/view-all-classes" element={<ViewAllClasses />} />
>>>>>>> f018782 (saving local but not pushing to main repo)
            <Route
              path="*"
              element={<div className="text-center p-6">404: Page Not Found</div>}
            />
          </Routes>
        </main>
<<<<<<< HEAD
        <Footer /> {/* Footer component */}
=======
        <footer className="bg-blue-900 text-white text-center py-4">
          <p>&copy; 2024 Mars Hill University. All rights reserved.</p>
        </footer>
>>>>>>> f018782 (saving local but not pushing to main repo)
      </div>
    </Router>
  );
};

export default App;

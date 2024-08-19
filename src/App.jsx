import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import ClassListings from './components/ClassListings';
import ViewAllClasses from './components/ViewAllClasses';
import ClassDetail from './components/ClassDetail';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <>
                    <Hero />
                    <HomeCards />
                    <ClassListings />
                  </>
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route path="/class/:classId" element={isLoggedIn ? <ClassDetail /> : <LoginPage onLogin={handleLogin} />} />
            <Route path="/view-all-classes" element={isLoggedIn ? <ViewAllClasses /> : <LoginPage onLogin={handleLogin} />} />
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

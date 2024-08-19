import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mhulogo from '../assets/images/mhulogo.svg';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to the homepage after logging out
  };

  return (
    <nav className="bg-blue-900/90 h-18 py-6 w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link to="/" className="flex flex-shrink-0 items-center mr-4">
              <img
                className="h-10 w-auto filter-logo"
                src={mhulogo}
                alt="MHU Study Lion"
              />
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link
                  to="/"
                  className="text-blue-900 bg-white hover:bg-[#f4c547] hover:text-white rounded-md px-3 py-2 transition-colors duration-300"
                >
                  Home
                </Link>
                <a
                  href="https://www.mhu.edu/"
                  className="text-blue-900 bg-white hover:bg-[#f4c547] hover:text-white rounded-md px-3 py-2 transition-colors duration-300"
                >
                  MHU
                </a>
                <a
                  href="/mission.html"
                  className="text-blue-900 bg-white hover:bg-[#f4c547] hover:text-white rounded-md px-3 py-2 transition-colors duration-300"
                >
                  Our Mission
                </a>
                {isLoggedIn && (
                  <button
                    onClick={handleLogout}
                    className="text-blue-900 bg-white hover:bg-[#f4c547] hover:text-white rounded-md px-3 py-2 transition-colors duration-300"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

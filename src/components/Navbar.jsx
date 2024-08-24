import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import mhulogo from '../assets/images/mhulogo.svg';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to the homepage after logging out
  };

  return (
    <nav className="bg-blue-900/90 h-18 py-6 w-full">
      <div className="flex items-center justify-between px-8"> {/* Added padding for spacing */}
        {/* Left-aligned logo */}
        <Link to="/" className="flex items-center">
          <img
            className="h-10 w-auto filter-logo"
            src={mhulogo}
            alt="MHU Study Lion"
          />
        </Link>

        {/* Right-aligned buttons */}
        <div className="flex space-x-4"> {/* Added more spacing between buttons */}
          <NavLink
            to="/"
            className="bg-[#f4c547] text-white rounded-md px-3 py-2 transition-colors duration-300"
          >
            Home
          </NavLink>
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
    </nav>
  );
};

export default Navbar;

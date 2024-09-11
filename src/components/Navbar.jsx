import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import file from '../assets/images/file.png';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classData from '../classes.json'; // Import class data
import { logout } from '../../functions/logout';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    if (classData && classData.classes) {
      setClasses(classData.classes);
    }
  }, []);

  const handleLogout = async () => {
    onLogout();
    await logout();
  };

  return (
    <nav className="bg-[#002D72] h-16 w-full shadow-lg flex items-center">
      <div className="flex items-center justify-between w-full px-8">
        {/* Left-aligned logo */}
        <Link to="/" className="flex items-center">
          <img
            className="h-12 w-auto"
            src={file}
            alt="MHU Study Lion"
          />
        </Link>

        {/* Right-aligned buttons */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className="navbar-button bg-[#FFDD00] text-white rounded-md px-3 py-1 text-base flex items-center justify-center font-bold uppercase transition-colors duration-300"
          >
            Home
          </NavLink>

          {/* Courses Dropdown */}
          <Menu as="div" className="relative">
            <MenuButton className="navbar-button bg-white text-[#002D72] hover:bg-[#FFDD00] hover:text-white rounded-md px-3 py-1 text-base flex items-center justify-center transition-colors duration-300 font-bold uppercase">
              Courses
              <ChevronDownIcon aria-hidden="true" className="ml-1 h-5 w-5 text-gray-400" />
            </MenuButton>
            <MenuItems className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {classes.slice(0, 5).map((classItem) => (
                <MenuItem key={classItem.id}>
                  {({ active }) => (
                    <Link
                      to={`/class/${classItem.id}`}
                      className={`${active ? 'bg-gray-100' : ''
                        } block px-4 py-2 text-sm text-gray-700 font-light`}
                    >
                      {classItem["Class Name"]}
                    </Link>
                  )}
                </MenuItem>
              ))}
              <div className="border-t border-gray-300 my-1"></div>
              <MenuItem>
                {({ active }) => (
                  <NavLink
                    to="/view-all-classes/"
                    className={`${active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700 text-center font-bold uppercase`}
                  >
                    View All Courses
                  </NavLink>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>

          <NavLink
            to="/about-us"
            className="navbar-button bg-white text-[#002D72] hover:bg-[#FFDD00] hover:text-white rounded-md px-3 py-1 text-base flex items-center justify-center font-bold uppercase transition-colors duration-300"
          >
            About Us
          </NavLink>

          <a
            href="https://www.mhu.edu/"
            target="_blank"
            className="navbar-button text-[#002D72] bg-white hover:bg-[#FFDD00] hover:text-white rounded-md px-3 py-1 text-base flex items-center justify-center font-bold uppercase transition-colors duration-300"
          >
            MHU
          </a>

          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="navbar-button text-[#002D72] bg-white hover:bg-[#FFDD00] hover:text-white rounded-md px-3 py-1 text-base flex items-center justify-center font-bold uppercase transition-colors duration-300"
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

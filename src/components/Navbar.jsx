import React from 'react';
import { Link } from 'react-router-dom';
import mhulogo from '../assets/images/mhulogo.svg';

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <Link to="/" className="flex flex-shrink-0 items-center mr-4">
              <img className="h-10 w-auto" src={mhulogo} alt="MHU Study Lion" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                MHU Study Lion
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <Link to="/" className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Home
                </Link>
                <a href="https://www.mhu.edu/" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  MHU
                </a>
                <a href="/mission.html" className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Our Mission
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

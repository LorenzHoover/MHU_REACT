import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <a 
          href="https://www.instagram.com/marshillu/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#F4C547] transition-colors duration-300"
        >
          <FaInstagram className="h-6 w-6 text-[#F4C547]" /> {/* MHU Yellow/Gold color */}
        </a>
        <a 
          href="https://twitter.com/MarsHillU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#F4C547] transition-colors duration-300"
        >
          <FaTwitter className="h-6 w-6 text-[#F4C547]" /> {/* MHU Yellow/Gold color */}
        </a>
        <a 
          href="https://www.facebook.com/MarsHillUniversity/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#F4C547] transition-colors duration-300"
        >
          <FaFacebookF className="h-6 w-6 text-[#F4C547]" /> {/* MHU Yellow/Gold color */}
        </a>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Mars Hill University. All rights reserved.</p>
        <Link to="/privacy-policy" className="hover:text-[#F4C547] transition-colors duration-300">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

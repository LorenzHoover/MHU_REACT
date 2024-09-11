import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'; // Import icons from react-icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-[#002D72] text-white py-4"> {/* Mars Hill Blue for background */}
      <div className="container mx-auto flex justify-center space-x-6">
        <a 
          href="https://www.instagram.com/marshillu/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#FFDD00] transition-colors duration-300" // Hover effect in Mars Hill Yellow
        >
          <FaInstagram className="h-6 w-6 text-[#FFDD00]" /> {/* MHU Yellow color for icons */}
        </a>
        <a 
          href="https://twitter.com/MarsHillU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#FFDD00] transition-colors duration-300"
        >
          <FaTwitter className="h-6 w-6 text-[#FFDD00]" /> {/* MHU Yellow color for icons */}
        </a>
        <a 
          href="https://www.facebook.com/MarsHillUniversity/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#FFDD00] transition-colors duration-300"
        >
          <FaFacebookF className="h-6 w-6 text-[#FFDD00]" /> {/* MHU Yellow color for icons */}
        </a>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Mars Hill University. All rights reserved.</p>
        <Link to="/privacy-policy" className="hover:text-[#FFDD00] transition-colors duration-300">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

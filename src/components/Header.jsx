import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 shadow-lg w-screen"> {/* Softer gradient background */}
      <div className="flex justify-between items-center py-4 px-6 w-screen">
        <span className="font-bold text-3xl text-gray-800 tracking-wide transition-transform transform hover:scale-110 duration-300">
          Certification Tracker
        </span>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link 
            to="/" 
            className="text-gray-800 hover:text-blue-500 font-medium transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link 
            to="/login" 
            className="text-gray-800 hover:text-green-500 font-medium transition-colors duration-300 transform hover:scale-105"
          >
            Login
          </Link>
          <Link 
            to="/dashboard" 
            className="text-gray-800 hover:text-purple-500 font-medium transition-colors duration-300 transform hover:scale-105"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

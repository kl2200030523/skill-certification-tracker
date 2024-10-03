import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/background.png')` }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-sm p-10 rounded-lg text-center max-w-4xl w-full shadow-lg">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 animate-fade-in">Welcome to Certification Tracker</h1>
        <p className="mb-8 text-lg text-gray-600">Track your certifications with ease!</p>
        <button
          onClick={() => navigate('/signup')}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-transform transform hover:scale-105 duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HomePage;

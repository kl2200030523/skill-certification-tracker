import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // Use the navigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login action
    // After login, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/background.png')` }}
    >
      <div className="p-10 bg-white bg-opacity-80 shadow-lg rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            placeholder="Password"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-transform transform hover:scale-105 duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

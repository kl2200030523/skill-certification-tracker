import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate(); // Use the navigate hook

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup action
    // After signup, redirect to login
    navigate('/login');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{  backgroundImage: `url("https://www.shutterstock.com/image-photo/elearning-technology-webinar-online-education-600nw-2324449597.jpg")` }}
    >
      <div className="p-10 bg-white bg-opacity-80 shadow-lg rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Signup</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            placeholder="Username"
          />
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
            placeholder="Password"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-transform transform hover:scale-105 duration-300">
            Signup
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

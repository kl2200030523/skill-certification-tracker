import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-gray-100">
      <div className="p-8 max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to your Dashboard</h1>
        <p className="text-lg mb-8 text-gray-700">Track your certifications here!</p>

        {/* Certification Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Total Certifications</h2>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Expiring Soon</h2>
            <p className="text-3xl font-bold text-gray-900">2</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Pending Verification</h2>
            <p className="text-3xl font-bold text-gray-900">1</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload New Certification
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            View Certifications
          </button>
        </div>

        {/* Link to Profile Page */}
        <div className="mt-8">
          <Link to="/profile" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Go to Profile Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

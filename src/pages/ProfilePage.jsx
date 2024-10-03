import React, { useState } from 'react';

function ProfilePage() {
  // Local state to manage form inputs
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to the backend)
    console.log(profileData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Update Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone Number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={profileData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;

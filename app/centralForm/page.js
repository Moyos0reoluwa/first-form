"use client";

import { useState } from 'react';

export default function CentralForm() {
  const [formData, setFormData] = useState({
    profileId: '',
    centralName: ''
  });

  const centralNames = ['Central A', 'Central B', 'Central C', 'Central D', 'Central E'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Central Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Central</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="profileId" className="block text-sm font-medium text-gray-700">Profile ID</label>
            <input
              type="text"
              id="profileId"
              name="profileId"
              value={formData.profileId}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="centralName" className="block text-sm font-medium text-gray-700">Central Name</label>
            <select
              id="centralName"
              name="centralName"
              value={formData.centralName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {centralNames.map((central) => (
                <option key={central} value={central}>
                  {central}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

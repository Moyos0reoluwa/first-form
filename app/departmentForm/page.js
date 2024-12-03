"use client";

import { useState } from 'react';

export default function DepartmentForm() {
  const [formData, setFormData] = useState({
    profileId: '',
    department: [],
    leadershipLevel: ''
  });

  const departments = ['HR', 'Marketing', 'Sales', 'Engineering', 'Finance'];
  const leadershipLevels = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDepartmentChange = (e) => {
    const { options } = e.target;
    const selectedDepartments = [];
    for (const option of options) {
      if (option.selected) {
        selectedDepartments.push(option.value);
      }
    }
    setFormData({
      ...formData,
      department: selectedDepartments
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Department Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Department</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="profileId" className="block text-sm font-medium text-gray-700">Profile ID</label>
            <input
              type="text"
              id="profileId"
              name="profileId"
              value={formData.profileId}
              onChange={handleChange}
              pattern="\d*"
              title="Numbers only"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
            <select
              id="department"
              name="department"
              multiple
              value={formData.department}
              onChange={handleDepartmentChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Leadership Level</label>
            <div className="mt-2 space-y-2">
              {leadershipLevels.map((level) => (
                <div key={level} className="flex items-center">
                  <input
                    type="radio"
                    id={level}
                    name="leadershipLevel"
                    value={level}
                    checked={formData.leadershipLevel === level}
                    onChange={handleChange}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor={level} className="ml-2 block text-sm font-medium text-gray-700">{level}</label>
                </div>
              ))}
            </div>
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

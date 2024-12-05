import React from 'react';

const Employees = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Employee Management</h2>
      <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        Add Employee
      </button>
      <div className="border rounded-lg p-4">
        <p className="text-gray-500">Employee list will be implemented here</p>
      </div>
    </div>
  );
};

export default Employees;
import React from 'react';

const Reports = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <div className="flex gap-4 mb-6">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Generate Report
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
          Export
        </button>
      </div>
      <div className="border rounded-lg p-4 min-h-[400px]">
        <p className="text-gray-500">Reports will be implemented here</p>
      </div>
    </div>
  );
};

export default Reports;
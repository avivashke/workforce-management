import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="space-y-6">
        <section className="border-b pb-4">
          <h3 className="text-lg font-medium mb-2">Shift Settings</h3>
          <p className="text-gray-500">Shift configuration options will be implemented here</p>
        </section>
        <section className="border-b pb-4">
          <h3 className="text-lg font-medium mb-2">Break Types</h3>
          <p className="text-gray-500">Break type configuration will be implemented here</p>
        </section>
        <section>
          <h3 className="text-lg font-medium mb-2">System Preferences</h3>
          <p className="text-gray-500">System preferences will be implemented here</p>
        </section>
      </div>
    </div>
  );
};

export default Settings;
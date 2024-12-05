// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'

// Import pages
import Login from './pages/Login'
import Schedule from './pages/Schedule'
import Employees from './pages/Employees'
import Settings from './pages/Settings'
import Reports from './pages/Reports'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="text-white font-bold text-xl">
                  WMS
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </Link>
                    <Link to="/schedule" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Schedule
                    </Link>
                    <Link to="/employees" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Employees
                    </Link>
                    <Link to="/reports" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Reports
                    </Link>
                    <Link to="/settings" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Settings
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/" element={
                <div className="bg-white shadow rounded-lg p-6">
                  <h1 className="text-2xl font-bold mb-4">Welcome to Workforce Management System</h1>
                  <p className="text-gray-600">
                    Manage your workforce efficiently with our comprehensive scheduling and employee management tools.
                  </p>
                </div>
              } />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
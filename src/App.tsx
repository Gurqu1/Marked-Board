import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import JobDetail from './pages/JobDetail';
import { mockJobs } from './utils/mockData';
export function App() {
  const [jobs, setJobs] = useState(mockJobs);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return <Router>
      <div className={`min-h-screen w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard jobs={jobs} darkMode={darkMode} />} />
            <Route path="/job/:id" element={<JobDetail jobs={jobs} darkMode={darkMode} />} />
          </Routes>
        </main>
      </div>
    </Router>;
}
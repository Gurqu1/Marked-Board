import React from 'react';
import JobTable from '../components/JobTable';
import HaroldChat from '../components/HaroldChat';
import { Job } from '../utils/mockData';
interface DashboardProps {
  jobs: Job[];
  darkMode: boolean;
}
const Dashboard = ({
  jobs,
  darkMode
}: DashboardProps) => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Applications Dashboard</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
          + Add New Job
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-lg font-medium mb-2">Total Applications</h3>
          <p className="text-3xl font-bold">{jobs.length}</p>
        </div>
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-lg font-medium mb-2">Interviews</h3>
          <p className="text-3xl font-bold text-blue-600">
            {jobs.filter(job => job.status === 'Interview').length}
          </p>
        </div>
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-lg font-medium mb-2">Offers</h3>
          <p className="text-3xl font-bold text-green-600">
            {jobs.filter(job => job.status === 'Offer').length}
          </p>
        </div>
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h3 className="text-lg font-medium mb-2">Application Rate</h3>
          <p className="text-3xl font-bold text-indigo-600">
            {Math.round(jobs.length / 30 * 10) / 10}{' '}
            <span className="text-sm font-normal">/ day</span>
          </p>
        </div>
      </div>
      <JobTable jobs={jobs} darkMode={darkMode} />
      <HaroldChat darkMode={darkMode} />
    </div>;
};
export default Dashboard;
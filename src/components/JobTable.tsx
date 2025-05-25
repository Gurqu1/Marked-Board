import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, SortAscIcon, SortDescIcon, EyeIcon } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { Job } from '../utils/mockData';
interface JobTableProps {
  jobs: Job[];
  darkMode: boolean;
}
const JobTable = ({
  jobs,
  darkMode
}: JobTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof Job | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const handleSort = (field: keyof Job) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.company.toLowerCase().includes(searchTerm.toLowerCase()) || job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (!sortField) return 0;
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    if (fieldA === fieldB) return 0;
    if (fieldA === null || fieldA === undefined) return 1;
    if (fieldB === null || fieldB === undefined) return -1;
    const comparison = String(fieldA).localeCompare(String(fieldB));
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  const SortIcon = ({
    field
  }: {
    field: keyof Job;
  }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <SortAscIcon size={16} /> : <SortDescIcon size={16} />;
  };
  return <div className={`w-full rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative">
            <SearchIcon size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search jobs, companies, or locations..." className={`pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} w-full md:w-80`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>
          <div className="flex space-x-2">
            <select className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer" onClick={() => handleSort('company')}>
                <div className="flex items-center space-x-1">
                  <span>Company</span>
                  <SortIcon field="company" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer" onClick={() => handleSort('title')}>
                <div className="flex items-center space-x-1">
                  <span>Job Title</span>
                  <SortIcon field="title" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer" onClick={() => handleSort('location')}>
                <div className="flex items-center space-x-1">
                  <span>Location</span>
                  <SortIcon field="location" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer" onClick={() => handleSort('salary')}>
                <div className="flex items-center space-x-1">
                  <span>Salary</span>
                  <SortIcon field="salary" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer" onClick={() => handleSort('status')}>
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  <SortIcon field="status" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {sortedJobs.map(job => <tr key={job.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      {job.logoUrl ? <img src={job.logoUrl} alt={`${job.company} logo`} className="h-10 w-10 object-cover" /> : <span className="text-xl font-bold text-gray-500">
                          {job.company.charAt(0)}
                        </span>}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">{job.company}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{job.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{job.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {job.salary || '—'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={job.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <Link to={`/job/${job.id}`} className="text-indigo-600 hover:text-indigo-900">
                    <EyeIcon size={18} className="inline" />
                    <span className="ml-1 hidden md:inline">View</span>
                  </Link>
                </td>
              </tr>)}
            {sortedJobs.length === 0 && <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No jobs found matching your criteria.
                </td>
              </tr>}
          </tbody>
        </table>
      </div>
    </div>;
};
export default JobTable;
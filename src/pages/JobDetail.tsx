import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, MapPinIcon, BriefcaseIcon, DollarSignIcon } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import ResumeScore from '../components/ResumeScore';
import HaroldChat from '../components/HaroldChat';
import { Job } from '../utils/mockData';
interface JobDetailProps {
  jobs: Job[];
  darkMode: boolean;
}
const JobDetail = ({
  jobs,
  darkMode
}: JobDetailProps) => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const job = jobs.find(j => j.id === id);
  if (!job) {
    return <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
        <p className="mb-6">We couldn't find the job you're looking for.</p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center justify-center">
          <ArrowLeftIcon size={16} className="mr-2" />
          Back to Dashboard
        </Link>
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 flex items-center">
          <ArrowLeftIcon size={16} className="mr-2" />
          Back to Dashboard
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">
          {job.title} at {job.company}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center mr-4">
                  {job.logoUrl ? <img src={job.logoUrl} alt={`${job.company} logo`} className="h-16 w-16 object-cover" /> : <span className="text-3xl font-bold text-gray-500">
                      {job.company.charAt(0)}
                    </span>}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <p className="text-xl">{job.company}</p>
                </div>
              </div>
              <StatusBadge status={job.status} />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <MapPinIcon size={18} className="text-gray-500 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <DollarSignIcon size={18} className="text-gray-500 mr-2" />
                <span>{job.salary || 'Not specified'}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon size={18} className="text-gray-500 mr-2" />
                <span>Applied: {job.dateApplied}</span>
              </div>
            </div>
          </div>
          <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p>{job.description}</p>
              <h3>Requirements:</h3>
              <ul>
                {job.requirements.map((req, index) => <li key={index}>{req}</li>)}
              </ul>
              <h3>Responsibilities:</h3>
              <ul>
                {job.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
              </ul>
            </div>
          </div>
          <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-xl font-semibold mb-4">Notes</h2>
            <textarea className={`w-full p-3 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} rows={4} placeholder="Add your notes about this job application..." defaultValue={job.notes || ''}></textarea>
            <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
              Save Notes
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <ResumeScore score={job.resumeScore} darkMode={darkMode} />
          <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-xl font-semibold mb-4">Application Timeline</h3>
            <div className="space-y-4">
              {job.timeline.map((event, index) => <div key={index} className="relative pl-6 pb-4">
                  {index !== job.timeline.length - 1 && <div className="absolute top-2 left-2 -bottom-2 w-0.5 bg-gray-300 dark:bg-gray-600"></div>}
                  <div className="absolute top-2 left-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {event.date}
                  </div>
                  <div className="font-medium">{event.title}</div>
                  <div className="text-sm">{event.description}</div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      <HaroldChat darkMode={darkMode} />
    </div>;
};
export default JobDetail;
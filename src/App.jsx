import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data)
      })
  });

  return (
    <>
    <h1>Tracking Jobs</h1>
    {jobs.map(job => {
      return(
      <div key={job.id}>
      <h3>{job.company_name}</h3>
      <p>{job.job_title}</p>
      <p>{job.job_description}</p>
      <p>{job.job_location}</p>
      <p>{job.job_salary}</p>
      </div>
      )
    })}
    </>
  )
}

export default App

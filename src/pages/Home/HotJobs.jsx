import React, { useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);


  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('http://localhost:3000/jobs'); // your API or mock data
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

    return (
        <div>
            <h1 className='text-4xl text-center mt-5 mb-5'>Hot Jobs in the Day</h1>
           <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> 
            {
           
           jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
           
           }
           </div>
        </div>
    );
};

export default HotJobs;
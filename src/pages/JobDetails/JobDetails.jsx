import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {

    const {
    _id,
    title,
    salaryRange,
    location,
    jobType,
    category,
    description,
    company_logo,
    company,
    requirements,
  } = useLoaderData()

    return (
        <div>
           <h1 className='text-3xl'>{title}</h1>
           <h3 className='text-xl'>{company}</h3>
           <Link to={`/jobApply/${_id}`}>
           <button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;
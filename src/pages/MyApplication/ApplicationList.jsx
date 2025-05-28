import React, { use } from 'react';
import MyApplicationRow from './MyApplicationRow';

const ApplicationList = ({myApplicationsPromise}) => {

    const applications = use(myApplicationsPromise)

    return (
        <div>
            <h2 className='text-3xl'>Job applied so far: {applications.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        applications.map((application,index)=><MyApplicationRow
        key={application._id}
        index={index}
        application={application}
        ></MyApplicationRow>)
      }
      
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default ApplicationList;
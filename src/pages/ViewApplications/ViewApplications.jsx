import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, appId) => {
    console.log(e.target.value, appId);

    axios.patch(`http://localhost:3000/applications/${appId}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application Status Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Application Id : {job_id} </h2>
      <h2 className="text-3xl">Application For : {applications.length} </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((app, index) => (
              <tr key={app._id} app={app}>
                <th>{index + 1}</th>
                <td>{app.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={e => handleStatusChange(e, app._id)}
                    defaultValue={app.status}
                    className="select"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;

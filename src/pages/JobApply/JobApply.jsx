import React from "react";
import { Link, useParams } from "react-router";
import uesAuth from "../../Hooks/uesAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = uesAuth();
  console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    console.log(linkedIn, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    // axios send in the database

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 className="text-3xl text-center">
        Apply for this Job :{" "}
        <Link to={`/jobs/${jobId}`}>
          <button className="btn btn-primary">Details</button>
        </Link>
      </h2>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">LinkedIn Link</label>
          <input
            name="linkedIn"
            type="url"
            className="input"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">Github Link</label>
          <input
            name="github"
            type="url"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            name="resume"
            type="url"
            className="input"
            placeholder="Resume Link"
          />
          <input type="submit" className="btn mt-2" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;

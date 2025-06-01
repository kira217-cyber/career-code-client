import React, { Suspense } from "react";
import uesAuth from "../../Hooks/uesAuth";
import MyJobsPostedList from "./MyJobsPostedList";
import useCustomApi from "../../Api/useCustomApi";


const MyPostedJobs = () => {
  const {jobsCreatedByPromise} = useCustomApi()
  const { user } = uesAuth();

  return (
    <div>
      <h2>My Posted List</h2>

      <Suspense fallback={"Jobs Data Loading..."}>
        <MyJobsPostedList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></MyJobsPostedList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;

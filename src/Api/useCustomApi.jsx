import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useCustomApi = () => {
  const axiosSecure = useAxiosSecure();

  const myApplicationsPromise = (email) => {
    return axiosSecure
      .get(`/applications?email=${email}`)
      .then((res) => res.data);
  };
  const jobsCreatedByPromise = (email) => {
    return axiosSecure
      .get(`/jobs/applications?email=${email}`)
      .then((res) => res.data);
  };

  return {
    myApplicationsPromise,
    jobsCreatedByPromise,
  };
};

export default useCustomApi;

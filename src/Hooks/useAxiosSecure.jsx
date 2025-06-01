import axios from "axios";
import React from "react";
import uesAuth from "./uesAuth";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-tau-gray.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logOut } = uesAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      if (error.status === 401 || error.status === 403) {
        logOut()
          .then(() => {
            console.log("sign out user for 401 status code");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;

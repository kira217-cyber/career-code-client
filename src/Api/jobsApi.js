export const jobsCreatedByPromise = (email, accessToken) =>
  fetch(
    `https://job-portal-server-tau-gray.vercel.app/jobs/applications?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());

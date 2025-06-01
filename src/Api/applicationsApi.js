export const myApplicationsPromise = (email, accessToken) =>
  fetch(
    `https://job-portal-server-tau-gray.vercel.app/applications?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());

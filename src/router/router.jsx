import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRouter from "../routes/PrivetRouter";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplication/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";


export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'register',
                Component:Register,
            },
            {
                path:'login',
                Component:Login,
            },
            {
                path:'/jobs/:id',
                loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`),
                Component:JobDetails,
            },
            {
                path:'/jobApply/:id',
                element:<PrivetRouter>
                    <JobApply></JobApply>
                </PrivetRouter>
            },
            {
                path:'myApplications',
                element:<PrivetRouter>
                    <MyApplications></MyApplications>
                </PrivetRouter>
            },
            {
                path:'addJob',
                element:<PrivetRouter>
                    <AddJob></AddJob>
                </PrivetRouter>
            },
            {
                path:'myPostedJobs',
                element:<PrivetRouter>
                    <MyPostedJobs></MyPostedJobs>
                </PrivetRouter>
            },
             {
                path:'applications/:job_id',
                element:<PrivetRouter>
                    <ViewApplications></ViewApplications>
                </PrivetRouter>,
                loader:({params})=>fetch(`http://localhost:3000/applications/job/${params.job_id}`)
            }
        ]
    }
])
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRouter from "../routes/PrivetRouter";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplication/MyApplications";


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
            }
        ]
    }
])
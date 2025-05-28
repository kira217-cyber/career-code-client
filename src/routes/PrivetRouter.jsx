import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {

    const location = useLocation()
    const {user,loading} = use(AuthContext);

    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }

    return children
};

export default PrivetRouter;
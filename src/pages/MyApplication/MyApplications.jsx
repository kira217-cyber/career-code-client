import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import uesAuth from '../../Hooks/uesAuth';
import useCustomApi from '../../Api/useCustomApi';

const MyApplications = () => {

    const{myApplicationsPromise} = useCustomApi();

    const {user} = uesAuth()

    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={'Loading Your Applications....'}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;
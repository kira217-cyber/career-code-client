import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import { myApplicationsPromise } from '../../Api/applicationsApi';
import uesAuth from '../../Hooks/uesAuth';

const MyApplications = () => {

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
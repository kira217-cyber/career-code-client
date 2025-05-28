import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const uesAuth = () => {
    const authInfo  = use(AuthContext)
    return authInfo
};

export default uesAuth;
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loadding/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    const [sendEmailVerfication, sending, error] = useSendEmailVerification(auth)

    if(loading){
        return <Loading></Loading>
    }

    //
    console.log(user)
    if(!user){
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if(user?.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div>
            <h3 className='text-danger'> Your Email is not verified!</h3>
            <h5 className='text-success'>Please Verify your email address</h5>
            <button className='btn btn-primary' onClick={async () =>{
                await sendEmailVerfication()
                alert('send email')
            }}>Send Verification Email Again</button>
        </div>
    }
    return children
};

export default RequireAuth;
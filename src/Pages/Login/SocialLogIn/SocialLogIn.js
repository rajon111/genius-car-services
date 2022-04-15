import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/social/download.png'

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate()

    let errorElement;
    if (error || error1) {
        errorElement= (
          
            <p className='text-center'>Error: {error?.message} {error1?.message}</p>
       
        );
    }

    if(user || user1){
        navigate('/home')
    }

    
    return (
        <div >
            <div className='d-flex align-items-center'>
                <div style={{height: '1px '}} className='bg-primary w-50 '></div>
                <p className='mt-2 px-2'>or</p>
                <div  style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>

            {/* error  */}
            {errorElement}

            <button onClick={()=>signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                {/* <img style={{width:'30px'}} src={google} alt="" /> */}
                <span className='px-2'>Google Sign In</span>
            </button>
            <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                {/* <img style={{width:'30px'}} src={google} alt="" /> */}
                <span className='px-2'>Facebook sign in</span>
            </button>
            <button onClick={()=>signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                {/* <img style={{width:'30px'}} src={google} alt="" /> */}
                <span className='px-2'>Github sign in</span>
            </button>
        </div>
    );
};

export default SocialLogIn;
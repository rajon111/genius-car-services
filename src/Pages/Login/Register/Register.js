import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

const Register = () => {
    const [agree, setAgree] = useState(false)

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});  

    //updating name   
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if(user){
        // navigate('/home')
        console.log(user);
      }

    const handleRegister =async (event) =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

      
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name});
        console.log('Updated profile');
        navigate('/home')   
    }

      
    return (
        <div className='register-form '>
            <h2 className='rege-title'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your name' />
                
                <input type="email" name="email" id="" placeholder='your email'required/>

                <input type="password" name="password" id="" placeholder='your password' required/>

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                <label className={agree ? 'ps-2 text-primary': 'ps-2 text-danger'} htmlFor="terms">Accept Genius car Terms and Conditions</label>
                <input 
                disabled = {!agree} 
                className='w-50 mx-auto btn btn-primary mt-2' 
                type="submit" 
                value="Register" /> 

                

            </form>
            <p >Already have an account ? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={()=>navigate('/login')}>Login!</Link></p>
            <SocialLogIn></SocialLogIn>
        </div>
    );
};

export default Register;
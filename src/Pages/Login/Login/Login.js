import React ,{useRef} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loadding/Loading';
import SocialLogIn from '../SocialLogIn/SocialLogIn';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let errorElement;

    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(loading || sending){
          return <Loading></Loading>
      }

      if(user){
          navigate(from, {replace : true})
      }

      if (error) {
        errorElement= (
            <p className='text-center'>Error: {error?.message}</p>
        );
    }

    const handleSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {  
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address')
        }
    }
    
    return (
        <div className='container mx-auto w-50'>
            <h2 className='text-primary text-center mt-2'>login page</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>

            {errorElement}

            <p>New to Genius Car ? <Link className='text-danger pe-auto text-decoration-none' to='/register' onClick={()=>navigate('/register')}>Please Register Now!</Link></p>

            <p>Forget password ? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Now!</button></p>

            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default Login;
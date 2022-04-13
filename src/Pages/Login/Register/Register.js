import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const handleRegister = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }
    return (
        <div className='register-form '>
            <h2 className='rege-title'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=""  placeholder='Your name' required/>
                
                <input type="email" name="email" id="" placeholder='your email'required/>
                <input type="password" name="password" id="" placeholder='your password' required/>
                <br/>
                <input type="submit" value="submit" />

            </form>
            <p className='text-center'>Already have an account ? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={()=>navigate('/login')}>Login!</Link></p>
        </div>
    );
};

export default Register;
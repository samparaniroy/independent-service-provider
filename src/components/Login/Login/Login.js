import React, { useRef } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate =useNavigate()

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

const navigateRegister = event =>{
    navigate('/register')
}

    return (
        <div className='login-form'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <form onSubmit={ handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder='email'/>
                <input ref={passwordRef} type="password" name="password" id="" placeholder='password'/>
                <input type="submit" value="submit" />
            </form>
            <p>If You Haven't Account Yet? <Link to='/register' className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;
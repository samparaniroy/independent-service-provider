import React, { useRef } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate =useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
        navigate('/');
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event =>{
        navigate('/register')
    }

        return (
            <div className='login-form-area'>
                <h2>Please Login</h2>
                <form onSubmit={ handleSubmit}>
                    <input ref={emailRef} type="email" name="email" id="" placeholder='email'/>
                    <br />
                    <input ref={passwordRef} type="password" name="password" id="" placeholder='password'/>
                    <br />
                    <input className='submit-button' type="submit" value="submit" />
                </form>
                <p>If You Haven't Account Yet? <Link to='/register' className='text-danger' onClick={navigateRegister}>Please Register</Link></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        );
    };

export default Login;
import React, { useRef } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate =useNavigate();
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail( auth);
      
      if(user){
        navigate('/');
    }
    if (error) {
        errorElement=<p className='text-danger'>Error: {error.message}</p>
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
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email')
        }
        else{
            toast('please enter your email address')
        }
    }

        return (
            <div className='login-form-area'>
                <h2>Please Login</h2>
                <form onSubmit={ handleSubmit}>
                    <input ref={emailRef} type="email" name="email" id="" placeholder='email' required/>
                    <br />
                    <input ref={passwordRef} type="password" name="password" id="" placeholder='password' required/>
                    <br />
                    <input className='submit-button' type="submit" value="submit" />
                </form>
                {errorElement}
                <p>If You Haven't Account Yet? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
                <p>Forget Password? <button to ='/register' className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        );
    };

export default Login;
import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
   const navigate = useNavigate();

   const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

   const navigateLogin = () =>{
       navigate('/login')
   }

   if(user){
       navigate('/')
   }

   const handleRegister = event =>{
       event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
       const password =event.target.password.value;
       createUserWithEmailAndPassword(email, password)
   }

    return (
        <div className='register-form-area'>
            <h2>Plase Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='name'/>
                <br />
                <input type="email" name="email" id="" placeholder='email'/>
                <br />
                <input type="password" name="password" id="" placeholder='password'/>
                <br />
                <input className='submit-button' type="submit" value="Register" />
            </form>
            <p>Already have an Account? <Link to='/login' className='text-danger' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
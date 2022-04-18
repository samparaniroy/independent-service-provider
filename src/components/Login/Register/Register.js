import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate('/login')
    }
    if(user){
        console.log('user', user)
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
          navigate('/')
    }
    return (
        <div className='register-form-area'>
            <h2>Plase Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name'/>
                <br />
                <input type="email" name="email" id="" placeholder='email'/>
                <br />
                <input type="password" name="password" id="" placeholder='password'/>
                <br />
                <input className='submit-button' type="submit" value="submit" />
            </form>
            <p>Already have an Account? <Link to='/login' className='text-danger' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
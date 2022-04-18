import React from 'react';
import './SocialLogin.css'
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElemnt;
    if (error) {
        errorElemnt=<div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
      }
      if(user){
          navigate('/')
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElemnt}
            <div>
                <button onClick={() => signInWithGoogle()} className='sign-button'> <img src="images/google.png" alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;
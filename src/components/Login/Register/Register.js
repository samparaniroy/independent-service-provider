import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event =>{
        navigate('/login')
    }
    const handleSubmit = event=>{
        event.preventDefault();
        console.log(event.target.email.value)
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Plase Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name'/>
                <input type="email" name="email" id="" placeholder='email'/>
                <input type="password" name="password" id="" placeholder='password'/>
                <input type="submit" value="submit" />
            </form>
            <p>Already have an Account? <Link to='/login' className='text-danger' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;
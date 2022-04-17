import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-content'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Navbar;
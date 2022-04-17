import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="navbar-content">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/notfound'>Notfound</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
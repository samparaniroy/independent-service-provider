import { signOut } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () =>{
        signOut(auth);
    }
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
                                {
                                    user?
                                        <button onClick={handleSignOut}>sign out</button>
                                    :
                                        <li><Link to='/login'>Login</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
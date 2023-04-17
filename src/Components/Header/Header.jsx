import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(result => {
            
            })
            .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/">Shope</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singUp">SingUp</Link>
                {
                    user && <span className='text-white ml-5'>Welcome <span className='bg-primary p-1 rounded-lg'>{user.email}</span> <button onClick={handleLogOut} className='btn btn-primary text-white'>Sing Out</button></span>
                }
            </nav>
        </div>
    );
};

export default Header;
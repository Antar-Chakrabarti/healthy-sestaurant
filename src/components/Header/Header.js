import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import React from 'react';
import logo2 from '../../images/logo2.png';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-compo'>
            <div className="left-nav">
                <img style={{ width: '120px' }} src={logo2} alt="" />
            </div>
            <div className='right-nav'>
                <FontAwesomeIcon icon={faCartPlus} />
                <Link to="/login">Login</Link>
                <Link className='signUp' to="/signpu">Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;
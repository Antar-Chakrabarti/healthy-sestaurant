import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import React from 'react';
import logo2 from '../../images/logo2.png';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const backToHome =()=>{
        navigate('/home');
    }
    return (
        <div className='header-compo'>
            <div onClick={backToHome} className="left-nav">
                <img style={{ width: '120px', cursor: 'pointer' }} src={logo2} alt="" />
            </div>
            <div className='right-nav'>
                <FontAwesomeIcon icon={faCartPlus} />
                <Link to="/login">Login</Link>
                <Link to="/posts">Posts</Link>
                <Link className='signUp' to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import './Singup.css';

const Singup = () => {
    return (
        <div className='login-container'>
            <div className="login-title">Login</div>
            <form className="login-form">
                <input type="text" placeholder='Your Email'/>
                <input type="password" name="password" placeholder='Your Password' id=""/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Singup;
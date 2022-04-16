import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmailChange = (e)=>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if (validEmail) {
            setEmail(e.target.value)
        }else{
            setError('Invalid Email')
        }

    }
    const handlePasswordChange = (e)=>{
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if(validPassword){
            setPassword(e.target.value)
        }else{
            setError('Password should contain six character')
        }
    }
    const handleLogin = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='login-container'>
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange}/>
                <input type="password" name="password" placeholder='Your Password' id="" onChange={handlePasswordChange} />
                <button>Login</button>
                {error && <p className='error-message'>{error}</p>}
                {error1 && <p className='error-message'>{error1}</p>}
            </form>
        </div>
    );
};

export default Login;
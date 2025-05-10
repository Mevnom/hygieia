import React, { useState } from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import DefaultHeader from '../Hdtrois';

const Login = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedEmail = localStorage.getItem('email');
        const storedName = localStorage.getItem('fullName');
        const storedPassword = localStorage.getItem('password');

        const isValidUser = 
            (userID === storedEmail || userID === storedName) && 
            password === storedPassword;

        if (isValidUser) {
            alert("Login successful!");
            navigate('/'); // redirect to home
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div><DefaultHeader/>
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Log In</h2>

                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input type="text" placeholder="User ID or Email" value={userID} onChange={(e) => setUserID(e.target.value)} required />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
};

export default Login;

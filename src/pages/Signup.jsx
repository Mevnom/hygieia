import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import DefaultHeader from '../Hdtrois';

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Save to localStorage (fake auth)
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert("Signup successful!");
        navigate('/'); // redirect to home
    };

    return (
        <div>
           <span><DefaultHeader /></span> 
            <br />
            <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Create Account</h2>

                <div className="input-group">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="input-group">
                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>

                <button type="submit">Sign Up</button>

                <div className="signup-options">
                    <div><Link to={"/"}>Forgot Password?</Link></div>
                    <span>
                        Already have an account? <Link to={"/Login"}>Login</Link>
                    </span>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Signup;

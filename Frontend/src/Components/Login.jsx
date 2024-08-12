import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Styles/Login.css';

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [signupData, setSignupData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSignupChange = (event) => {
        const { name, value } = event.target;
        setSignupData({
            ...signupData,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/nsp/api/student/login", loginData);
            if (response.data) {
                navigate("/dashboard");
            } else {
                alert("Email or password is Invalid!");
            }
        } catch (err) {
            console.error('Error sending login data:', err);
            alert("Login Failed!");
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (signupData.password !== signupData.cpassword) {
            alert("Passwords should be same!");
            return;
        }
        try {
            await axios.post("http://localhost:8080/nsp/api/student/save", signupData);
            alert("Registration Successful!");
        } catch (err) {
            console.error('Error sending registration data:', err);
            alert("Registration Failed!");
        }
    };

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form onSubmit={handleSignup}>
                    <label className="signup-label" htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input className="login-input" type="text" name="fname" placeholder="First Name" value={signupData.fname} onChange={handleSignupChange} required />
                    <input className="login-input" type="text" name="lname" placeholder="Last Name" value={signupData.lname} onChange={handleSignupChange} required />
                    <input className="login-input" type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
                    <input className="login-input" type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
                    <input className="login-input" type="password" name="cpassword" placeholder="Confirm Password" value={signupData.cpassword} onChange={handleSignupChange} required />
                    <button className="login-button" type="submit">Sign up</button>
                </form>
            </div>

            <div className="login">
                <form onSubmit={handleLogin}>
                    <label className="login-label" htmlFor="chk" aria-hidden="true">Login</label>
                    <input className="login-input" type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
                    <input className="login-input" type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Styles/LoginInstituteGovt.css';

function InstituteLogin() {
    const navigate = useNavigate();

    const [loginIGData, setLoginIGData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginIGData({
            ...loginIGData,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/nsp/api/institute/login', loginIGData);
            console.log(response.data); // Should be true or false
            if (response.data) {
                // Redirect or handle successful login
                navigate('/instituteDashboard');
            } else {
                alert("Login Failed! Invalid email or password.");
            }
        } catch (error) {
            console.error('Error sending login data:', error);
            alert("Login Failed!");
        }
    };


    return (
        <div className="loginig">
            <form onSubmit={handleLogin}>
                <label className="ins-lable" htmlFor="chk" aria-hidden="true">Login</label>
                <input className="ins-input" type="email" name="email" placeholder="Email" value={loginIGData.email} onChange={handleChange} required />
                <input className="ins-input" type="password" name="password" placeholder="Password" value={loginIGData.password} onChange={handleChange} required />
                <button className="ins-btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default InstituteLogin;

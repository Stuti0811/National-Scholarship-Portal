import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Styles/LoginInstituteGovt.css';

function GovtLogin() {
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
            const response = await axios.post("http://localhost:8080/nsp/api/government/login", loginIGData);
            if (response.data) {
                navigate("/govtDashboard");
            } else {
                alert("Login Details Not Found!");
            }
        } catch (err) {
            console.error('Error sending login data:', err);
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

export default GovtLogin;

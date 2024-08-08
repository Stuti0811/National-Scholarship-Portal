import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Styles/LoginInstituteGovt.css';

function LoginInstituteGovt() {
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
            const response = await axios.post("http://localhost:8080/nsp/api/institute/login", loginIGData);
            if (response.data) {
                navigate("/instituteDashboard");
            } else {
                alert("Login Failed!");
            }
        } catch (err) {
            console.error('Error sending login data:', err);
            alert("Login Failed!");
        }
    };

    return (
        <div className="loginig">
            <form onSubmit={handleLogin}>
                <label htmlFor="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" value={loginIGData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={loginIGData.password} onChange={handleChange} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginInstituteGovt;

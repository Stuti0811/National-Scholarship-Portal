import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router DOM
import '../Styles/Login.css';

function Login() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
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
           const response= await axios.post('http://localhost:8080/nsp/api/student/login', loginData);
           if (response.data) {
            
            setMessage('Login successful');
            navigate('/home'); // Navigate to home on successful login
        } else {
            setMessage('Invalid credentials');
            alert("Password is incorrect!");
        }
        }
         catch (err) {
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
        else {
            try {
                await axios.post('http://localhost:8080/nsp/api/student/save', signupData);
                alert("Registeration Successfull!")
            } catch (err) {
                console.error('Error sending registeration data:', err);
                alert("Registeration Failed!");
            }
            console.log(signupData);
        }
    };

    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form onSubmit={handleSignup}>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="fName" placeholder="First Name" value={signupData.fName} onChange={handleSignupChange} required />
                    <input type="text" name="lName" placeholder="Last Name" value={signupData.lName} onChange={handleSignupChange} required />
                    <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
                    <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} required />
                    <input type="password" name="cpassword" placeholder="Confirm Password" value={signupData.cpassword} onChange={handleSignupChange} required />
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div className="login">
                <form onSubmit={handleLogin}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
                    <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

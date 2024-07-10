import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router DOM
import '../Styles/Login.css';

function Login() {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [signupData, setSignupData] = useState({
        fname: '',
        lname: '',
        email: '',
        pass1: '',
        pass2: ''
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

        navigate("/home");
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (signupData.pass1 !== signupData.pass2) {
            alert("Passwords should be same!");
            return;
        }
        else {
            try {
                await axios.post('url', signupData);
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
                    <input type="text" name="fname" placeholder="First Name" value={signupData.fname} onChange={handleSignupChange} required />
                    <input type="text" name="lname" placeholder="Last Name" value={signupData.lname} onChange={handleSignupChange} required />
                    <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} required />
                    <input type="password" name="pass1" placeholder="Password" value={signupData.pass1} onChange={handleSignupChange} required />
                    <input type="password" name="pass2" placeholder="Confirm Password" value={signupData.pass2} onChange={handleSignupChange} required />
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div className="login">
                <form onSubmit={handleLogin}>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
                    <input type="password" name="pass" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

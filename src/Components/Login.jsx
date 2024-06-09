import React from "react";
import '../Styles/Login.css';

function Login() {
    return (
        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form action="/" method="post">
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="fname" placeholder="First Name" required />
                    <input type="text" name="lname" placeholder="Last Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pass1" placeholder="Password" required />
                    <input type="password" name="pass2" placeholder="Confirm Password" required />
                    <button type="submit">Sign up</button>
                </form>
            </div>

            <div className="login">
                <form action="/" method="post">
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="pass" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

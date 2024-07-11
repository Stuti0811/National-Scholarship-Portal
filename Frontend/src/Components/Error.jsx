import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Error.css';

const Error = () => {
    return (
        <div class="error">
            <div className="not-found">
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link to="/home" className="home-link">Go to Home</Link>
            </div>
        </div>
    );
};

export default Error;

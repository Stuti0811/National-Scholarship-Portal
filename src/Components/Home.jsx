import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleAbout = (e) => {
        e.preventDefault();
        navigate('/about');
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={handleAbout}>About Us</button>
        </div>
    );
}

export default Home;

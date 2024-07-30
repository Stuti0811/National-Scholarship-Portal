import React from 'react';
import '../Styles/AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-us-banner">
                    <h1>About Us</h1>
                </div>
                <section className="section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create innovative solutions that enable our customers to achieve their goals. We strive to build a company that supports its employees and positively impacts the community.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
                <section className="section">
                    <h2>Our Values</h2>
                    <p>
                        Integrity, Innovation, and Customer Focus are the core values that drive our business. We are committed to upholding these values in everything we do.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;

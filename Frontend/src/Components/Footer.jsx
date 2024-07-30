import React from 'react';
import '../Styles/Footer.css';
import digitalIndia from '../assets/digitalIndia.png';
import g20 from '../assets/g20.png';
import azadi from '../assets/azadi.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-columns">
                    <div className="footer-column contact-details">
                        <h3>Contact Us</h3>
                        <p>1234 Main Street</p>
                        <p>Anytown, USA 12345</p>
                        <p>Email: info@nsportal.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>xyz</p>
                        <p>xyz</p>
                    </div>
                    <div className="footer-column footer-media">
                        <div className="footer-images">
                            <a href="https://www.digitalindia.gov.in" target="_blank" rel="noopener noreferrer">
                                <img src={digitalIndia} alt="Logo 1" />
                            </a>
                            <a href="https://moes.gov.in/" target="_blank" rel="noopener noreferrer">
                                <img src={g20} alt="Logo 2" />
                            </a>
                            <a href="https://www.education.gov.in/azadi/" target="_blank" rel="noopener noreferrer">
                                <img src={azadi} alt="Logo 3" />
                            </a>

                        </div>

                    </div>
                </div>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/contact-us">Contact Us</a>
                </div>
                <p>&copy; {new Date().getFullYear()} National Scholarship Portal. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

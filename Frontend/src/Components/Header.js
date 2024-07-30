import React, { useState } from 'react';
import '../Styles/Header.css';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import { Link } from 'react-scroll';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="title">
        National Scholarship Portal
      </div>
      <nav className="nav">
        <li><Link to="/home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="/about" smooth={true} duration={500}>About Us</Link></li>

        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="" className="dropbtn">
            Login <span className="arrow">&#9660;</span>
          </a>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="/login">Student Login</a>
              <a href="/loginInstituteGovt">Institute Login</a>
              <a href="/loginInstituteGovt">Government Login</a>
            </div>
          )}
        </div>
      </nav>
      <div className="extra-logos">
        <img src={logo2} alt="Extra Logo 1" className="extra-logo" />
        <img src={logo3} alt="Extra Logo 2" className="extra-logo" />
      </div>
    </header>
  );
};

export default Header;
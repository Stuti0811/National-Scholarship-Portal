import React, { useState } from 'react';
import '../Styles/Header.css';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

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
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <div
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <a href="#login" className="dropbtn">
            Login <span className="arrow">&#9660;</span>
          </a>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#student-login">Student Login</a>
              <a href="#institute-login">Institute Login</a>
              <a href="#government-login">Government Login</a>
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
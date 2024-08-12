import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/GovtDashboard.css';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';

function GovtDashboard() {


    return (
        <div className="containerr">
            <header className="headerr">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="titlee">National Scholarship Portal</div>
            </header>
            <div className="main-container">
                <div className="sidebarr">
                    <div className="profile">
                        <img src={logo1} alt="Profile" />
                        <h3>Government Dashboard</h3>
                    </div>
                    <div className="nav-container">
                        <nav>
                            <ul>
                                <li><Link to="/govtDashboard">View Forms</Link></li>
                                <li><Link to="/home">Logout</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="government-dashboard">
                    <div className="profile-section">
                        {/* <img src={logo} alt="Profile" className="profile-pic" /> */}
                        <h2>Welcome to Government Dashboard</h2>
                    </div>
                    <div className="scholarship-forms">
                        <h3>Scholarship Forms</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td><Link to="/govtntseList">Ntse Scholarship List</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/govtcasteList">Caste Scholarship List</Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="/femaleList">Female Scholarship List</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GovtDashboard;
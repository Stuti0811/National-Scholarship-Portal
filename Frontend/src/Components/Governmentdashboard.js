import React from 'react';
import './Governmentdashboard.css';
import logo from './Assets/logo.png';
import logo1 from './Assets/logo1.png';

function Governmentdashboard() {
  const scholarshipForms = [
    { name: 'Student Name 1', email: 'student1@example.com' },
    { name: 'Student Name 2', email: 'student2@example.com' },
    { name: 'Student Name 3', email: 'student3@example.com' },
    { name: 'Student Name 4', email: 'student4@example.com' },
    { name: 'Student Name 5', email: 'student5@example.com' },
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo1} alt="Logo" />
        </div>
        <div className="title">National Scholarship Portal</div>
      </header>
      <div className="main-container">
        <div className="sidebar">
          <div className="profile">
            <img src={logo} alt="Profile" />
            <h3>Government Dashboard</h3>
          </div>
          <div className="nav-container">
            <nav>
              <ul>
                <li>View Forms</li>
                <li>Logout</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="government-dashboard">
          <div className="profile-section">
            <img src={logo} alt="Profile" className="profile-pic" />
            <h2>Welcome to Government Dashboard</h2>
          </div>
          <div className="scholarship-forms">
            <h3>Scholarship Forms</h3>
            <table>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipForms.map((form, index) => (
                  <tr key={index}>
                    <td>{form.name}</td>
                    <td>{form.email}</td>
                    <td><button>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Governmentdashboard;

import React from 'react';
import './institutedashboardd.css';
import logo from './Assets/logo.png';
import logo1 from './Assets/logo1.png';

function InstituteDashboard() {
  const scholarshipForms = [
    { NAME: 'Student Name', EMAIL: 'Student Email', ACTION: 'Delete' },
    { NAME: 'Student Name', EMAIL: 'Student Email', ACTION: 'Delete' },
    { NAME: 'Student Name', EMAIL: 'Student Email', ACTION: 'Delete' },
    { NAME: 'Student Name', EMAIL: 'Student Email', ACTION: 'Delete' },
    { NAME: 'Student Name', EMAIL: 'Student Email', ACTION: 'Delete' },
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
            <h3>Institute Dashboard</h3>
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
        <div className="dashboard">
          <div className="profile-section">
            <img src={logo} alt="Profile" className="profile-pic" />
            <h2>Welcome to Institute Dashboard</h2>
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
                    <td>{form.NAME}</td>
                    <td>{form.EMAIL}</td>
                    <td><button className="delete-btn">{form.ACTION}</button></td>
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

export default InstituteDashboard;

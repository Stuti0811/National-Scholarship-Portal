import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';
import '../Styles/NtseStudentList.css';

function GovtNtseStudentList() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:8080/nsp/api/studentslist/getall')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const onBack = () => {
        navigate("/govtDashboard");
    }

    const handleApprove = (studentEmail, file) => {
        const formData = new FormData();
        formData.append("email", studentEmail);
        formData.append("file", selectedFile);

        axios.post('http://localhost:8080/nsp/api/email/send', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                alert('Email sent successfully');
            })
            .catch(error => {
                alert('Failed to send email');
                console.error('There was an error sending the email!', error);
            });
    };





    return (
        <div className="student-list-wrapper">
            <header className="headerr">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="titlee">National Scholarship Portal</div>
            </header>
            <div className="main-container">
                <div className="sidebarr1">
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
                    <table className="student-table">
                        <thead>
                            <tr className="table-header">
                                <th className="header-cell">Name</th>
                                <th className="header-cell">Email</th>
                                <th className="header-cell">Accept</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.email} className="table-row">
                                    <td className="name-cell">{student.fullName}</td>
                                    <td className="email-cell">{student.email}</td>
                                    <td className="actions-cell">
                                        <button className="delete-button" onClick={() => handleApprove(student.email)}>Approve</button>
                                    </td>
                                    <td className="file-cell">
                                        <input type="file" onChange={handleFileChange} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={onBack}>Back</button>
                </div>
            </div>

        </div>
    );
}

export default GovtNtseStudentList;
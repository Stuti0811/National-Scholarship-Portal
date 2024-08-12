import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';
import '../Styles/NtseStudentList.css'; // Import the CSS file

function NtseStudentList() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate(); // For navigation

    useEffect(() => {
        axios.get('http://localhost:8080/nsp/api/studentslist/getall')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = (email) => {
        axios.delete(`http://localhost:8080/nsp/api/studentslist/delete/${email}`)
            .then(() => {
                setStudents(students.filter(student => student.email !== email));
            })
            .catch(error => {
                console.error('Error deleting student:', error);
            });
    };

    const handleNameClick = (email) => {
        navigate(`/ntsestudent/${email}`);
    };

    const onBack = () => {
        navigate("/instituteDashboard");
    }

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
                                <li><Link to="/instituteDashboard">View Forms</Link></li>
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
                                <th className="header-cell">Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.email} className="table-row">
                                    <td className="name-cell">
                                        <button className="view-button" onClick={() => handleNameClick(student.email)}>
                                            {student.fullName}
                                        </button>
                                    </td>
                                    <td className="email-cell">{student.email}</td>
                                    <td className="actions-cell">
                                        <button className="delete-button" onClick={() => handleDelete(student.email)}>Delete</button>
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

export default NtseStudentList;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

    return (
        <div className="student-list-wrapper">
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
        </div>
    );
}

export default NtseStudentList;

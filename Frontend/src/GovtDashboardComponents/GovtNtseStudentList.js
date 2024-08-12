import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/NtseStudentList.css';

function GovtNtseStudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/nsp/api/studentslist/getall')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div className="student-list-wrapper">
            <table className="student-table">
                <thead>
                    <tr className="table-header">
                        <th className="header-cell">Name</th>
                        <th className="header-cell">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.email} className="table-row">
                            <td className="name-cell">{student.fullName}</td>
                            <td className="email-cell">{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GovtNtseStudentList;

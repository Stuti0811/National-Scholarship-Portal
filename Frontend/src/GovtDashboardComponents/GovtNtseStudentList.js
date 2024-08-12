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
        <div className="student-list-container">
            <table className="student-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.email}>
                            <td>{student.fullName}</td>
                            <td>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GovtNtseStudentList;

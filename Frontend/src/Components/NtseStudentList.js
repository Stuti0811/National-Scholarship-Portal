import React from 'react';
import "../Styles/NtseStudentList.css";

// Sample data for students
const students = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
];

function NtseStudentList() {
    return (
        <div>
            <h1>NTSE Student List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NtseStudentList;

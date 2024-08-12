import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/NtseStudentDetails.css'; // Import the CSS file

function CasteStudentDetails() {
    const navigate = useNavigate(); // For navigation
    const { email } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/nsp/api/castestudentslist/get/${email}`)
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, [email]);

    if (!student) return <p>Not Found...</p>;

    const onBack = () => {
        navigate("/casteList")
    }

    return (
        <div className="student-detail-container">
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {student.firstName} {student.middleName} {student.lastName}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Date of Birth:</strong> {student.dob}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>City:</strong> {student.city}</p>
            <p><strong>State:</strong> {student.state}</p>
            <p><strong>Pincode:</strong> {student.pincode}</p>
            <p><strong>Permanent Address:</strong> {student.permanentAddress}</p>
            <p><strong>Current Address:</strong> {student.currentAddress}</p>
            <p><strong>Nationality:</strong> {student.nationality}</p>
            <p><strong>Special Child:</strong> {student.specialChild}</p>
            <p><strong>AadharCard:</strong> {student.encryptedAadharCard}</p>
            <p><strong>PanCard:</strong> {student.encryptedPanCard}</p>
            <p><strong>Domicile:</strong> {student.encryptedDomicile}</p>
            <p><strong>CasteCertificate:</strong> {student.encryptedCasteCertificate}</p>
            <p><strong>CharacterCertificate:</strong> {student.encryptedCharacterCertificate}</p>
            <p><strong>Ninth Marks:</strong> {student.ninthMarks}</p>
            <p><strong>Tenth Marks:</strong> {student.ninthMarks}</p>
            <p><strong>Caste:</strong> {student.caste}</p>
            <p><strong>Family Income:</strong> {student.familyIncome}</p>

            <button className='student-button' onClick={onBack}>Back</button>
        </div>
    );
}

export default CasteStudentDetails;
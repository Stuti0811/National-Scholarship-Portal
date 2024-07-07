import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/PersonalInfoForm.css';

const PersonalInfoForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        pincode: '',
        permanentAddress: '',
        currentAddress: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Sending data:', formData); // Add this line to log data
            await axios.post('http://localhost:8080/api/forms/save', formData);
            console.log('User data sent successfully');
            // Clear form fields
            setFormData({
                firstName: '',
                middleName: '',
                lastName: '',
                dob: '',
                email: '',
                phone: '',
                city: '',
                state: '',
                pincode: '',
                permanentAddress: '',
                currentAddress: '',
            });
            if (onSubmit) onSubmit();
            // onSubmit();
        }
        catch (err) {
            console.error('Error sending user data:', err);
            alert("Failed");
        }
    };

    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit} >
                <h3 className="heading">Personal Details</h3>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />

                    <label>Middle Name</label>
                    <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" />

                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />

                    <label>Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" />

                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />

                    <label>City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />

                    <label>State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />

                    <label>Pincode</label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" />

                    <label>Permanent Address</label>
                    <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Permanent Address" ></textarea>

                    <label>Current Address</label>
                    <textarea name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Current Address"  ></textarea>
                </div>
                <div className='btn'>
                    <button type="submit">Submit</button>

                </div>
            </form>

        </div>
    );
}

export default PersonalInfoForm;

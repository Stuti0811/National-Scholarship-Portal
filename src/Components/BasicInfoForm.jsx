// UserForm.js
import React from 'react';
import '../Styles/BasicInfoForm.css';

function BasicInfoForm({ onSubmit }) {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     middleName: '',
    //     lastName: '',
    //     dob: '',
    //     email: '',
    //     phone: '',
    //     city: '',
    //     state: '',
    //     pincode: '',
    //     permanentAddress: '',
    //     currentAddress: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Form Data:', formData);
    //     // Handle form submission logic here
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form validation and submission logic here
        onSubmit();
    };

    return (
        <div>
            <form className="user-form" onSubmit={handleSubmit} >
                <div className="heading">
                    <h3>Personal Details</h3><br></br>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" />

                    <label>Middle Name</label>
                    <input type="text" name="middleName" />

                    <label>Last Name</label>
                    <input type="text" name="lastName" />

                    <label>Date of Birth</label>
                    <input type="date" name="dob" />

                    <label>Email</label>
                    <input type="email" name="email" />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" />

                    <label>City</label>
                    <input type="text" name="city" />

                    <label>State</label>
                    <input type="text" name="state" />

                    <label>Pincode</label>
                    <input type="text" name="pincode" />

                    <label>Permanent Address</label>
                    <textarea name="permanentAddress" ></textarea>

                    <label>Current Address</label>
                    <textarea name="currentAddress" ></textarea>
                </div>
                <div className='btn'>
                    <button type="submit">Submit</button>

                </div>
            </form>

        </div>
    );
}

export default BasicInfoForm;

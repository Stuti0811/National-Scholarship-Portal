// src/components/DocumentUploadForm.js
import React from 'react';
import '../Styles/DocumentUploadForm.css';

function DocumentUploadForm({ onSubmit, onBack }) {
    // const [formData, setFormData] = useState({
    //     aadharCard: null,
    //     panCard: null,
    //     domicile: nuDocumentUploadFormll,
    //     casteCertificate: null,
    //     characterCertificate: null,
    //     annualIncome: null,
    // });

    // const handleChange = (e) => {
    //     const { name, files } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: files[0],
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Form Data:', formData);
    // };

    return (
        <form className="document-upload-form" >
            <div>
                <h3>Upload Required Documents</h3><br></br>
            </div>
            <div className="form-group">
                <label>Aadhar Card</label>
                <input type="file" name="aadharCard" />

                <label>PAN Card</label>
                <input type="file" name="panCard" />

                <label>Domicile Certificate</label>
                <input type="file" name="domicile" />

                <label>Caste Certificate</label>
                <input type="file" name="casteCertificate" />

                <label>Character Certificate</label>
                <input type="file" name="characterCertificate" />

                <label>Annual Income of Parents</label>
                <input type="text" name="annualIncome" />
            </div>
            <div className='btn'>
                <button type="submit" onClick={onBack}>Back</button>
                <button type="submit" onClick={onSubmit}>Submit</button>
            </div>
        </form >
    );
}

export default DocumentUploadForm;

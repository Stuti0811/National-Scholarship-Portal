// function DocumentUploadForm({ onSubmit, onBack }) {
//     // const [formData, setFormData] = useState({
//     //     aadharCard: null,
//     //     panCard: null,
//     //     domicile: null,
//     //     casteCertificate: null,
//     //     characterCertificate: null,
//     //     annualIncome: null,
//     // });

//     // const handleChange = (e) => {
//     //     const { name, files } = e.target;
//     //     setFormData({
//     //         ...formData,
//     //         [name]: files[0],
//     //     });
//     // };

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     // Handle form submission logic here
//     //     console.log('Form Data:', formData);
//     // };

import React from "react";
import "../Styles/DocumentUploadForm.css";

function DocumentUploadForm({ onSubmit, onBack }) {
  return (
    <form className="document-upload-form">
      <h3>Upload Required Documents</h3>
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
      <div className="btn">
        <button type="button" onClick={onBack}>
          Back
        </button>{" "}
        {/* Changed type to "button" */}
        <button type="button" onClick={onSubmit}>
          Submit
        </button>{" "}
        {/* Changed type to "button" */}
      </div>
    </form>
  );
}

export default DocumentUploadForm;

import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../Styles/DocumentUploadForm.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

function DocumentUploadForm({ formData, setFormData, onSubmit, onBack }) {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file && file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the maximum limit of 5MB.");
        e.target.value = null; // Clear the file input
        return;
      }
      setFormData((prevData) => ({ ...prevData, [name]: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const combinedFormData = new FormData();
    for (const key in formData) {
      if (formData[key]) { // Check if file is present before appending
        combinedFormData.append(key, formData[key]);
      }
    }

    try {
      await axios.post("http://localhost:8080/nsp/api/combinedforms/save", combinedFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert("Submitted successfully");
      navigate(`/dashboard`);
      if (onSubmit) onSubmit();
    } catch (err) {
      console.error("Error sending user data:", err);
      alert("Submission failed");
    }
  };

  return (
    <form className="document-upload-form" onSubmit={handleSubmit}>
      <h3>Upload Required Documents</h3>
      <div className="form-group">
        <label>Aadhar Card</label>
        <input type="file" name="aadharCard" onChange={handleChange} required />

        <label>PAN Card</label>
        <input type="file" name="panCard" onChange={handleChange} required />

        <label>Domicile Certificate</label>
        <input type="file" name="domicile" onChange={handleChange} required />

        <label>Caste Certificate</label>
        <input type="file" name="casteCertificate" onChange={handleChange} required />

        <label>Character Certificate</label>
        <input type="file" name="characterCertificate" onChange={handleChange} required />
      </div>
      <div className="btn">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default DocumentUploadForm;

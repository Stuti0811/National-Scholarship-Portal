import React, { useState } from "react";
import axios from "axios";
import "../Styles/PersonalInfoForm.css";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

function Ntse() {
  const [formData, setFormData] = useState({
    email: "",  // Adding email field to link with PersonalInfoForm
    nationality: "",
    marks: "",
    marksheet: null,
    specialChild: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file && file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the maximum limit of 5MB.");
        e.target.value = null;
        return;
      }
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("nationality", formData.nationality);
    formDataToSend.append("specialChild", formData.specialChild);
    formDataToSend.append("marks", formData.marks);
    if (formData.marksheet) {
      formDataToSend.append("marksheet", formData.marksheet);
    }

    try {
      await axios.post("http://localhost:8080/nsp/api/ntse/save", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("User data sent successfully");
    } catch (err) {
      console.error("Error sending user data:", err);
      alert("Failed");
    }
  };

  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
        <h3 className="heading head">NTSE Scholarship Form</h3>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Nationality:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />

          <label>8th Score: (in percentage)</label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
          />

          <label>8th Std Marksheet:</label>
          <input
            type="file"
            id="marksheet"
            name="marksheet"
            onChange={handleChange}
          />

          <div className="radio-group">
            <label>Special Child:</label>
            <div className="radio-option">
              <input
                type="radio"
                id="specialChildYes"
                name="specialChild"
                value="yes"
                checked={formData.specialChild === "yes"}
                onChange={handleChange}
              />
              <label htmlFor="specialChildYes">Yes</label>
            </div>
            <div className="radio-option">
              <input
                type="radio"
                id="specialChildNo"
                name="specialChild"
                value="no"
                checked={formData.specialChild === "no"}
                onChange={handleChange}
              />
              <label htmlFor="specialChildNo">No</label>
            </div>
          </div>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Ntse;

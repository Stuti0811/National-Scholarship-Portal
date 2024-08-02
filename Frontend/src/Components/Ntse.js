import React, { useState } from "react";
import axios from "axios";
import "../Styles/PersonalInfoForm.css";
function Ntse() {
  const [formData, setFormData] = useState({
    nationality: "",
    marks: "",
    marksheet: null,
    specialChild: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/forms/save", formData);
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

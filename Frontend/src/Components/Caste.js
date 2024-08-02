import React, { useState } from "react";
import axios from "axios";
import "../Styles/PersonalInfoForm.css";

function Ntse() {
  const [formData, setFormData] = useState({
    nationality: "",
    marks: "",
    marksheet: null,
    specialChild: "",
    ninthMarks: "",
    ninthMarksheet: null,
    tenthMarks: "",
    tenthMarksheet: null,
    caste: "",
    familyIncome: "",
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
        <h3 className="heading head">Caste Scholarship Form</h3>

        <div className="form-group">
          <label>Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />

          <label>9th Score: (in percentage)</label>
          <input type="number" name="ninthMarks" onChange={handleChange} />

          <label>9th Marksheet:</label>
          <input type="file" name="ninthMarksheet" onChange={handleChange} />

          <label>10th Score: (in percentage)</label>
          <input type="number" name="tenthMarks" onChange={handleChange} />

          <label>10th Marksheet:</label>
          <input type="file" name="tenthMarksheet" onChange={handleChange} />

          <label>
            Caste:
            <select
              className="castes"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </label>

          <label>Family's Income:</label>
          <input
            type="number"
            name="familyIncome"
            value={formData.familyIncome}
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

import React, { useState } from "react";
import axios from "axios";
import "../Styles/PersonalInfoForm.css";
import { useNavigate } from "react-router-dom";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

function Caste() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    nationality: "",
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
      const file = files[0];
      if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the maximum limit of 5MB.");
        e.target.value = null;
        return;
      }
      setFormData((prevData) => ({ ...prevData, [name]: file }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data for debugging
    console.log('Form Data:', formData);

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("nationality", formData.nationality);
    formDataToSend.append("specialChild", formData.specialChild);
    formDataToSend.append("ninthMarks", formData.ninthMarks);
    formDataToSend.append("tenthMarks", formData.tenthMarks);
    formDataToSend.append("caste", formData.caste);
    formDataToSend.append("familyIncome", formData.familyIncome);

    if (formData.ninthMarksheet) {
      formDataToSend.append("ninthMarksheet", formData.ninthMarksheet);
    }
    if (formData.tenthMarksheet) {
      formDataToSend.append("tenthMarksheet", formData.tenthMarksheet);
    }

    try {
      await axios.post("http://localhost:8080/nsp/api/caste/save", formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("User data sent successfully");
      console.log("User data sent successfully");
      navigate("/dashboard");
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
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Nationality:</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />

          <label>9th Score: (in percentage)</label>
          <input
            type="number"
            name="ninthMarks"
            value={formData.ninthMarks}
            onChange={handleChange}
            required
          />

          <label>9th Marksheet:</label>
          <input
            type="file"
            name="ninthMarksheet"
            onChange={handleChange}
            required
          />

          <label>10th Score: (in percentage)</label>
          <input
            type="number"
            name="tenthMarks"
            value={formData.tenthMarks}
            onChange={handleChange}
            required
          />

          <label>10th Marksheet:</label>
          <input
            type="file"
            name="tenthMarksheet"
            onChange={handleChange}
            required
          />

          <label>
            Caste:
            <select
              className="castes"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              required
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
            required
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

export default Caste;

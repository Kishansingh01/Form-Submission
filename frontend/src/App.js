
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      console.log("Till axios it is coming");
      await axios.post("http://localhost:5000/api/form", formData);
      alert("Form submitted successfully and it has connected to frontend and backend");
      setFormData({ name: "", email: "", mobile: "", date: "" });
    }catch (error) {
          console.error(error);
          alert(error.response?.data?.error || "Error submitting form");
        }
  };
       
  return (
    <div className="form-wrapper">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </div>

        <div className="input-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="submit-box">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

import { useState } from "react";
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleInput = (event)=> {
        const name = event.target.name

        const value = event.target.value
    setFormData((prev) => {
        return {...prev, [name]: value}
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple password match validation
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        alert("Form Data Submitted:");
        console.log("Form Data Submitted:", formData);
      };


  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
           value={formData.password}
           onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
           value={formData.confirmPassword}
           onChange={handleInput}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

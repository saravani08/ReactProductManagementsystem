import React, { useState } from 'react';
import './form.css'; 

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    mobile: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    usernameError: '',
    passwordError: '',
    mobileError: '',
    emailError: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (name === 'username') {
      newErrors.usernameError = value.trim() ? '' : 'Username is required';
    } else if (name === 'password') {
      newErrors.passwordError = value.trim() ? '' : 'Password is required';
    } else if (name === 'mobile') {
      newErrors.mobileError = value.trim() ? '' : 'Mobile number is required';
    } else if (name === 'email') {
      newErrors.emailError = value.trim() ? '' : 'Email is required';
    }

  
    if (value.trim()) {
      if (name === 'password') {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
        newErrors.passwordError = passwordRegex.test(value) ? '' : 'Password must have at least one uppercase letter, one number, one special character, and a minimum length of 6 characters';
      } else if (name === 'mobile') {
        newErrors.mobileError = value.length === 10 ? '' : 'Mobile number should be 10 digits';
      } else if (name === 'email') {
        newErrors.emailError = /\S+@\S+\.\S+/.test(value) ? '' : 'Email should be in correct format';
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every((error) => error === '');

    if (isValid) {
      console.log('Form Data:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div>
      <h2 align="center">Registration Form</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User Name: </label><br />
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error">{errors.usernameError}</div>
          </div>
          <div>
            <label htmlFor="password">Password: </label><br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error">{errors.passwordError}</div>
          </div>
          <div>
            <label htmlFor="mobile">Mobile Number: </label><br />
            <input
              type="number"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error">{errors.mobileError}</div>
          </div>
          <div>
            <label htmlFor="email">Email ID: </label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="error">{errors.emailError}</div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;

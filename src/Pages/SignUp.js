import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
const navigate = useNavigate(); // Hook for navigation

  // State to store form values
  const [businessForm, setBusinessForm] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  });
  const [personalForm, setPersonalForm] = useState({
    email: '',
    name: '',
    username: '',
    password: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'business') {
      setBusinessForm(prevState => ({ ...prevState, [name]: value }));
    } else {
      setPersonalForm(prevState => ({ ...prevState, [name]: value }));
    }
  };

  // Basic email validation function
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Function to handle form submission
  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    const formData = formType === 'business' ? businessForm : personalForm;
  
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Determine the appropriate endpoint based on the form type
    const endpoint = formType === 'business' ? 'http://localhost:5000/api/signup/business' : 'http://localhost:5000/api/signup/personal';
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Signup failed.');
      }
  
      const result = await response.json();
      console.log('Signup successful:', result);
      navigate('/login'); // Modify as needed to route where you want
    } catch (error) {
      console.error('Signup error:', error);
      alert(error.message);
    }
  };
  

  return (
    <div className="signup-container">
        <button className="return-button" onClick={() => navigate('/')}>Return</button>
      <h1>Sign Up</h1>
      <div className="forms-container">
        {/* Business Account Form */}
        <div className="form-box">
          <h2>Business Account</h2>
          <form onSubmit={(e) => handleSubmit(e, 'business')}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={businessForm.email}
              onChange={(e) => handleInputChange(e, 'business')}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={businessForm.name}
              onChange={(e) => handleInputChange(e, 'business')}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={businessForm.username}
              onChange={(e) => handleInputChange(e, 'business')}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={businessForm.password}
              onChange={(e) => handleInputChange(e, 'business')}
            />
            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        </div>

        {/* Personal Account Form */}
        <div className="form-box">
          <h2>Personal Account</h2>
          <form onSubmit={(e) => handleSubmit(e, 'personal')}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={personalForm.email}
              onChange={(e) => handleInputChange(e, 'personal')}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={personalForm.name}
              onChange={(e) => handleInputChange(e, 'personal')}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={personalForm.username}
              onChange={(e) => handleInputChange(e, 'personal')}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={personalForm.password}
              onChange={(e) => handleInputChange(e, 'personal')}
            />
            <button type="submit" className="submit-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

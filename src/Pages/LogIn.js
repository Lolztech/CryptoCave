import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

function LogIn() {
  const navigate = useNavigate();

  // State for form values
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
  });

  // State for error messages
  const [error, setError] = useState('');

  // Basic email validation function
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // Clear error message when user starts typing
    setError('');
  };

  // Handle form submission
// Inside LogIn component

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateEmail(formValues.email)) {
    setError('Please enter a valid email address.');
    return;
  }
  if (!formValues.email || !formValues.username || !formValues.password) {
    setError('Please fill in all fields.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    });
    
    const data = await response.json(); // Parse the response only once
    if (!response.ok) {
      throw new Error(data.message || 'An error occurred during login.');
    }
    
    console.log('Login successful:', data);
    navigate('/dashboard', { state: { userName: data.name, accountId: data._id } }); // Pass user data to dashboard
  } catch (error) {
    console.error('Login error:', error);
    setError(error.message || 'Failed to log in.');
  }
};


  return (
    <div className="login-container">
      <button className="return-button" onClick={() => navigate('/')}>Return</button>
      <h1>Log In</h1>
      <div className="form-container">
        <h2>Please Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
          <button type="submit" className="submit-button">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;

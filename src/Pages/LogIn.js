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
    setError('');
  };

  // Handle form submission
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

    // Simulated fetch request for login
    console.log('Login attempt:', formValues);
    // Here you would typically handle the actual login logic
    navigate('/dashboard'); // Navigate to dashboard upon successful login simulation
  };

  // Function to redirect to Microsoft Authenticator
  const redirectToMicrosoftAuthenticator = () => {
    window.location.href = 'https://www.microsoft.com/en-us/account/authenticator';
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">Log In</button>
        </form>
        <button className="submit-button" onClick={redirectToMicrosoftAuthenticator}>2 Factor Authentication</button>
      </div>
    </div>
  );
}

export default LogIn;


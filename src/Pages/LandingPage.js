import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <button className="login-button" onClick={() => navigate('/login')}>Log In</button>
      <div className="content-wrapper">
        <h1>CryptoCave</h1>
        <p>
        Welcome to CryptoCave, the reliable and user-friendly cryptocurrency wallet designed to meet the needs of both novice and experienced cryptocurrency enthusiasts. Our platform provides a secure environment for managing, exchanging, and storing digital currencies effortlessly. We understand the importance of accessibility in the rapidly evolving world of digital finance, therefore CryptoCave is committed to delivering a straightforward and hassle-free experience, whether you're exploring the potential of digital currencies for the first time or looking for a dependable wallet solution, CryptoCave is here to support your journey.
        </p>
        <button className="join-us-button" onClick={() => navigate('/signup')}>Join Us</button>
      </div>
    </div>
  );
}

export default LandingPage;

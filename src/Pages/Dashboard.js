import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; 

function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('userToken');
      try {
        const response = await fetch('http://localhost:5000/api/user/details', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error('Failed to fetch user details');
        const data = await response.json();
        setUsername(data.username); // Set username in state
      } catch (error) {
        console.error('Error fetching user details:', error);
        // Redirect to login page or handle error as needed
      }
    };

    fetchUserDetails();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="dashboard-container">
      <h1>Welcome, {username}</h1>
      <div className="dashboard-buttons">
        <button onClick={() => navigate('/wallet')}>Wallet</button>
        <button onClick={() => navigate('/market')}>Market</button>
        <button onClick={() => navigate('/faqpage')}>FAQ</button>
        <button onClick={() => navigate('/helppage')}>Help Page</button>
        <button onClick={() => {
          localStorage.removeItem('userToken'); // Clear user token or session
          navigate('/login'); // Redirect to login page
        }}>Log Out</button>
      </div>
    </div>
  );
}

export default Dashboard;

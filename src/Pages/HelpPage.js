import React, { useState } from 'react';
import './HelpPage.css'; // Assuming CSS adjustments for React

function HelpPage() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const query = formData.get('query');
    console.log({ email, query }); // Replace with actual submission logic

    setShowForm(false); // Hide form after submission
    alert('Query sent!'); // Placeholder feedback
  };

  return (
    <div>
      <a id="dashboardLink" href="/">
        <div className="navbar">Dashboard</div>
      </a>

      <h1>Help Page</h1>
      <button id="adminHelpButton" onClick={() => setShowForm(true)}>Request Help from Admin</button>
      <button onClick={() => window.location.href = '/faq'}>FAQ</button>

      {showForm && (
        <div id="popupForm" className="popup-form">
          <h2>Request Help from Admin</h2>
          <form id="helpForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="query">Query:</label>
            <textarea id="query" name="query" rows="4" required></textarea>

            <button type="submit">Send</button>
            <button type="button" onClick={() => setShowForm(false)}>Back</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default HelpPage;

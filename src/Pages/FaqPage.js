import React from 'react';
import './FaqPage.css'; // Assuming you have similar CSS files converted for React

function FaqPage() {
  return (
    <div>
      <a id="dashboardLink" href="/">
        <div className="navbar">Dashboard</div>
      </a>

      <h1>Frequently Asked Questions</h1>
      <div className="contents">
        <h2>Contents</h2>
        {/* Adjust hrefs as needed to work with your React router setup if not using anchor links for navigation */}
        <a href="#problem1">Problem 1: What is cryptocurrency?</a>
        {/* Add other links similarly */}
      </div>

      {/* FAQ Sections */}
      <section id="problem1">
        <h2>What is cryptocurrency?</h2>
        <p>Cryptocurrency is a digital or virtual form of currency that utilizes cryptography for security and operates independently of a central authority, such as a government or financial institution.</p>
      </section>
      {/* Add other sections similarly */}
    </div>
  );
}

export default FaqPage;

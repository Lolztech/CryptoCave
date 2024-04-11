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
      
        <a href="#problem1">Problem 1: What is cryptocurrency?</a>
        <a href="#problem2">Problem 2: How do I get started with cryptocurrency trading?</a>
        <a href="#problem3">Problem 3: Is cryptocurrency trading safe?</a>
        <a href="#problem4">Problem 4: What cryptocurrencies can I trade on your platform?</a>
        <a href="#problem5">Problem 5: How do I buy or sell cryptocurrencies on your platform?</a>
        <a href="#problem6">Problem 6: What educational resources do you offer for beginners?</a>
        <a href="#problem7">Problem 7: Is cryptocurrency trading safe?</a>
        <a href="#problem8">Problem 8: How can I contact customer support if I have more questions?</a>
        
      </div>

      {/* FAQ Sections */}
      <section id="problem1">
        <h2>What is cryptocurrency?</h2>
        <p>Cryptocurrency is a digital or virtual form of currency that utilizes cryptography for security and operates independently of a central authority, such as a government or financial institution.</p>
      </section>

      <section id="problem2">
        <h2> How do I get started with cryptocurrency trading?</h2>
        <p>To begin trading cryptocurrency on our platform, sign up for an account, complete the verification process and start exploring the available trading options.</p>
    </section>

    <section id="problem3">
        <h2>Is cryptocurrency trading safe?</h2>
        <p>While cryptocurrency trading carries inherent risks, our platform employs robust security measures to safeguard your assets and personal information.</p>
    </section>

    <section id="problem4">
        <h2>What cryptocurrencies can I trade on your platform?</h2>
        <p>Our platform supports a diverse range of cryptocurrencies, including popular options such as Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and more. Explore our trading interface to view the full list of available assets.</p>
    </section>

    <section id="problem5">
        <h2>How do I buy or sell cryptocurrencies on your platform?</h2>
        <p>Buying and selling cryptocurrencies on our platform is simple. Navigate to the trading interface, select the desired cryptocurrency pair, specify the amount you wish to buy or sell, and confirm the transaction. Our platform provides real-time market data and intuitive tools to facilitate seamless trading.</p>
    </section>

    <section id="problem6">
        <h2>What educational resources do you offer for beginners?</h2>
        <p>We provide a comprehensive selection of tutorials, guides, and educational materials designed to assist beginners in understanding the fundamentals of cryptocurrency trading and investment. Explore our FAQ section and educational resources to access valuable insights and information.</p>
    </section>

    <section id="problem7">
        <h2>How can I contact customer support if I have more questions?</h2>
        <p>If you have any questions, concerns, or require assistance, our dedicated customer support team is available to help. Contact us through the help page, Where you can enter your email and your query.</p>
    </section>
      
    </div>
  );
}

export default FaqPage;

import React, { useState, useEffect } from 'react';
import './Market.css'; // Ensure this path matches the location of your CSS file in your project

const Market = () => {
  const [cryptoPrices, setCryptoPrices] = useState({
    Tether: "N/A",
    Dogecoin: "N/A",
    Ethereum: "N/A",
    Bitcoin: "N/A",
  });

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether%2Cdogecoin%2Cethereum%2Cbitcoin&vs_currencies=USD");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setCryptoPrices({
          Tether: data.tether?.usd ?? "N/A",
          Dogecoin: data.dogecoin?.usd ?? "N/A",
          Ethereum: data.ethereum?.usd ?? "N/A",
          Bitcoin: data.bitcoin?.usd ?? "N/A",
        });
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchCryptoPrices();
  }, []);

  return (
    <div className="gridcontainer">
      {/* Navigation and other content */}
      
      <div className="container7">
        <div className="container8">
          <img src="./photo/tether-logo.png" alt="Tether" />
          <h1>Tether</h1>
          <h1>${cryptoPrices.Tether}</h1>
        </div>
        <div className="container8">
          <img src="./photo/dogecoin-doge-logo.png" alt="Dogecoin" />
          <h1>Dogecoin</h1>
          <h1>${cryptoPrices.Dogecoin}</h1>
        </div>
        <div className="container8">
          <img src="./photo/ethereum-eth-logo.png" alt="Ethereum" />
          <h1>Ethereum</h1>
          <h1>${cryptoPrices.Ethereum}</h1>
        </div>
        <div className="container8">
          <img src="./photo/bitcoin-btc-logo.png" alt="Bitcoin" />
          <h1>Bitcoin</h1>
          <h1>${cryptoPrices.Bitcoin}</h1>
        </div>
      </div>
    </div>
  );
};

export default Market;

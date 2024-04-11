import React, { useState } from 'react';

function Wallet() {
  const [walletDetails, setWalletDetails] = useState({
    walletName: '',
    bankAccount: ''
  });
  const [wallets, setWallets] = useState([]); // Placeholder for wallets state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWalletDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleCreateWallet = (event) => {
    event.preventDefault();
    // Logic to handle wallet creation
    console.log(walletDetails);
    // Reset form fields after submission
    setWalletDetails({ walletName: '', bankAccount: '' });
  };

  return (
    <div>
      {/* Other components */}
      <h1>Wallet</h1>
      <div>
        <h2>Create a New Wallet</h2>
        <form onSubmit={handleCreateWallet}>
          <div>
            <label htmlFor="walletName">Wallet Name:</label>
            <input
              type="text"
              id="walletName"
              name="walletName"
              value={walletDetails.walletName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="bankAccount">Choose Bank Account:</label>
            <select
              id="bankAccount"
              name="bankAccount"
              value={walletDetails.bankAccount}
              onChange={handleInputChange}
              required
            >
              {/* Options should be fetched and mapped here */}
              <option value="">Select an Account</option>
              {/* Example static option, replace or expand with dynamic data */}
              <option value="account1">Account 1</option>
              <option value="account2">Account 2</option>
            </select>
          </div>
          <button type="submit">Create Wallet</button>
        </form>
      </div>
    </div>
  );
}

export default Wallet;

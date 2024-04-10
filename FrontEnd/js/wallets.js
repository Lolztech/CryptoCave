document.addEventListener('DOMContentLoaded', function() {
  // Import and initialize Bitstamp API client
  const BitstampApi = require('./bitstamp-api-client');
  const bitstampApiClient = new BitstampApi.DefaultApi();

  // Dummy bank account data (replace with actual backend data retrieval)
  const bankAccounts = [
      { id: 'bankAccount1', name: 'Bank Account 1' },
      { id: 'bankAccount2', name: 'Bank Account 2' },
      { id: 'bankAccount3', name: 'Bank Account 3' },
  ];

  // Function to populate bank account options in the select dropdown
  function populateBankAccounts() {
      const bankAccountSelect = document.getElementById('bankAccount');
      bankAccounts.forEach(function (account) {
          const option = document.createElement('option');
          option.value = account.id;
          option.textContent = account.name;
          bankAccountSelect.appendChild(option);
      });
  }

  // Handle wallet creation form submission
  document.getElementById('walletForm').addEventListener('submit', function (event) {
      event.preventDefault();

      const walletName = document.getElementById('walletName').value;
      const bankAccount = document.getElementById('bankAccount').value;

      const wallet = {
          name: walletName,
          bankAccount: bankAccount,
          balance: 0,
      };

      // Retrieve existing wallets from localStorage or initialize if empty
      const wallets = JSON.parse(localStorage.getItem('wallets')) || [];
      wallets.push(wallet);
      localStorage.setItem('wallets', JSON.stringify(wallets));

      displayWallets(wallets);

      // Reset form inputs after submission
      document.getElementById('walletName').value = '';
      document.getElementById('bankAccount').selectedIndex = 0; // Reset select dropdown
  });

  // Display existing wallets when the page loads
  window.onload = () => {
      const username = localStorage.getItem('newUsername');
      if (username) {
          document.getElementById('username').textContent = username;
          const wallets = JSON.parse(localStorage.getItem('wallets')) || [];
          displayWallets(wallets);
      }
  };

  // Function to display wallets in the UI
  function displayWallets(wallets) {
      const walletList = document.getElementById('walletList');
      walletList.innerHTML = '';

      wallets.forEach((wallet) => {
          const listItem = document.createElement('li');
          const walletCard = document.createElement('div');
          walletCard.className = 'wallet-card';

          const walletInfo = document.createElement('div');
          walletInfo.textContent = `${wallet.name} - ${findBankAccountName(wallet.bankAccount)}`;

          const currentBalance = document.createElement('p');
          currentBalance.textContent = `Current Balance: ${wallet.balance}`;
          walletCard.appendChild(currentBalance);

          const buttonsDiv = document.createElement('div');

          const investButton = document.createElement('button');
          investButton.textContent = 'Invest';
          investButton.className = 'investButton';
          investButton.dataset.walletName = wallet.name; // Store wallet name in dataset

          const withdrawButton = document.createElement('button');
          withdrawButton.textContent = 'Withdraw';
          withdrawButton.className = 'withdrawButton';
          withdrawButton.dataset.walletName = wallet.name; // Store wallet name in dataset

          investButton.addEventListener('click', handleInvest);
          withdrawButton.addEventListener('click', handleWithdraw);

          buttonsDiv.appendChild(investButton);
          buttonsDiv.appendChild(withdrawButton);

          walletCard.appendChild(walletInfo);
          walletCard.appendChild(buttonsDiv);

          listItem.appendChild(walletCard);
          walletList.appendChild(listItem);
      });

      // Set up event listeners for Invest and Withdraw buttons
      setupButtonListeners();
  }

  // Function to find bank account name by ID
  function findBankAccountName(id) {
      const account = bankAccounts.find((account) => {
          return account.id === id;
      });
      return account ? account.name : 'Unknown';
  }

  // Event listener for Invest button click
  function handleInvest(event) {
      const walletName = event.target.dataset.walletName;
      const amountToInvest = parseFloat(prompt('Enter amount of cryptocurrency to buy:'));
      const currencyPair = 'btcusd'; // Example: Bitcoin (BTC) to USD

      if (!isNaN(amountToInvest) && amountToInvest > 0) {
          buyCrypto(walletName, amountToInvest, currencyPair);
      } else {
          alert('Invalid amount. Please enter a valid number.');
      }
  }

  // Event listener for Withdraw button click
  function handleWithdraw(event) {
      const walletName = event.target.dataset.walletName;
      const amountToWithdraw = parseFloat(prompt('Enter amount of cryptocurrency to sell:'));
      const currencyPair = 'btcusd'; // Example: Bitcoin (BTC) to USD

      if (!isNaN(amountToWithdraw) && amountToWithdraw > 0) {
          sellCrypto(walletName, amountToWithdraw, currencyPair);
      } else {
          alert('Invalid amount. Please enter a valid number.');
      }
  }

  // Function to set up button listeners for Invest and Withdraw buttons
  function setupButtonListeners() {
      const investButtons = document.querySelectorAll('.investButton');
      const withdrawButtons = document.querySelectorAll('.withdrawButton');

      investButtons.forEach(button => {
          button.addEventListener('click', handleInvest);
      });

      withdrawButtons.forEach(button => {
          button.addEventListener('click', handleWithdraw);
      });
  }

  // Function to buy cryptocurrency
  async function buyCrypto(walletName, amount, currencyPair) {
      try {
          const response = await bitstampApiClient.buyLimitOrder({
              amount: amount,
              currencyPair: currencyPair,
          });
          console.log('Buy order successful:', response);
          alert(`Successfully bought ${amount} ${currencyPair}`);
          // Additional logic: Update wallet balance or display success message
      } catch (error) {
          console.error('Buy order failed:', error);
          alert('Failed to place buy order. Please try again.');
      }
  }

  // Function to sell cryptocurrency
  async function sellCrypto(walletName, amount, currencyPair) {
      try {
          const response = await bitstampApiClient.sellLimitOrder({
              amount: amount,
              currencyPair: currencyPair,
          });
          console.log('Sell order successful:', response);
          alert(`Successfully sold ${amount} ${currencyPair}`);
          // Additional logic: Update wallet balance or display success message
      } catch (error) {
          console.error('Sell order failed:', error);
          alert('Failed to place sell order. Please try again.');
      }
  }

  // Populate bank account options when the DOM is loaded
  populateBankAccounts();
});


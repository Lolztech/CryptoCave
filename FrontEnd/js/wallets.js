document.addEventListener('DOMContentLoaded', function() {
  // TODO: make request from backend for all the user bank accounts
  const bankAccounts = [
    { id: 'bankAccount1', name: 'Bank Account 1' },
    { id: 'bankAccount2', name: 'Bank Account 2' },
    { id: 'bankAccount3', name: 'Bank Account 3' },
  ];

  const bankAccountSelect = document.getElementById('bankAccount')
  bankAccounts.forEach(function (account) {
    const option = document.createElement('option')
    option.value = account.id
    option.textContent = account.name
    bankAccountSelect.appendChild(option)
  });

  document
    .getElementById('walletForm')
    .addEventListener('submit', function (event) {
      event.preventDefault()

      const walletName = document.getElementById('walletName').value
      const bankAccount = document.getElementById('bankAccount').value

      const wallet = {
        name: walletName,
        bankAccount: bankAccount,
        balance: 0,
      };

      // TODO: load all the wallets from backend using get request
      const wallets = JSON.parse(localStorage.getItem('wallets')) || []

      wallets.push(wallet)

      localStorage.setItem('wallets', JSON.stringify(wallets))

      displayWallets(wallets)

      document.getElementById('walletName').value = ''
      document.getElementById('bankAccount').value = ''
    });

  window.onload = () => {
    const username = localStorage.getItem('newUsername')
    if (username) {
      document.getElementById('username').textContent = username
      const wallets = JSON.parse(localStorage.getItem('wallets')) || []
      displayWallets(wallets)
    };
  };

  function displayWallets(wallets) {
    const walletList = document.getElementById('walletList')
    walletList.innerHTML = ''

    wallets.forEach((wallet) => {
      const listItem = document.createElement('li')
      const walletCard = document.createElement('div')
      walletCard.className = 'wallet-card'

      const walletInfo = document.createElement('div')
      walletInfo.textContent =
        wallet.name + ' - ' + findBankAccountName(wallet.bankAccount)

      currentBalance = document.createElement('p')
      currentBalance.textContent = `Current Balance: ${wallet.balance}`
      walletCard.appendChild(currentBalance)
      const buttonsDiv = document.createElement('div')
      const investButton = document.createElement('button')
      investButton.textContent = 'Invest'
      const withdrawButton = document.createElement('button')
      withdrawButton.textContent = 'Withdraw'
      const changeButton = document.createElement('button')
      changeButton.textContent = 'Change'

      investButton.addEventListener('click', () => {
        invest()
        console.log('Invest button clicked for wallet: ' + wallet.name)
      })

      withdrawButton.addEventListener('click', () => {
        withdraw()
        console.log('Withdraw button clicked for wallet: ' + wallet.name)
      })

      changeButton.addEventListener('click', () => {
        changeCurrency()
      })

      buttonsDiv.appendChild(investButton)
      buttonsDiv.appendChild(withdrawButton)
      buttonsDiv.appendChild(changeButton)

      walletCard.appendChild(walletInfo)
      walletCard.appendChild(buttonsDiv)

      listItem.appendChild(walletCard)
      walletList.appendChild(listItem)
    });
  };

  function findBankAccountName(id) {
    const account = bankAccounts.find((account) => {
      return account.id === id
    });
    return account ? account.name : 'Unknown'
  };

  document.getElementById('backButton').addEventListener('click', () => {
    window.history.back()
  });

  document.getElementById('dashboardButton').addEventListener('click', () => {
    window.location.href = 'new_dash.html'
  });

  // TODO: make request to backend for each opeation
  function invest() {
    console.log('invest')
  };
  function withdraw() {
    console.log('withdraw')
  };
  function changeCurrency() {
    console.log('change currency')
  };
});

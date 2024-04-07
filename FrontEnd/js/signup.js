document.addEventListener('DOMContentLoaded', function() {
  // Function to handle login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Fetch input values
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      // To test new user dashboard
      var hcUserN = "Roch123"
      var hcPassN = "Roch246"

      // To test expert user dashboard
      var hcUserE = "Eddy123"
      var hcPassE = "Eddy246"

      // To test trading firm user dashboard
      var hcUserT = "Tina123"
      var hcPassT = "Tina246"

      // Simulating some authentication (to be replaced with actual backend call later)
      if (username === hcUserN && password === hcPassN) {
          localStorage.setItem('newUsername', username);

          // Redirect to needed dashboard
          window.location.href = 'new_dash.html';

      } else if (username === hcUserE && password === hcPassE) {
          localStorage.setItem('newUsername', username);

          // Redirect to needed dashboard
          window.location.href = 'expert_dash.html';

      } else if (username === hcUserT && password === hcPassT) {
          localStorage.setItem('newUsername', username);

          // Redirect to needed dashboard
          window.location.href = 'tradingF_dash.html';

      } else {
          // Display error message (replace with actual error handling)
          alert('Invalid username or password');
      } 
  });

  // Add listener to the "Set up account" button
  document.getElementById('CreateAccount').addEventListener('click', function() {
          // Redirect to the tutorial page
          window.location.href = 'CreateAccount.html';
  });   
  // Add listener to the "Join trading firm" button
  document.getElementById('JoinTF').addEventListener('click', function() {
          // Redirect to the tutorial page
          window.location.href = 'JoinTF.html';
  });   
  // Function to handle sign up form submission
  document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Fetch input values
      var newUsername = document.getElementById('newUsername').value;
      var newPassword = document.getElementById('newPassword').value;

      localStorage.setItem('newUsername', newUsername);

      // Simulate sign-up process (to be replaced with actual backend call)
      // As long as sign-up is successful, redirect to verification page
      window.location.href = 'verification.html';
  });
  // Function to show the trading firm signup section
  function showTradingFirmSignup() {
      document.getElementById('tradingFirmSignup').style.display = 'block';
  }

  // Add event listener to the "tutorial" button
  document.getElementById('tutorialButton').addEventListener('click', function() {
    // Redirect to the tutorial page
    window.location.href = 'tutorials_page.html';
  });
});
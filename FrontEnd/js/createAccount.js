document.addEventListener('DOMContentLoaded', function() {
  var emailFormContainer = document.getElementById('emailFormContainer');
  var emailForm = document.getElementById('emailForm');
  var verificationFormContainer = document.getElementById('verificationFormContainer');
  var verificationForm = document.getElementById('verificationForm');
  var usernamePasswordFormContainer = document.getElementById('usernamePasswordFormContainer');
  var usernamePasswordForm = document.getElementById('usernamePasswordForm');

  // Function to handle email form submission
  emailForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Fetch input values
      var companyName = document.getElementById('companyName').value;
      var email = document.getElementById('email').value;

      // Simulate sending verification code to email (replace with actual backend call)
      console.log('Verification code sent to:', email);

      // Show verification form
      emailFormContainer.style.display = 'none';
      verificationFormContainer.style.display = 'block';
  });

  // Function to handle verification form submission
  verificationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Fetch verification code input value
      var verificationCode = document.getElementById('verificationCode').value;

      // Simulate verification process (replace with actual backend call)
      // Assuming verification code is correct, show username and password form
      verificationFormContainer.style.display = 'none';
      usernamePasswordFormContainer.style.display = 'block';
  });

  // Function to handle username and password form submission
  usernamePasswordForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Fetch input values
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      // Simulate account creation (replace with actual backend call)
      console.log('Account created with Username:', username, 'and Password:', password);

      // Redirect to dashboard (replace with actual redirection logic)
      redirectToDashboard();
  });

  // Function to redirect to dashboard (replace with actual redirection logic)
  function redirectToDashboard() {
      window.location.href = 'tradingF_dash.html';
  }
});
document.addEventListener('DOMContentLoaded', function() {
  var emailForm = document.getElementById('emailForm');
  var verificationFormContainer = document.getElementById('verificationFormContainer');
  var verificationForm = document.getElementById('verificationForm');
  var userTypeFormContainer = document.getElementById('userTypeFormContainer');
  var userTypeForm = document.getElementById('userTypeForm');
  var credentialsFormContainer = document.getElementById('credentialsFormContainer');
  var credentialsForm = document.getElementById('credentialsForm');
  var companyName;

  // Function to handle email form submission
  emailForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      // Simulate sending verification code to email
      verificationFormContainer.style.display = 'block';
  });

  // Function to handle verification form submission
  verificationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      // Assuming verification code is correct, show user type form
      userTypeFormContainer.style.display = 'block';
  });

  // Function to handle user type form submission
  userTypeForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      credentialsFormContainer.style.display = 'block';
  });

  // Function to handle credentials form submission
  credentialsForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      var newUsername = document.getElementById('newUsername').value;
      var newPassword = document.getElementById('newPassword').value;
      localStorage.setItem('newUsername', newUsername);
      localStorage.setItem('companyName', companyName); // Store company name in local storage
      // Redirect based on user type
      var userType = document.getElementById('userType').value;
      if (userType === 'expert') {
          window.location.href = 'expert_dash.html';
      } else if (userType === 'new') {
          window.location.href = 'new_dash.html';
      }
  });
});
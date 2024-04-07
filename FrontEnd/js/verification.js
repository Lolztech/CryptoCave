document.addEventListener('DOMContentLoaded', function() {
  var emailForm = document.getElementById('emailForm');
  var verificationFormContainer = document.getElementById('verificationFormContainer');
  var verificationForm = document.getElementById('verificationForm');
  var userTypeFormContainer = document.getElementById('userTypeFormContainer');
  var userTypeForm = document.getElementById('userTypeForm');
  var firmNameFormContainer = document.getElementById('firmNameFormContainer');
  var firmNameForm = document.getElementById('firmNameForm');

  // Function to handle email form submission
  emailForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      /* --------------- API Call for Sending Verification Email will go here --------------- */
      // Fetch email input value
      var email = document.getElementById('email').value;

      // Simulate sending verification code to email (replace with actual backend call)
      console.log('Verification code sent to:', email);

      // Show verification form
      verificationFormContainer.style.display = 'block';
  });

  /* --------------- API Call for Validating Verification Code will go here --------------- */
  // Function to handle verification form submission
  verificationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Fetch verification code input value
      var verificationCode = document.getElementById('verificationCode').value;

      // Simulate verification process (replace with actual backend call)
      // Assuming verification code is correct, show user type form
      userTypeFormContainer.style.display = 'block';
  });

  // Function to handle user type form submission
  userTypeForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Fetch selected user type
      var userType = document.getElementById('userType').value;

      // Ask for confirmation
      var confirmation = confirm('Click Ok to continue as a ' + userType + ' user');
      if (confirmation) {
          if (userType === 'expert') {
                  // Redirect to dashboard for expert users
                  redirectToDashboard(userType);
          } else {
              // Redirect to dashboard for non-expert users
              redirectToDashboard(userType);
          }
      }
  });
  // Function to redirect to dashboard (replace with actual redirection logic)
  function redirectToDashboard(userType) {
      if (userType === 'expert') {
          window.location.href = 'expert_dash.html';
      } else if (userType === 'new') {
          window.location.href = 'new_dash.html';
      }      
  }
});
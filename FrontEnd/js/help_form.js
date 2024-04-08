// Display the popup form when the "Request Help from Admin" button is clicked
document.getElementById('adminHelpButton').addEventListener('click', function() {
  document.getElementById('popupForm').style.display = 'block';
});

// Close the popup form when the user clicks outside of it
window.onclick = function(event) {
  var popupForm = document.getElementById('popupForm');
  if (event.target == popupForm) {
      popupForm.style.display = 'none';
  }
};

// Function to handle form submission
document.getElementById('helpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Fetch input values
  var email = document.getElementById('email').value;
  var query = document.getElementById('query').value;

  // Will be using backend call for this
  // just display an alert
  alert('Query sent!\nEmail: ' + email + '\nQuery: ' + query);

  // Reset the form and hide the popup
  document.getElementById('helpForm').reset();
  document.getElementById('popupForm').style.display = 'none';
});
// Function to handle back button click
document.getElementById('backButton').addEventListener('click', function() {
  document.getElementById('popupForm').style.display = 'none'; // Hide the popup form
});
// Function to handle dashboard button click
document.getElementById('dashboardLink').addEventListener('click', function() {
  window.history.back(); // Navigate back to the previous page
});
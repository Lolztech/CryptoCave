document.addEventListener('DOMContentLoaded', function() {
  // Add listener to the "Add employees" button
  document.getElementById('addEmployeesButton').addEventListener('click', function() {
      // pop up form to add employee
      document.getElementById('addEmployeeForm').style.display = 'block';
  }); 
  // Add listener to the "Remove employees" button
  document.getElementById('removeEmployeesButton').addEventListener('click', function() {
      // pop up form to remove employee (will use backend function)
  });    
  // Add listener to the "View employees" button
  document.getElementById('viewEmployeesButton').addEventListener('click', function() {
      // table pops up showing all employees (will use backend function)
  });    
  // Add listener to the form submission
  document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch input values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Replace this with backend logic to send email to employee
    console.log('Adding employee:', fullName, email, 'with message:', message);

    // Will be using backend call for this
    // just display an alert
    alert('Query sent!\nEmail: ' + email + '\nMessage: ' + message);

    // Optional: Clear the form fields after submission
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Hide the form after submission
    document.getElementById('addEmployeeForm').style.display = 'none';
  });

  // Function to handle dashboard button click
  document.getElementById('dashboardLink').addEventListener('click', function() {
    window.history.back(); // Navigate back to the previous page
  });
});

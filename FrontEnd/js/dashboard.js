
document.addEventListener('DOMContentLoaded', function() {
  displayUsername();
  updateUserDashboard();
  setUpButtons();
});

function displayUsername() {
  // Get username from localStorage
  var username = localStorage.getItem('newUsername');
  if (username) {
    // Display username
    document.getElementById('username').textContent = username;
  }
}

function setUpButtons() {
  //employeesButton();
  tutorialButton();
  helpButton();
  signoutButton();
}

function updateUserDashboard() {
  // For once we have a function to retrieve the user ID from client-side storage
  // This has the assumption that user ID is stored in localStorage
  var userId = localStorage.getItem('userId');
  if (userId) {
    var dashboardLink = document.getElementById('dashboardLink');
    dashboardLink.href = 'dashboard.html?userId=' + userId;
  }
}
function tutorialButton() {
  // Add event listener to the "Sign Out" button
  document.getElementById('tutorialButton').addEventListener('click', function() {
    // Redirect to the tutorial page
    window.location.href = 'tutorials_page.html';
  });
}
function signoutButton() {
  // Add event listener to the "Sign Out" button
  document.getElementById('signOut').addEventListener('click', function() {
    // Clear the username from localStorage
    localStorage.removeItem('newUsername');
    // Redirect to the signup page
    window.location.href = 'signupPage.html';
  });
}

function helpButton() {
  // Add listener to the "Help" button
  document.getElementById('helpButton').addEventListener('click', function() {
    // Redirect to the help page
    window.location.href = 'help_page.html';
  });    
}

function walletsButton() {
  // Add listener to the "Help" button
  document.getElementById('walletsButton').addEventListener('click', function() {
    // Redirect to the help page
    window.location.href = 'wallets.html';
  });    
}

function employeesButton() {
  if (employeesButton) {
    // Add listener to the "Employees" button
  document.getElementById('employeesButton').addEventListener('click', function() {
    // Redirect to the employees page
    window.location.href = 'employee_page.html';
  });   
  }
}


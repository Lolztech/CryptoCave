document.addEventListener('DOMContentLoaded', function() {
  gotodashboard();
});

function gotodashboard() {
  document.getElementById('dashboardLink').addEventListener('click', function() {
    if(localStorage.getItem('companyName')!= null){
      window.location.href = 'tradingF_dash.html';
    }
    else if (localStorage.getItem('userType')==='expert') {
      window.location.href = 'expert_dash.html';
    }
    else {
      window.location.href = 'new_dash.html';
    }
  })
};
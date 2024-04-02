document.addEventListener('DOMContentLoaded', function() {
  displayMarketGraph();
  displayTopCurrencies();
  setupAnalysisButton();
});

function displayMarketGraph() {
  console.log('Displaying market graph...');
}

function displayTopCurrencies() {
  console.log('Displaying top currencies...');
}

// Setup the analysis button based on the user's experience level
function setupAnalysisButton() {
  var userExperienceLevel = localStorage.getItem('userType');
  var analysisButton = document.getElementById('analysisButton');
  if (userExperienceLevel === 'new') {
      analysisButton.textContent = 'View Simple Market Analysis';
  } else if (userExperienceLevel === 'expert') {
      analysisButton.textContent = 'View Advanced Market Analysis';
  }

  // Add click event for displaying analysis content
  analysisButton.addEventListener('click', function() {
      displayMarketAnalysis(userExperienceLevel);
  });
};
  
function displayMarketAnalysis(experienceLevel) {
  // Remove any existing analysis content
  var existingAnalysis = document.getElementById('marketAnalysis');
  if (existingAnalysis) {
      existingAnalysis.remove();
  }

  // Create a new section for the analysis content
  var analysisContent = document.createElement('div');
  analysisContent.id = 'marketAnalysis';
  
  // Add content based on the user's experience level
  if (experienceLevel === 'new') {
      analysisContent.innerHTML = `
          <h3>Simple Market Analysis</h3>
          <p>The cryptocurrency market is volatile and unpredictable. For beginners, it's essential to start with understanding the basics of blockchain technology, how cryptocurrencies work, and the significance of market capitalization. Remember, investing in crypto should be done cautiously.</p>
      `;
  } else if (experienceLevel === 'expert') {
      analysisContent.innerHTML = `
          <h3>Advanced Market Analysis</h3>
          <p>For experienced users, diving deeper into market trends, analyzing price charts, and understanding the impact of global events on cryptocurrency prices is crucial. Utilizing technical analysis and staying informed about regulatory changes can provide an edge in making informed investment decisions.</p>
      `;
  }

  // Append the new section to the body or a specific container on your page
  document.body.appendChild(analysisContent); // Or another container like document.getElementById('containerId').appendChild(analysisContent);
}
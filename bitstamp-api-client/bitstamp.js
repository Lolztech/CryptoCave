const BitstampApi = require('./bitstamp-api-client'); // Adjust path as needed

const bitstampApiClient = new BitstampApi.DefaultApi();

// Example: Make an API request
bitstampApiClient.getSomeData()
  .then(response => {
    console.log('API Response:', response);
  })
  .catch(error => {
    console.error('API Error:', error);
  });

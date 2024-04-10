const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const BitstampApi = require('./bitstamp-api-client'); // Import the Bitstamp API client

// Load environment variables from a .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JavaScript)
app.use(express.static('public'));

// Handle form submission for wallet creation
app.post('/create-wallet', async (req, res) => {
    try {
        const { walletName, bankAccount } = req.body;

        // Perform wallet creation logic here (e.g., store in database)
        // For demonstration, we'll log the wallet details
        console.log('New wallet created:', { walletName, bankAccount });

        // Respond with success message
        res.status(200).send('Wallet created successfully');
    } catch (error) {
        console.error('Error creating wallet:', error);
        res.status(500).send('Failed to create wallet');
    }
});

// Handle cryptocurrency buy request
app.post('/buy-crypto', async (req, res) => {
    try {
        const { walletName, amount, currencyPair } = req.body;

        // Initialize Bitstamp API client
        const bitstampApiClient = new BitstampApi.DefaultApi();

        // Make buy order request to Bitstamp API
        const response = await bitstampApiClient.buyLimitOrder({
            amount: amount,
            currencyPair: currencyPair,
        });

        console.log('Buy order response:', response);

        // Respond with success message
        res.status(200).send('Crypto bought successfully');
    } catch (error) {
        console.error('Error buying crypto:', error);
        res.status(500).send('Failed to buy crypto');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

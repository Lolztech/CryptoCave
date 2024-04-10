document.addEventListener('DOMContentLoaded', async function() {
    // Function to fetch historical market data from Polygon API
    async function fetchMarketData() {
        const apiKey = 'zSA9qXCavCEcftn4yVnWmFpBvydhWKN4'; 
        const ticker = 'X:BCHUSD'; 
        const url = `https://api.polygon.io/v2/aggs/ticker/X:BCHUSD/range/1/day/2024-03-09/2024-04-10?adjusted=true&sort=desc&limit=120&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const results = data.results || []; // Extract 'results' array from response
            return { results, ticker };
        } catch (error) {
            console.error('Error fetching market data:', error);
            return { results: [], ticker };
        }
    }

    // Function to calculate SMA (Simple Moving Average)
    function calculateSMA(prices, windowSize) {
        const smaValues = [];
        for (let i = 0; i < prices.length; i++) {
            if (i >= windowSize - 1) {
                const windowPrices = prices.slice(i - windowSize + 1, i + 1);
                const sma = windowPrices.reduce((sum, price) => sum + price, 0) / windowSize;
                smaValues.push(sma);
            } else {
                smaValues.push(null); // Not enough data points for SMA calculation
            }
        }
        return smaValues;
    }

    // Main function to perform market analysis
    async function analyzeMarket() {
        const { results, ticker } = await fetchMarketData();

        if (results.length === 0) {
            console.log('No market data available.');
            return;
        }

        // Extract timestamps and closing prices from results
        const timestamps = results.map(result => moment(result.t).format('YYYY-MM-DD')); // Parse and format timestamps
        const closingPrices = results.map(result => result.c);

        // Calculate SMA (Simple Moving Average)
        const windowSize = 7; // Adjust this window size as needed
        const smaValues = calculateSMA(closingPrices, windowSize);

        // Plot chart using Chart.js
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timestamps,
                datasets: [
                    {
                        label: `Closing Price (${ticker})`, // Include ticker name in label
                        data: closingPrices,
                        borderColor: 'blue',
                        borderWidth: 1,
                        fill: false
                    },
                    {
                        label: `${windowSize}-day SMA (${ticker})`, // Include ticker name in label
                        data: smaValues,
                        borderColor: 'orange',
                        borderWidth: 1,
                        fill: false
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day',
                            displayFormats: {
                                day: 'MMM D, YYYY' // Format for displaying days
                            }
                        }
                    }
                }
            }
        });
    }

    // Call the main function to perform market analysis
    analyzeMarket();
});


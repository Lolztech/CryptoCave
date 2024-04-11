import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';
import moment from 'moment';
import _ from 'lodash'; 
import './MarketAnalysis.css';

const MarketAnalysis = () => {
  useEffect(() => {
    const fetchMarketData = async () => {
      const apiKey = 'zSA9qXCavCEcftn4yVnWmFpBvydhWKN4';
      const ticker = 'X:BCHUSD';
      const url = `https://api.polygon.io/v2/aggs/ticker/X:BCHUSD/range/1/day/2024-03-09/2024-04-10?adjusted=true&sort=desc&limit=120&apiKey=zSA9qXCavCEcftn4yVnWmFpBvydhWKN4}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const results = data.results || [];
        return { results, ticker };
      } catch (error) {
        console.error('Error fetching market data:', error);
        return { results: [], ticker };
      }
    };

    const calculateSMA = (prices, windowSize) => {
      return prices.map((price, index, arr) => {
        if (index < windowSize - 1) return null;
        const windowPrices = arr.slice(index - windowSize + 1, index + 1);
        return _.sum(windowPrices) / windowSize;
      });
    };

    const analyzeMarket = async () => {
      const { results, ticker } = await fetchMarketData();
      if (results.length === 0) {
        console.log('No market data available.');
        return;
      }
      const timestamps = results.map(result => moment(result.t).format('YYYY-MM-DD'));
      const closingPrices = results.map(result => result.c);
      const windowSize = 7;
      const smaValues = calculateSMA(closingPrices, windowSize);

      const ctx = document.getElementById('chart').getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: timestamps,
          datasets: [
            {
              label: `Closing Price (${ticker})`,
              data: closingPrices,
              borderColor: 'blue',
              borderWidth: 1,
              fill: false,
            },
            {
              label: `${windowSize}-day SMA (${ticker})`,
              data: smaValues,
              borderColor: 'orange',
              borderWidth: 1,
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'MMM D, YYYY',
                },
              },
            },
          },
        },
      });
    };

    analyzeMarket();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container">
      <h1>Market Analysis</h1>
      <canvas id="chart"></canvas>
      <div id="analysisResult"></div>
    </div>
  );
};

export default MarketAnalysis;

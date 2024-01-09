import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

const IEX_CLOUD_API_KEY = 'pk_6e7539a748a743c8a120ae60dc193e70';
const Dashboard = () => {
  const [ipoData, setIpoData] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch Upcoming IPOs
    axios.get(`https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${IEX_CLOUD_API_KEY}`)
      .then(response => setIpoData(response.data))
      .catch(error => setError('Error fetching IPO data'));

    // Fetch Currency Exchange Rates
    axios.get(`https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${IEX_CLOUD_API_KEY}`)
      .then(response => setCurrencyRates(response.data))
      .catch(error => setError('Error fetching currency rates'));
  }, []);

  return (
      <div className="container">
        <div className="header">
          <h1>Welcome to the IPO and Currency Dashboard!</h1>
        </div>
  
        {error && <p className="error-message">{error}</p>}
  
        <div className="card upcoming-ipo">
          <h2 className="section-title">Upcoming IPO Calendar</h2>
          <ul className="upcoming-ipo-list">
            {ipoData.map(ipo => (
              <li key={ipo.symbol}>{ipo.symbol} - {ipo.companyName}</li>
            ))}
          </ul>
        </div>
  
        <div className="card currency-rates">
          <h2 className="section-title">Currency Exchange Rates</h2>
          <ul className="currency-rates-list">
            {Object.entries(currencyRates).map(([symbol, rate]) => (
              <li key={symbol}>{symbol}: {rate.rate}</li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;

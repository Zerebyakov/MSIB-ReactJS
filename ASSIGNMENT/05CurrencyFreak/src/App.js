import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CurrencyRates() {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get('https://api.currencyfreaks.com/latest', {
          params: { apikey: '612a780733534399bae6b20b9d8dfb93' },
        });

        const displayedCurrencies = ['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP'];
        const fetchedRates = response.data.rates;
        const filteredRates = displayedCurrencies.map((currency) => {
          const rate = parseFloat(fetchedRates[currency]);
          return {
            currency,
            exchangeRate: rate,
            weBuy: (rate * 1.05).toFixed(4), // 5% lebih besar
            weSell: (rate * 0.95).toFixed(4), // 5% lebih kecil
          };
        });

        setRates(filteredRates);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch currency data');
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="container mt-5">
      <h5 className="text-center mb-4">Currency Exchange Rates (Relative to 1 USD)</h5>
      <p className='text-center'>Aplikasi ini menggunakan API dari https://currencyfreaks.com/</p>
      {error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Currency</th>
                <th>We Buy</th>
                <th>Exchange Rate</th>
                <th>We Sell</th>
              </tr>
            </thead>
            <tbody>
              {rates.map(({ currency, weBuy, exchangeRate, weSell }) => (
                <tr key={currency}>
                  <td>{currency}</td>
                  <td>{weBuy}</td>
                  <td>{exchangeRate.toFixed(4)}</td>
                  <td>{weSell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CurrencyRates;


//Tugas ASSIGNMENT 05 

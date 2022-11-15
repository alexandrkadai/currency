import React, { useState, useEffect, useRef } from 'react';
import Header from './Components/Header/header.component';
import Main from './Components/Main/main.component';
import './App.css';

function App() {
  const [currencyRate, setCurrencyRate] = useState({});
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [curencies, setCurrencies] = useState();
  const BaseUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  const ratesRef = useRef({});

  let curencyName;
  let curencyValue;

  useEffect(() => {
    fetch(BaseUrl, {
      method: 'GET',
    })
      .then((response) => {
        setCurrencies(response.json());
      })

      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  useEffect(() => {
    ratesRef = currencies;
    if (ratesRef.isArray()) {
      curencyName = ratesRef.map((a) => a.cc);
      curencyValue = ratesRef.map((a) => a.rate);
    }

    console.log(curencies);
  }, [curencies]);

  // console.log(ratesRef);
  // console.log(curencyName);
  // console.log(curencyValue);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

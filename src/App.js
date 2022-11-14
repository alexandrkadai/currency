import React, { useState, useEffect, useRef } from 'react';
import Header from './Components/Header/header.component';
import Main from './Components/Main/main.component';
import './App.css';

function App() {
  const [currencyRate, setCurrencyRate] = useState({});
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [curencies, setCurrencies] = useState({});
  const BaseUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  const ratesRef = useRef({});

  let curencyName;
  let curencyValue;

  useEffect(() => {
    fetch(BaseUrl, {
      method: 'GET',
    }).then((response) => {
      response
        .json()
        .then((result) => {
          ratesRef.current = result;
        })
        .catch((error) => console.log('error', error));
    });
  }, []);

  // useEffect(() => {
  //   curencyName = ratesRef.map((a) => a.ccy);
  //   curencyValue = ratesRef.map((a) => a.sale);
  // }, [ratesRef]);

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

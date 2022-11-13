import React, { useState, useEffect } from 'react';
import Header from './Components/Header/header.component';
import Main from './Components/Main/main.component';
import './App.css';

function App() {
  const [currencyRate, setCurrencyRate] = useState();
  const [usdCurrency, setUsdCurrency] = useState(null);
  const [eurCurency, setEurCurrency] = useState();
  const [btcCurency, setBtcCurrency] = useState([]);
  const [trig, setTrig] = useState(null);
  let usdRate, euroRate, btcRate;

  const BaseUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  useEffect(() => {
    fetch(BaseUrl, {
      method: 'GET',
    }).then((response) => {
      response
        .json()
        .then((result) => {
          setBtcCurrency(result);
        })
        .catch((error) => console.log('error', error));
    });
  }, []);

  // const rates = [usdCurrency, eurCurency, btcCurency].forEach((item) => {
  //   currency: {
  //     item.sale;
  //   }
  // });

  // const some = [
  //   usdCurrency.sale,
  //   usdCurrency.ccy,
  //   eurCurency.sale,
  //   eurCurency.ccy,
  //   btcCurency.sale,
  //   btcCurency.ccy,
  // // ];
  useEffect(() => {
    console.log(btcCurency);
  }, [btcCurency]);

  return (
    <div className="App">
      {btcCurency ? <Header props={btcCurency} /> : <span>loading</span>}

      <Main />
    </div>
  );
}

export default App;

const getCurrency = () => {
  fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', {
    method: 'GET',
  })
    .then((response) => {
      response.json().then((result) => {
        setUsdCurrency(parseFloat(result[0].buy).toFixed(2));
        setEurCurrency(parseFloat(result[1].buy).toFixed(2));
        setBtcCurrency(parseFloat(result[2].buy).toFixed(2));
      });
    })
    .then(setTrig(true));
};

// useEffect(() => {
//   getCurrency();
// }, [setCurrencyRate]);

//
// <li>{usdCurency} $</li>
// <li>{eurCurency} ¢</li>
// <li>{parseFloat(btcCurency * usdCurency).toFixed(2)} BTC</li>

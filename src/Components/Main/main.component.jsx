import React, { useState } from 'react';
import './main.styles.scss';

const Main = () => {
  return (
    <section className="main-container">
      <form className="currency-form__first">
        <label htmlFor="currency">Enter Currency</label>
        <input type="number" />
        <select name="currency" id="currency_first">
          <option value="UAH">UAH</option>
          <option value="Usd">USD</option>
          <option value="Eur">EUR</option>
          <option value="Btc">BTC</option>
        </select>
      </form>

      <form className="currency-form__second">
        <label htmlFor="currency">Select Exchange Currency</label>
        <input type="number" />
        <select name="currency" id="currency_second">
          <option value="UAH">UAH</option>
          <option value="Usd">USD</option>
          <option value="Eur">EUR</option>
          <option value="Btc">BTC</option>
        </select>
      </form>
    </section>
  );
};

export default Main;

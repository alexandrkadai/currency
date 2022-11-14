import React, { useState } from 'react';
import './main.styles.scss';

const Main = () => {
  return (
    <section className="main-container">
      <div className="form-container">
        <form className="currency-form__first">
          <label htmlFor="currency">Currency I have</label>
          <input type="number" className="currency-form__input" />
          <select name="currency" id="currency_first">
            <option value="UAH">UAH</option>
            <option value="Usd">USD</option>
            <option value="Eur">EUR</option>
            <option value="Btc">BTC</option>
          </select>
        </form>
        <div className="separator">
          <span>&#8594;</span>
          <span>&#8592;</span>
        </div>
        <form className="currency-form__second">
          <label htmlFor="currency">Currency I want to Buy</label>
          <input type="number" className="currency-form__input" />
          <select name="currency" id="currency_second">
            <option value="UAH">UAH</option>
            <option value="Usd">USD</option>
            <option value="Eur">EUR</option>
            <option value="Btc">BTC</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Main;

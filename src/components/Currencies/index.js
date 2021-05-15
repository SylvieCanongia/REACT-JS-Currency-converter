import React from 'react';

import PropTypes from 'prop-types';

import './currencies.scss';
import Currency from './Currency';

const Currencies = ({ currencies, handleClickOnCurrency }) => (
  <>
    <section className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {currencies.map((currency) => (
          <Currency
            name={currency.currencyName}
            handleClickOnCurrency={handleClickOnCurrency}
            key={currency.currencyName}
          />
        ))}
      </ul>
    </section>
  </>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      currencyName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  // parameter : newCurrencyName
  handleClickOnCurrency: PropTypes.func.isRequired,
};

export default Currencies;

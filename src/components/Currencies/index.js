import React from 'react';

import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currencies }) => (
  <>
    <section className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {currencies.map((currency) => (
          <li className="currencies__list__item" key={currency.currencyName}>{currency.currencyName}</li>
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
};

export default Currencies;

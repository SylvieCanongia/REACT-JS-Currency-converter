import React from 'react';

import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currenciesList }) => (
  <>
    <section className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <ul className="currencies__list">
        {currenciesList.map(({ currencyName }) => (
          <li className="currencies__list__item" key={currencyName}><a href="">{currencyName}</a></li>
        ))}
      </ul>
    </section>
  </>
);

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      currencyName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;

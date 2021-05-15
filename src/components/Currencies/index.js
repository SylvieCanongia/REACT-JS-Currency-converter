import React from 'react';

import PropTypes from 'prop-types';

import './currencies.scss';
import Currency from './Currency';

const Currencies = ({
  currencies,
  handleClickOnCurrency,
  search,
  setSearch,
}) => (
  <>
    <section className="currencies">
      <h2 className="currencies__title">Currencies</h2>
      <input
        type="text"
        className="currencies__search"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />
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
  search: PropTypes.string.isRequired,
  //  parameter : newValue of the input
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;

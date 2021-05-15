import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, handleClickOnCurrency }) => (
  <li
    className="currencies__list__item"
    onClick={() => {
      handleClickOnCurrency(name);
    }}
  >
    {name}
  </li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  // parameter : newCurrencyName
  handleClickOnCurrency: PropTypes.func.isRequired,
};

export default Currency;

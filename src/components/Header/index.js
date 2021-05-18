import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount, setBaseAmount }) => (
  <>
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <div className="header__input">
        <input
          type="text"
          className="header__input__amount"
          placeholder="Enter your amount"
          value={baseAmount}
          onChange={(event) => {
            setBaseAmount(Number(event.currentTarget.value));
          }}
        />
        <p className="header__input__currency">euro(s)</p>
      </div>
    </header>
  </>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  // parameter : newValue
  setBaseAmount: PropTypes.func.isRequired,
};

export default Header;

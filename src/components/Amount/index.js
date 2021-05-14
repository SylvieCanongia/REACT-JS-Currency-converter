import React from 'react';
import PropTypes from 'prop-types';

import './amount.scss';

const Amount = ( {currency} ) => (
  <>
    <section className="amount">
      <p className="amount__display">1.55</p>
      <p className="amount__currency">{currency}</p>
    </section>
  </>
);

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default Amount;

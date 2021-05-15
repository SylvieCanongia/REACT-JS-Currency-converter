import React from 'react';
import PropTypes from 'prop-types';

import './amount.scss';

const Amount = ({ currency, value }) => (
  <>
    <section className="amount">
      <p className="amount__display">{value}</p>
      <p className="amount__currency">{currency}</p>
    </section>
  </>
);

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Amount;

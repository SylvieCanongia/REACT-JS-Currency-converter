import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({ isOpen, manageClick }) => {
  let cssClass = 'custom__button';
  if (isOpen) {
    cssClass += ' custom__button--open';
  }
  return (
    <button
      type="button"
      className={cssClass}
      onClick={manageClick}
    >
      =
    </button>
  );
};

CustomButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};

export default CustomButton;

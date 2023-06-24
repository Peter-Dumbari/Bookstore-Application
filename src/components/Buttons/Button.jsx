import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Buttons({
  title, onclick, disabled, newStyle,
}) {
  return (
    <button
      type="button"
      onClick={onclick}
      disabled={disabled}
      className={`button-component ${newStyle}`}
    >
      {title}
    </button>
  );
}
Buttons.propTypes = {
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  newStyle: PropTypes.string.isRequired,
};

export default Buttons;

import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ title, onclick }) {
  return (
    <button type="button" onClick={onclick} className="button-component">
      {title}
    </button>
  );
}
Buttons.propTypes = {
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Buttons;

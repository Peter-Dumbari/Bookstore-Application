import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ title }) {
  return (
    <button type="button" className="button-component">
      {title}
    </button>
  );
}
Buttons.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Buttons;

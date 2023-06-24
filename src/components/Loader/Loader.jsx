import React from 'react';
import { ReactComponent as LoaderSpinner } from './spinner.svg';
import './Loader.css';

function Loader() {
  return (
    <div className="loader">
      <div className="loading_container">
        <LoaderSpinner />
      </div>
    </div>
  );
}

export default Loader;

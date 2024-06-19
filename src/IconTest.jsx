import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const IconTest = () => (
  <div>
    <FontAwesomeIcon icon={faSun} />
    <FontAwesomeIcon icon={faMoon} />
  </div>
);

export default IconTest;
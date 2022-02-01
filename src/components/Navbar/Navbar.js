import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <p><b>The World</b></p>
      <p className={classes.shrink}>Continents COVID Cases</p>
      <FontAwesomeIcon icon={faMicrophone} />
      <FontAwesomeIcon icon={faCog} />
    </nav>
  );
}

export default Navbar;

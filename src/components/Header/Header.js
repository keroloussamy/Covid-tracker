import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import classes from './Header.module.css';

const Header = () => {
  const continents = useSelector((state) => state.continentsReducer);
  const [totalCases, setTotalCases] = useState(0);
  useEffect(() => {
    const totalNumber = continents.reduce((prev, curr) => prev + curr.cases, 0);
    setTotalCases(totalNumber);
  }, [continents]);

  return (
    <header>
      <div className={classes.header}>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/16/29/map-307442_960_720.png" alt="world img" className={classes.image} />
        <div className={classes.textContent}>
          <h2>World Cases</h2>
          <p>{totalCases}</p>
        </div>
      </div>
      <div className={classes.breaker}>
        CASES BY CONTINENTS
      </div>
    </header>
  );
};

export default Header;

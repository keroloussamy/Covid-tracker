import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Continent.module.css';

/* eslint-disable react/prop-types */
const Continent = ({ continentData }) => {
  const { cases, continent } = continentData;

  const continentPics = {
    'North America':
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/968afb90-ac92-44de-a6d9-bbd220b7fa64/dbjftku-ea7e50b6-880b-4384-bac8-f2887927100d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2OGFmYjkwLWFjOTItNDRkZS1hNmQ5LWJiZDIyMGI3ZmE2NFwvZGJqZnRrdS1lYTdlNTBiNi04ODBiLTQzODQtYmFjOC1mMjg4NzkyNzEwMGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hAbGE-0_k5QYHIfGcG9IyNbYcXd5gx1uXGnj-FFIJHU',
    Asia: 'https://www.wecinternational.org/admin/resources/asia-home.png',
    'South America':
      'https://www.orchidproject.org/wp-content/uploads/2019/03/saoutl.png',
    Europe: 'https://www.pngkit.com/png/full/390-3903931_created-with-raphal-europe-map-white-png.png',
    Africa: 'https://www.pngplay.com/wp-content/uploads/6/Africa-White-Map-Transparent-Background.png',
    'Australia-Oceania': 'https://www.pngkit.com/png/full/76-765568_bp-oil-spill-in-great-australian-bight-would.png',
  };

  return (
    <div className={classes.continent}>
      <FontAwesomeIcon icon={faArrowCircleRight} className={classes.icon} />
      <div className={classes.container}>
        <img src={continentPics[continent]} alt="continent pic" className={classes.img} />
        <div>
          <h3>{continent}</h3>
          <p>{`Cases : ${cases}`}</p>
        </div>
      </div>
    </div>
  );
};

Continent.protoTypes = {
  continentData: PropTypes.shape({
    cases: PropTypes.number.isRequired,
    continent: PropTypes.string.isRequired,
    countries: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Continent;

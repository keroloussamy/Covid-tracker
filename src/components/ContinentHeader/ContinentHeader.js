import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import continentPics from '../../api/continentsImagesDate';
import { continentThunk } from '../../redux/thunk/continentsThunk';
import classes from './ContinentHeader.module.css';

const ContinentHeader = () => {
  const { continentName } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(continentThunk(continentName));
  }, []);

  const { cases, continent } = useSelector((state) => state.continentReducer);
  return (
    <header>
      <div className={classes.header}>
        <img
          src={continentPics[continent]}
          alt="continent img"
          className={classes.image}
        />
        <div className={classes.textContent}>
          <h2>{continent}</h2>
          <p>{cases}</p>
        </div>
      </div>
      <div className={classes.breaker}>{`STATUS OF ${continent?.toUpperCase()}'S COUNTRIES`}</div>
    </header>
  );
};

export default ContinentHeader;

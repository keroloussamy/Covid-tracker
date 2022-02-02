import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { continentsThunk } from '../../redux/thunk/continentsThunk';
import Continent from '../Continent/Continent';

const Continents = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(continentsThunk());
  }, []);

  const continents = useSelector((state) => state.continentsReducer);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {continents.map((continent) => (
        <Continent key={continent.continent} continentData={continent} />
      ))}
    </div>
  );
};

export default Continents;

import React from 'react';
import { useSelector } from 'react-redux';
import Continent from '../Continent/Continent';

const Continents = () => {
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

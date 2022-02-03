import countriesReducer from '../../redux/reducers/countriesReducer';
import { continentsReducer, continentReducer } from '../../redux/reducers/continentsReducer';
import { GET_CONTINENT, GET_CONTINENTS } from '../../redux/actions/continentsAction';
import { GET_COUNTRIES } from '../../redux/actions/countriesAction';

describe('my Reducers', () => {
  test('continentsReducer', () => {
    expect(continentsReducer([], { type: GET_CONTINENTS, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });

  test('continentReducer', () => {
    expect(continentReducer({}, { type: GET_CONTINENT, payload: { dat: 1 } })).toEqual({ dat: 1 });
  });

  test('countriesReducer', () => {
    expect(countriesReducer([], { type: GET_COUNTRIES, payload: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
});

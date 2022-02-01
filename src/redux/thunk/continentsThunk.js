import getContinentsAPI from '../../api/continentsAPI';
import getContinentsAction from '../actions/continentsAction';

const continentsThunk = () => async (dispatch) => {
  const continents = await getContinentsAPI();
  const validContinents = [];
  continents.forEach((continent) => {
    validContinents.push({
      cases: continent.cases,
      continent: continent.continent,
      countries: continent.countries,
    });
  });
  dispatch(getContinentsAction(validContinents));
};

export default continentsThunk;

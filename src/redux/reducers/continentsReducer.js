import { GET_CONTINENTS } from '../actions/continentsAction';

const continentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return action.payload;
    default:
      return state;
  }
};

export default continentsReducer;

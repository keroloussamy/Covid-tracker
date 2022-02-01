import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import continentsReducer from './reducers/continentsReducer';

const reducer = combineReducers({
  continentsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

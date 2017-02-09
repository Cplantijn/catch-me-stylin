import { combineReducers } from 'redux';
import scenarios from './scenarios';
import user from './user';
import allUsers from './allUsers';

const rootReducer = combineReducers({
  scenarios,
  user,
  allUsers
});

export default rootReducer;

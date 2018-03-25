import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers ({
  users: UserReducer,
  activeUser: ActiveUserReducer,
  form: formReducer
});

export default allReducers;

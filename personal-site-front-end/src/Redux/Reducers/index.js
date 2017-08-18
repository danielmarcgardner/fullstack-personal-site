import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { user } from './UserReducer';

const blogApp = combineReducers({
  user,
  form: formReducer,
});

export default blogApp;

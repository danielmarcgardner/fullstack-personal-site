import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { user } from './UserReducer';
import { blogs } from './BlogReducer';

const blogApp = combineReducers({
  user,
  blogs,
  form: formReducer,
});

export default blogApp;

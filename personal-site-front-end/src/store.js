import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Api from './Redux/Utils/Api';
import blogApp from './Redux/Reducers';

const store = createStore(
  blogApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware.withExtraArgument({ Api }),
  ),
);

export default store;

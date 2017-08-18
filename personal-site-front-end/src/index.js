import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'),
);
/* istanbul ignore next */
if (module.hot) {
  module.hot.accept();
}

/* istanbul ignore next */
registerServiceWorker();

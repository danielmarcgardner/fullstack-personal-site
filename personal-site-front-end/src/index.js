import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <Provider>
  <App />
  // </Provider>
  ,
  document.getElementById('root'),
);
/* istanbul ignore next */
registerServiceWorker();

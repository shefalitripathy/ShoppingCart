
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

ReactDOM.render(
	<Provider store={store}>
	    <App />
	 </Provider>,			 
  document.getElementById('root'));
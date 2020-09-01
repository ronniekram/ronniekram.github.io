import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers/index'

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

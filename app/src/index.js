import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {reducer} from './reducer/index.js'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  type: 'error',
  transition: transitions.SCALE
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {appState} from "./app/store";
import {CoinBoard} from "./features/coinBoard/coinBoard";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={appState} >
        <CoinBoard />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

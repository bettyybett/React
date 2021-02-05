import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import configureStore, { history } from "./configureStore";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
const store = configureStore(/* provide initial state if any */);
ReactDOM.render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  //</React.StrictMode>
  ,
  document.getElementById('root')
);

reportWebVitals();

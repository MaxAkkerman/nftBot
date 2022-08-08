import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {reduxStore} from "./lib/redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

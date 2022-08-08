import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {reduxStore} from "./lib/redux";
import {Provider} from "react-redux";
import {getLoginToken} from "./network/requests";
import {webSocket} from "./webSocket/webSocket";

async function connectTo(){
    const res = await getLoginToken().then(async()=>await webSocket())
    console.log("in index ",res)
    // async function onWebSocket() {
    //   await webSocket()
    // }
    // onWebSocket().then(res=>console.log("onWebSocket", res))
}

connectTo()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

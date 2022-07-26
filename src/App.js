import './App.css';
import Header from "./components/Header/Header";
import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {getLoginToken, getMe} from "./network/requests";
import Loader from "./components/Loader/Loader";
import {AppEnter} from "./components/AppEnter/AppEnter";
import {GetMyNfts} from "./components/GetMyNfts/GetMyNfts";
import {webSocket} from "./webSocket/webSocket";
import {useSelector} from "react-redux";

function App() {
  

  const pubkey = useSelector((state) => state.appReducer.pubkey);
  const address = useSelector((state) => state.appReducer.address);

  useEffect(()=>{
    // await getUserTokens()
 
      // const client = new WebSocket("ws://http-notifs.xyz");
      // const socket = new W3CWebSocket('ws://http-notifs.xyz');

      // client.onopen = ()=>{
      //   console.log('Connected webSocket');
        //
        // client.emit('events', { test: 'test' });
        // client.emit('identity', 0, response =>
        //   console.log('Identity webSocket:', response),
        // );
      // };
      // client.on('events', function(data) {
      //   console.log('event webSocket', data);
      // });
      // client.on('exception', function(data) {
      //   console.log('event webSocket', data);
      // });
      // client.onclose = ()=> {
      //   console.log('Disconnected webSocket');
      // }
    
    webSocket()
  },[])
  

    

  
  
  return (
    
    <div className="App">
      <Header/>

      <AppEnter/>

      <>
        {pubkey ? <div
          id="nav-connect-wallet"
          // className="btn wallet-btn"
          variant={"outlined"}
        >
          user address from socket: {address}
        </div> : null}
        {address ? <div
          id="nav-connect-wallet"
          // className="btn wallet-btn"
          variant={"outlined"}
        >
          user pubkey from socket: {pubkey}
        </div> : null}
      </>
      
    </div>
  );
}

export default App;

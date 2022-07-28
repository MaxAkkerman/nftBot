import {baseUrl} from "../network/constants";
import { reduxStore } from '../lib/redux';
import {setAuthUserData, setWebSocketStatus} from "../redux/store/actions/market";

const { io } = require("socket.io-client");

export async function webSocket(){
  const socket = io(`${baseUrl}`,{
    withCredentials: true,
  });
  socket.on('connect', function() {
    console.log('Connected');
    reduxStore.dispatch(
      setWebSocketStatus(true),
    );
    socket.emit('events', { test: 'test' });
    socket.emit('identity', 0, response =>
      console.log('Identity:', response),
    );
  });
  socket.on('auth', function(data) {
    console.log('auth', data);
    reduxStore.dispatch(
      setAuthUserData(data),
    );
  });
  socket.on('nft-transfer', function(data) {
    console.log('nft-transfer', data);
  });
  socket.on('money-transfer', function(data) {
    console.log('money-transfer', data);
  });
  socket.on('trade-update', function(data) {
    console.log('trade-update', data);
    let json = JSON.stringify([data])
    let trades = JSON.parse(localStorage.getItem("trades"))
    if(!trades){
      localStorage.setItem("trades", json)
    }else{
      trades.push(data);
      let json = JSON.stringify([data])
      localStorage.setItem("trades", json)
    }
    
   
  });
  socket.on('disconnect', function() {
    console.log('Disconnected');
  });
}
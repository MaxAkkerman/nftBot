import {baseUrl} from "../network/constants";
import { reduxStore } from '../lib/redux';
import {setAuthUserData, setWebSocketStatus, tradeUpdate} from "../redux/store/actions/market";
import {useSelector} from "react-redux";
// import {getLoginToken} from "../network/requests";

const { io } = require("socket.io-client");

export async function webSocket(){
  const socket = io(`${baseUrl}`,{
    withCredentials: true,
  });
  socket.on('connect', async function() {
    console.log('Connected');
    reduxStore.dispatch(
      setWebSocketStatus(true),
    );
    // await getLoginToken()
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
    let address = useSelector(state=>state.appReducer.address)
    reduxStore.dispatch(
      tradeUpdate({data, address}),
    );
    // let json = JSON.stringify([data])
    // let trades = JSON.parse(localStorage.getItem("trades"))
    // if(!trades){
    //   localStorage.setItem("trades", json)
    // }else{
    //   trades.push(data);
    //   let json = JSON.stringify([data])
    //   localStorage.setItem("trades", json)
    // }
    
   
  });
  socket.on('disconnect', function() {
    console.log('Disconnected');
  });
}
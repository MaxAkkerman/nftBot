import {baseUrl} from "../network/constants";
// import { w3cwebsocket as W3CWebSocket } from "websocket";



export async function webSocket(){
  const client = new WebSocket("ws://http-notifs.xyz");
  // const socket = new W3CWebSocket('ws://http-notifs.xyz');

  client.onopen(()=>{
    console.log('Connected webSocket');
    //
    // client.emit('events', { test: 'test' });
    // client.emit('identity', 0, response =>
    //   console.log('Identity webSocket:', response),
    // );
  });
  // client.on('events', function(data) {
  //   console.log('event webSocket', data);
  // });
  // client.on('exception', function(data) {
  //   console.log('event webSocket', data);
  // });
  client.onclose(()=> {
    console.log('Disconnected webSocket');
  });
}
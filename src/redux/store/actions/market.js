import {
  SET_WEBSOCKET_STATUS,
  SET_USER_DATA
} from "./types";

export function setWebSocketStatus(status) {
console.log("setWebSocketStatus",status)
  return {
    type: SET_WEBSOCKET_STATUS,
    payload:status
  };
}

export function setAuthUserData(user_data) {
  console.log("setAuthUserData",user_data)
  return {
    type: SET_USER_DATA,
    payload:user_data
  };
}








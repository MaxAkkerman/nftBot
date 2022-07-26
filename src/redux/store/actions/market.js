import {
  SET_WEBSOCKET_STATUS,
  SET_USER_DATA,
  GET_USER_DATA_FETCH_ACTION,
  GET_USER_DATA_LOADING_ACTION,
  GET_USER_DATA_FAILED,
  GET_USER_DATA_SUCCESS,
  REQUEST_USER_NFT_ITEM, REQUEST_USER_NFT_ITEM_LOADING, REQUEST_USER_NFT_ITEM_SUCCESS, REQUEST_USER_NFT_ITEM_FAILED
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
export function getUserDataAction() {
  console.log("requestUserDataAction",)
  return {
    type: GET_USER_DATA_FETCH_ACTION,
  };
}
export function getUserDataLoadingAction() {
  console.log("getUserDataLoadingAction")
  return {
    type: GET_USER_DATA_LOADING_ACTION,
  };
}
export function getUserDataSuccess(user_data) {
  console.log("getUserDataSuccess",user_data)
  return {
    type: GET_USER_DATA_SUCCESS,
    payload:user_data
  };
}
export function getUserDataFailedAction(e) {
  console.log("getUserDataFailedAction",e)
  return {
    type: GET_USER_DATA_FAILED,
  };
}



export function requestUserNftItem(params) {
  console.log("requestUserDataAction",params)
  return {
    type: REQUEST_USER_NFT_ITEM,
    params
  };
}
export function requestUserNftItemLoading() {
  console.log("getUserDataLoadingAction")
  return {
    type: REQUEST_USER_NFT_ITEM_LOADING,
  };
}
export function requestUserNftItemSuccess(user_data) {
  console.log("getUserDataSuccess",user_data)
  return {
    type: REQUEST_USER_NFT_ITEM_SUCCESS,
    payload:user_data
  };
}
export function requestUserNftItemFailed(e) {
  console.log("getUserDataFailedAction",e)
  return {
    type: REQUEST_USER_NFT_ITEM_FAILED,
  };
}







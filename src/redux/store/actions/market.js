import {
  SET_WEBSOCKET_STATUS,
  SET_USER_DATA,
  GET_USER_DATA_FETCH_ACTION,
  GET_USER_DATA_LOADING_ACTION,
  GET_USER_DATA_FAILED,
  GET_USER_DATA_SUCCESS,
  REQUEST_USER_NFT_ITEM,
  REQUEST_USER_NFT_ITEM_LOADING,
  REQUEST_USER_NFT_ITEM_SUCCESS,
  REQUEST_USER_NFT_ITEM_FAILED,
  SET_CURRENT_NFT,
  DELETE_CURRENT_NFT,
  REQUEST_USER_TRADES,
  REQUEST_USER_TRADES_LOADING,
  REQUEST_USER_TRADES_SUCCESS,
  REQUEST_USER_TRADES_FAILED,
  SET_CURRENT_TRADE,
  DELETE_CURRENT_TRADE,
  TRADE_UPDATE,
  SEARCH_NFT_ITEM_FAILED,
  SEARCH_TRADE_ITEM_REQUEST,
  SEARCH_NFT_ITEM_SUCCESS,
  SEARCH_NFT_ITEM_REQUEST,
  SEARCH_TRADE_ITEM_SUCCESS,
  SEARCH_TRADE_ITEM_FAILED, ADD_USER_TRADE_BY_SEARCH, DELETE_NFT_FROM_ARR,
  OPEN_SNACK,CLOSE_SNACK
} from "./types";

export function setWebSocketStatus(status) {
console.log("setWebSocketStatus",status)
  return {
    type: SET_WEBSOCKET_STATUS,
    payload:status
  };
}
export function tradeUpdate(tradeUpdated) {
  console.log("tradeUpdate",tradeUpdated)
  return {
    type: TRADE_UPDATE,
    payload:tradeUpdated
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


export function deleteNftFromArr(id) {
  console.log("deleteNftFromArr",id)
  return {
    type: DELETE_NFT_FROM_ARR,
    payload:id
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

export function openSnack(msg) {
  console.log("openSnack",msg)
  return {
    type: OPEN_SNACK,
    payload:msg
  };
}
export function closeSnack() {
  console.log("closeSnack")
  return {
    type: CLOSE_SNACK,
  };
}

export function setCurrentNft(nft) {
  console.log("setCurrentNft",nft)
  return {
    type: SET_CURRENT_NFT,
    payload:nft
  };
}
export function deleteCurrentNft() {
  console.log("deleteCurrentNft")
  return {
    type: DELETE_CURRENT_NFT,
  };
}
export function setCurrentTrade(trade) {
  console.log("setCurrentTrade",trade)
  return {
    type: SET_CURRENT_TRADE,
    payload:trade
  };
}
export function deleteCurrentTrade() {
  console.log("deleteCurrentTrade")
  return {
    type: DELETE_CURRENT_TRADE,
  };
}
export function addTradeBySearch(data) {
  console.log("addTradeBySearch",data)
  return {
    type: ADD_USER_TRADE_BY_SEARCH,
    payload:data
  };
}
export function searchNftRequest(address) {
  console.log("searchNft",address)
  return {
    type: SEARCH_NFT_ITEM_REQUEST,
    address
  };
}
export function searchNftSuccess(data) {
  console.log("searchNft",data)
  return {
    type: SEARCH_NFT_ITEM_SUCCESS,
    payload:data
  };
}
export function searchNftFailed(e) {
  console.log("searchNftFailed")
  return {
    type: SEARCH_NFT_ITEM_FAILED,
    payload:e
  };
}
export function searchTradeRequest(traidID,address) {
  console.log("searchTrade")
  return {
    type: SEARCH_TRADE_ITEM_REQUEST,
    payload:{traidID,address}
  };
}
export function searchTradeSuccess(data) {
  console.log("searchTradeSuccess",data)
  return {
    type: SEARCH_TRADE_ITEM_SUCCESS,
    payload:data
  };
}
export function searchTradeFailed(e) {
  console.log("searchNft")
  return {
    type: SEARCH_TRADE_ITEM_FAILED,
    payload:e
  };
}

export function requestUserTrades() {
  console.log("requestUserTrades")
  return {
    type: REQUEST_USER_TRADES,
  };
}
export function requestUserTradesLoading() {
  console.log("requestUserTradesLoading")
  return {
    type: REQUEST_USER_TRADES_LOADING,
  };
}
export function requestUserTradesSuccess(trades) {
  console.log("requestUserTradesSuccess",trades)
  return {
    type: REQUEST_USER_TRADES_SUCCESS,
    payload:trades
  };
}
export function requestUserTradesFailed(e) {
  console.log("requestUserTradesFailed",e)
  return {
    type: REQUEST_USER_TRADES_FAILED,
  };
}
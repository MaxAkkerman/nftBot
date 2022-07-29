import produce from "immer";
import mockIcon from "../../../images/title.png"
import {
  SET_WEBSOCKET_STATUS,
  SET_USER_DATA,
  GET_USER_DATA_LOADING_ACTION,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILED,
  REQUEST_USER_NFT_ITEM_LOADING,
  REQUEST_USER_NFT_ITEM_SUCCESS,
  REQUEST_USER_NFT_ITEM_FAILED,
  SET_CURRENT_NFT,
  DELETE_CURRENT_NFT,
  REQUEST_USER_TRADES_LOADING,
  REQUEST_USER_TRADES_SUCCESS,
  REQUEST_USER_TRADES_FAILED,
  DELETE_CURRENT_TRADE, SET_CURRENT_TRADE
} from "../actions/types";


const websocket = {
  wssStatus: false,
};

const user_data = {
  pubkey: null,
  address: null,
  fetchMeLoading:false,
  fetchMeError: null,
}
let mock = {name:"NFTtest",collectionName:"NFTCollectionNametest",address:"test address", image:mockIcon}
let arr = []
for(let i = 0; i<7; i++){
  arr.push({...mock,index:i})
}

const user_trades = {
  user_trades: {},
  user_trades_loading: false,
  user_trades_error: false,
}
const user_nfts = {
  user_nfts_array: arr,
  userNftItemLoading:false,
  userNftItemError: null,
}
const currentNft = null
const currentTrade = null
const initialState = {
  ...websocket,
  ...user_data,
  ...user_nfts,
  currentNft,
  currentTrade,
  ...user_trades
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_CURRENT_TRADE:
      return produce(state, (draft) => {
        draft.currentTrade = null;
      });
    case SET_CURRENT_TRADE:
      return produce(state, (draft) => {
        draft.currentTrade = action.payload;
      });
    case DELETE_CURRENT_NFT:
      return produce(state, (draft) => {
        draft.currentNft = null;
      });
    case SET_CURRENT_NFT:
      return produce(state, (draft) => {
        draft.currentNft = action.payload;
      });
    case SET_WEBSOCKET_STATUS:
      return produce(state, (draft) => {
        draft.wssStatus = action.payload;
      });
    case SET_USER_DATA:
      return produce(state, (draft) => {
        draft.pubkey = action.payload.pubkey;
        draft.address = action.payload.address;
      });
    case GET_USER_DATA_LOADING_ACTION:
      return produce(state, (draft) => {
        draft.fetchMeLoading = true;
      });
    case GET_USER_DATA_SUCCESS:
      return produce(state, (draft) => {
        draft.pubkey = action.payload.pubkey;
        draft.address = action.payload.address;
        draft.fetchMeLoading = false;
        draft.fetchMeError = false;
      });
    case GET_USER_DATA_FAILED:
      return produce(state, (draft) => {
        draft.fetchMeLoading = false;
        draft.fetchMeError = true;
      });

    case REQUEST_USER_NFT_ITEM_LOADING:
      return produce(state, (draft) => {
        draft.userNftItemLoading = true;
      });
    case REQUEST_USER_NFT_ITEM_SUCCESS:
      return produce(state, (draft) => {
        draft.user_nfts_array = [...draft.user_nfts_array, action.payload];
        draft.userNftItemLoading = false;
        draft.userNftItemError = false;
      });
    case REQUEST_USER_NFT_ITEM_FAILED:
      return produce(state, (draft) => {
        draft.userNftItemLoading = false;
        draft.userNftItemError = true;
      });


    case REQUEST_USER_TRADES_LOADING:
      return produce(state, (draft) => {
        draft.user_trades_loading = true;
      });
    case REQUEST_USER_TRADES_SUCCESS:
      return produce(state, (draft) => {
        draft.user_trades = action.payload;
        draft.user_trades_loading = false;
        draft.user_trades_error = false;
      });
    case REQUEST_USER_TRADES_FAILED:
      return produce(state, (draft) => {
        draft.user_trades_loading = false;
        draft.user_trades_error = true;
      });

      
      
      
    default:
      return state;
  }
}

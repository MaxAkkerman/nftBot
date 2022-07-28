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
  DELETE_CURRENT_NFT
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


const user_nfts = {
  user_nfts_array: arr,
  userNftItemLoading:false,
  userNftItemError: null,
}
const currentNft = null
const initialState = {
  ...websocket,
  ...user_data,
  ...user_nfts,
  currentNft
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
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
      
      
      
      
      
    default:
      return state;
  }
}

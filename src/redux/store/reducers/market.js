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
  DELETE_CURRENT_TRADE, SET_CURRENT_TRADE,
  SEARCH_NFT_ITEM_FAILED,
  SEARCH_NFT_ITEM_SUCCESS,
  SEARCH_TRADE_ITEM_SUCCESS,
  SEARCH_TRADE_ITEM_FAILED, TRADE_UPDATE, ADD_USER_TRADE_BY_SEARCH, DELETE_NFT_FROM_ARR
} from "../actions/types";


const websocket = {
  wssStatus: false,
};

const user_data = {
  pubkey: null,
  address: null,
  fetchMeLoading: false,
  fetchMeError: null,
}
let mock = {name: "NFTtest", collectionName: "NFTCollectionNametest", address: "test address", image: mockIcon}
let arr = []
for (let i = 0; i < 7; i++) {
  arr.push({...mock, index: i})
}

const user_trades = {
  user_trades: {},
  user_trades_loading: false,
  user_trades_error: false,
}
const user_nfts = {
  user_nfts_array: [],
  userNftItemLoading: false,
  userNftItemError: null,
}

const user_trades_added = null

const searchNftItemE = null
const searchTradeItemE = null

const currentNft = null
const currentTrade = null
const initialState = {
  ...websocket,
  ...user_data,
  ...user_nfts,
  currentNft,
  currentTrade,
  ...user_trades,
  user_trades_added
};

export default function appReducer(state = initialState, action) {
  console.log("state",state)
  switch (action.type) {
    case DELETE_NFT_FROM_ARR:
      console.log("action.payload", action)
      return produce(state, (draft) => {
        let newArr = [...draft.user_nfts_array]
        let filteredArr = newArr.filter(fr => fr.address !== action.payload)
        console.log("newArr", filteredArr)
        draft.user_nfts_array = [...filteredArr];
      });
    case ADD_USER_TRADE_BY_SEARCH:
      console.log("action.payload", action)
      return produce(state, (draft) => {
        draft.user_trades_added = [...draft.user_trades_added, action.payload];
      });
    case SEARCH_NFT_ITEM_SUCCESS:
      console.log("action.payload", action)
      return produce(state, (draft) => {
        draft.user_nfts_array === null ?
          draft.user_nfts_array = [action.payload]
          :
          draft.user_nfts_array = [...draft.user_nfts_array, action.payload];
      });
    case SEARCH_NFT_ITEM_FAILED:
      return produce(state, (draft) => {
        draft.searchNftItemE = action.payload;
      });
    case TRADE_UPDATE:
      return produce(state, (draft) => {
        console.log("TRADE_UPDATE",action.payload)
        if (state.address !== action.payload.data.sellerAddress) {
          draft.user_trades_added === null ?
            draft.user_trades_added = [action.payload.data]
            :
            draft.user_trades_added = [...draft.user_trades_added, action.payload.data]

        } else {
          draft.user_trades === null ?
            draft.user_trades = [action.payload.data]
            :
            draft.user_trades = [...draft.user_trades, action.payload.data]
        
      }


      });
    case SEARCH_TRADE_ITEM_SUCCESS:
      return produce(state, (draft) => {
        console.log("draft.user_trades_added", draft.user_trades_added)
        draft.user_trades_added === null ?
          draft.user_trades_added = [action.payload]
          :
          draft.user_trades_added = [...draft.user_trades_added, action.payload];
      });
    case SEARCH_TRADE_ITEM_FAILED:
      return produce(state, (draft) => {
        draft.searchTradeItemE = action.payload;
      });


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

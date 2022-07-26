import produce from "immer";

import {
  SET_WEBSOCKET_STATUS,
  SET_USER_DATA,
  GET_USER_DATA_LOADING_ACTION,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILED
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

const initialState = {
  ...websocket,
  ...user_data,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}

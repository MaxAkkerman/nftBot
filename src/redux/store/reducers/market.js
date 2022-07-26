import produce from "immer";

import {
  SET_WEBSOCKET_STATUS,
  SET_USER_DATA
} from "../actions/types";


const websocket = {
  wssStatus: false,
};

const user_data = {
  pubkey: null,
  address: null
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

    default:
      return state;
  }
}

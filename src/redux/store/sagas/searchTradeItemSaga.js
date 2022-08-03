import {
	call,
	put,
	takeLatest,
} from "redux-saga/effects";

import {SEARCH_TRADE_ITEM_REQUEST} from "../actions/types";
import {searchTradeFailed, searchTradeSuccess} from "../actions/market";
import {getTradebyTradeID} from "../../../network/requests";
import searchTradeBySid from "../../utils/searchTradeItemUtil";
// import {takeEvery} from "@redux-saga/core/types/effects";

function* asyncSearchTradeItem(params) {
  console.log("asyncSearchTradeItem",params)
	// yield put(getUserDataLoadingAction());
	try {
		const trade = yield call(searchTradeBySid, params.payload);
    console.log("getTradebyTradeID", params.payload.address,trade)
    if(params.payload.address === trade.sellerAddress){
      console.log("Same trade")

      throw {e:"Same trade"}
    }else{
      yield put(searchTradeSuccess(trade));
    }

	} catch (e) {
    console.log("thise",e)
		yield put(searchTradeFailed(e));
	}
}

export default function* searchTRADEbyIDSaga() {
	yield takeLatest(SEARCH_TRADE_ITEM_REQUEST, asyncSearchTradeItem);
}

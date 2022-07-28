import {
	call,
	put,
	takeLatest,
} from "redux-saga/effects";

import {
    requestUserTradesFailed, requestUserTradesLoading, requestUserTradesSuccess,
} from "../actions/market";
import {REQUEST_USER_TRADES} from "../actions/types";
import fetchUserTrades from "../../utils/fetchUserTrades";
// import {takeEvery} from "@redux-saga/core/types/effects";

function* asyncfetchUserTrades() {
	yield put(requestUserTradesLoading());
	try {
		const userTrades = yield call(fetchUserTrades);
    console.log("userTrades", userTrades)
		yield put(requestUserTradesSuccess(userTrades));
	} catch (e) {
		yield put(requestUserTradesFailed(e));
	}
}

export default function* fetchUserTradesSaga() {
	yield takeLatest(REQUEST_USER_TRADES, asyncfetchUserTrades);
}

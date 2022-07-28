import {all} from "redux-saga/effects";
import fetchUserDataSaga from "./fetchUserDataSaga";
import fetchUserNftItemSaga from "./fetchUserNftItemSaga";
import fetchUserTradesSaga from "./fetchUserTrades";

export default function* rootSaga() {
	yield all([
    fetchUserDataSaga(),
    fetchUserNftItemSaga(),
    fetchUserTradesSaga()
	]);
}

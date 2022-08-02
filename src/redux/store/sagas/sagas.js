import {all} from "redux-saga/effects";
import fetchUserDataSaga from "./fetchUserDataSaga";
import fetchUserNftItemSaga from "./fetchUserNftItemSaga";
import fetchUserTradesSaga from "./fetchUserTrades";
import searchNFTbyIDSaga from "./searchNftItemSaga";
import searchTRADEbyIDSaga from "./searchTradeItemSaga";

export default function* rootSaga() {
	yield all([
    fetchUserDataSaga(),
    fetchUserNftItemSaga(),
    fetchUserTradesSaga(),
    searchNFTbyIDSaga(),
    searchTRADEbyIDSaga()
	]);
}

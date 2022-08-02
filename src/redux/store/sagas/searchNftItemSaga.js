import {
	call,
	put,
	takeLatest,
} from "redux-saga/effects";

import {
  searchNftFailed, searchNftSuccess,
} from "../actions/market";
import {SEARCH_NFT_ITEM_REQUEST} from "../actions/types";
import searchNftBySid from "../../utils/searchNftItemUtil";
// import {takeEvery} from "@redux-saga/core/types/effects";

function* asyncSearchNftItem(params) {
  console.log("params",params)
	// yield put(getUserDataLoadingAction());
	try {
		const userData = yield call(searchNftBySid, params.address);
    console.log("searchNftBySid", userData)
		yield put(searchNftSuccess(userData));
	} catch (e) {
		yield put(searchNftFailed(e));
	}
}

export default function* searchNFTbyIDSaga() {
	yield takeLatest(SEARCH_NFT_ITEM_REQUEST, asyncSearchNftItem);
}

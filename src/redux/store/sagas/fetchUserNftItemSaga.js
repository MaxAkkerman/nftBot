import {
	call,
	put,
	takeLatest,
} from "redux-saga/effects";

import fetchUserNfts from "../../utils/fetchUserNftItem";
import {
  requestUserNftItemLoading,
  requestUserNftItemSuccess,
  requestUserNftItemFailed,
} from "../actions/market";
import {REQUEST_USER_NFT_ITEM} from "../actions/types";
// import {takeEvery} from "@redux-saga/core/types/effects";

function* asyncfetchUserNfts() {
  console.log("asyncfetchUserNftItem",)

  yield put(requestUserNftItemLoading());
	try {
		const userData = yield call(fetchUserNfts);
    console.log("userData", userData)
		yield put(requestUserNftItemSuccess(userData));
	} catch (e) {
		yield put(requestUserNftItemFailed(e));
	}
}

export default function* fetchUserNftItemSaga() {
	yield takeLatest(REQUEST_USER_NFT_ITEM, asyncfetchUserNfts);
}

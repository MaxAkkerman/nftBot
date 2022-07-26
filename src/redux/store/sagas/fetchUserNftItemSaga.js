import {
	call,
	put,
	takeLatest,
} from "redux-saga/effects";

import fetchUserNftItem from "../../utils/fetchUserNftItem";
import {
  requestUserNftItemLoading,
  requestUserNftItemSuccess,
  requestUserNftItemFailed,
} from "../actions/market";
import {REQUEST_USER_NFT_ITEM} from "../actions/types";
// import {takeEvery} from "@redux-saga/core/types/effects";

function* asyncfetchUserNftItem(params) {
  console.log("asyncfetchUserNftItemparams",params)

  yield put(requestUserNftItemLoading());
	try {
		const userData = yield call(fetchUserNftItem,params);
    console.log("userData", userData)
		yield put(requestUserNftItemSuccess(userData));
	} catch (e) {
		yield put(requestUserNftItemFailed(e));
	}
}

export default function* fetchUserNftItemSaga() {
	yield takeLatest(REQUEST_USER_NFT_ITEM, asyncfetchUserNftItem);
}

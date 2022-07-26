import {
	call,
	put,
	takeLatest,
} from "redux-saga/effects";

import fetchUserData from "../../utils/fetchUserData";
import {
  getUserDataFailedAction,
  getUserDataLoadingAction,
  getUserDataSuccess,
} from "../actions/market";
import {GET_USER_DATA_FETCH_ACTION} from "../actions/types";
// import {takeEvery} from "@redux-saga/core/types/effects";

function* asyncfetchUserData() {
	yield put(getUserDataLoadingAction());
	try {
		const userData = yield call(fetchUserData);
    console.log("userData", userData)
		yield put(getUserDataSuccess(userData));
	} catch (e) {
		yield put(getUserDataFailedAction(e));
	}
}

export default function* fetchUserDataSaga() {
	yield takeLatest(GET_USER_DATA_FETCH_ACTION, asyncfetchUserData);
}

import {all} from "redux-saga/effects";
import fetchUserDataSaga from "./fetchUserDataSaga";

export default function* rootSaga() {
	yield all([
    fetchUserDataSaga(),
	]);
}

// import {
// 	call,
// 	put,
// 	takeLatest,
// } from "redux-saga/effects";
//
// import fetchNFTs from "../../utils/fetchNFTs";
// import {
// 	setNFtsFailedAction,
// 	setNFtsFetchLoadingAction,
// 	setNFtsSuccess,
// } from "../actions/market";
// import {NFTS_FETCH_REQUESTED} from "../actions/types";
// // import {takeEvery} from "@redux-saga/core/types/effects";
//
// function* asyncfetchNFTs(params: { filters: any; }) {
// 	yield put(setNFtsFetchLoadingAction());
//
// 	try {
//
// 		// @ts-ignore
// 		const nftUrls = yield call(fetchNFTs, params.filters);
//     console.log("nftUrlsnftUrlsnftUrls", nftUrls)
// 		yield put(setNFtsSuccess(nftUrls));
// 	} catch (e) {
// 		yield put(setNFtsFailedAction(e));
// 	}
// }
//
// export default function* fetchNftsSaga() {
// 	// @ts-ignore
// 	yield takeLatest(NFTS_FETCH_REQUESTED, asyncfetchNFTs);
// }

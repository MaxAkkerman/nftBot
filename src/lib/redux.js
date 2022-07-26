import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";

import rootReducer from "../redux/store/reducers/index";
// import rootSaga from "../redux/store/sagas/sagas";
//
// const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: rootReducer,
  // middleware: [sagaMiddleware],
  // devTools: process.env.NODE_ENV === "development",
});

// sagaMiddleware.run(rootSaga);

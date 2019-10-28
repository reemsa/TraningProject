import rootReducer from "../reducers/RootReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from './sagas'
export type AppState = ReturnType<typeof rootReducer>;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga)
export default store

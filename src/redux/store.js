import {applyMiddleware, createStore} from "redux"
import createReduxMiddleware from "redux-saga"
import rootReducer from "./reducer"
import rootSaga from "../saga"
const sagaMiddleware =createReduxMiddleware(rootReducer)
const store = createStore((rootReducer),applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store
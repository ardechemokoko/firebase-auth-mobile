import { createStore,combineReducers,applyMiddleware } from "redux";
import appReducer from "./reducer/AppReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    users : appReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
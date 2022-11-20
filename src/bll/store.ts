import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counter-reducer";
import { setReducer } from "./set-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  setter: setReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;

export type AppStoreType = typeof store;

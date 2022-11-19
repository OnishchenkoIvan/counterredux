import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counter-reducer";
import { setReducer } from "./set-reducer";
// import { loadState, saveState } from "./localstorage-utils";

const rootReducer = combineReducers({
  counter: counterReducer,
  setter: setReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>;

// let preloadedState;
// const persistedTodosString = localStorage.getItem("app-state");
// if (persistedTodosString) {
//   preloadedState = JSON.parse(persistedTodosString);
// }

export const store = legacy_createStore(
  rootReducer,
  // loadState(),
  applyMiddleware(thunk)
);

// store.subscribe(() => {
//   saveState({
//     counter: store.getState().counter,
//   });
// localStorage.setItem("app-state", JSON.stringify(store.getState()));
// localStorage.setItem("value", JSON.stringify(store.getState().counter.value));
// });

// @ts-ignore
window.store = store;

export type AppStoreType = typeof store;

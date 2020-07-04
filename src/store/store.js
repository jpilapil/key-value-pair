import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./combineReducers";

const initialState = {
  // global state
  user: {},
};

const store = createStore(rootReducer, initialState, composeWithDevTools());

export default store;

import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import otherUsers from "./reducers/otherUsers";

export default combineReducers({ currentUser, otherUsers }); // takes an object which has all key value pairs from other objects

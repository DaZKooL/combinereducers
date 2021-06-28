import { combineReducers } from "redux";
import counterReducer from "./counter";
import messagerReducer from "./messager";

export default combineReducers({
  counter: counterReducer,
  messager: messagerReducer,
});



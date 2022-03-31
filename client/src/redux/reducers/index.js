import { combineReducers } from "redux";
import modelReducer from "./modelReducer";

const reducer = combineReducers({
  model: modelReducer,
});

export default reducer;

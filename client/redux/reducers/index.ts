import { combineReducers } from "redux";
import modelReducer from "./modelReducer";
import notificationReducer from "./notificationReducer";
import authReducer from "./authReducer";

const reducers = {
  model: modelReducer,
  notification: notificationReducer,
  auth: authReducer,
};

export default combineReducers(reducers);

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from './productReducer';
import authReducer from './authReducer';

export default combineReducers({
    userReducer,
    productReducer,
    authReducer,
});
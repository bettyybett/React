import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import counterReducer from "./counter/counterSlice";
import userReducer from "./slice/userSlice";


const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    user: userReducer,
  
  });
export default createRootReducer;
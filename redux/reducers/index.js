import { combineReducers } from "redux";
// import authReducer from "./auth.reducer";
import markedDateOrdersReducer from "./markDateOrders.reducer";

const rootReducer = combineReducers({
  // auth: authReducer,
  mdo: markedDateOrdersReducer,
});

export default rootReducer;

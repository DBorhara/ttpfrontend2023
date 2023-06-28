import { combineReducers } from "redux";
import shoeReducer from "./shoes/shoes.reducer";

const rootReducer = combineReducers({
  shoes: shoeReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import CartSlice from "../actions/CartSlice";
import userSlice from "../actions/userSlice";

const rootReducer = combineReducers({
	cartItems: CartSlice,
	auth: userSlice
});
export default rootReducer;

import { createSlice } from "@reduxjs/toolkit";

// Import Data
import Foodsdata from "@data/Foods/FoodsData";
import {
	getItemsWithId,
	getLocalData,
	addWithIdToLocal,
	deleteWithIdFromLocal
} from "@helpers";

const initialState = {
	all: getItemsWithId(getLocalData("foods"), Foodsdata) || []
};

const CartSlice = createSlice({
	name: "cartItems",
	initialState,
	reducers: {
		add(state, action) {
			addWithIdToLocal(action.payload, "foods");
			state.all = getItemsWithId(getLocalData("foods"), Foodsdata);
		},
		remove(state, action) {
			deleteWithIdFromLocal(action.payload, "foods");
			state.all = getItemsWithId(getLocalData("foods"), Foodsdata);
		}
	}
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

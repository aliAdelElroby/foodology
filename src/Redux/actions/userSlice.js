import { createSlice } from "@reduxjs/toolkit";
import { getWithId } from "@helpers";

// Import Users
import users from "@data/Users/Users";

const initialState = {
	check: !!localStorage.getItem("user"),
	data: !!localStorage.getItem("user")
		? getWithId(localStorage.getItem("user"), users)
		: {}
};

const userSlice = createSlice({
	name: "cartItems",
	initialState,
	reducers: {
		login(
			state,
			{ payload: serialize, successFunc = null, errorFunc = null }
		) {
			const result = users.filter(el => {
				return (
					el.email === serialize.email &&
					el.password === serialize.password
				);
			});
			if (result.length) {
				localStorage.setItem("user", result[0].id);
				state.check = true;
				state.data = getWithId(result[0].id, users);
				if (successFunc) {
					successFunc();
				}
			} else {
				if (errorFunc) {
					errorFunc();
				}
			}
		},
		loginWithGoogle(
			state,
			{ payload: response, successFunc = null, errorFunc = null }
		) {
			const result = users.filter(el => {
				return el.email === response.profileObj.email;
			});
			if (result.length) {
				localStorage.setItem("user", result[0].id);
				state.check = true;
				state.data = getWithId(result[0].id, users);
				if (successFunc) {
					successFunc();
				}
			} else {
				if (errorFunc) {
					errorFunc();
				}
			}
		},
		logout(state) {
			if (localStorage.getItem("user")) {
				localStorage.removeItem("user");
				state.check = false;
				state.data = {};
			}
		}
	}
});

export const { login, loginWithGoogle, logout } = userSlice.actions;
export default userSlice.reducer;

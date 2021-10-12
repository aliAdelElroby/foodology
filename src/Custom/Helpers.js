import React, { useState } from "react";

// Import Data
import Foodsdata from "@data/Foods/FoodsData";
import users from "@data/Users/Users";

export function getWithId(id, arr) {
	id = parseInt(id);
	if (arr && Array.isArray(arr) && arr.length > 0) {
		return arr.filter(el => el.id === id)[0];
	} else {
		return false;
	}
}

export function getLocalData(name) {
	name = name.trim();
	return JSON.parse(localStorage.getItem(name));
}

export function getItemsWithId(arrayOfId, arr) {
	const result = [];
	if (arrayOfId && Array.isArray(arrayOfId) && arrayOfId.length > 0) {
		arrayOfId.forEach(id => {
			id = parseInt(id);
			result.push(getWithId(id, arr));
		});
	}
	return result;
}

export function addWithIdToLocal(id, name) {
	id = parseInt(id);
	let localItems = JSON.parse(localStorage.getItem(name.trim())) || [];
	if (localItems.indexOf(id) === -1) {
		localItems.push(id);
		localStorage.setItem(name, JSON.stringify(localItems));
	}
}

export function deleteWithIdFromLocal(id, name) {
	id = parseInt(id);
	let localItems = JSON.parse(localStorage.getItem(name.trim()));
	let localItemsWithoutId = localItems.filter(el => el !== id);
	localStorage.setItem(name, JSON.stringify(localItemsWithoutId));
}

export function setUserInLocal(data) {
	localStorage.setItem("user", data.id);
}

export function isAuth() {
	if (localStorage.getItem("user")) {
		return true;
	} else {
		return false;
	}
}

export function auth() {
	if (localStorage.getItem("user")) {
		const id = localStorage.getItem("user");
		return getWithId(id, users);
	} else {
		return false;
	}
}

export function logout() {
	if (localStorage.getItem("user")) {
		localStorage.removeItem("user");
	}
}

// Contexts
export const FoodsContext = React.createContext();
export const CartContext = React.createContext();
export const UserContext = React.createContext();

function Helpers({ children }) {
	// States
	const [auth, setAuth] = useState({
		// Auth
		update: () => {
			let result = { ...auth };
			setAuth(result);
		},
		check: () => {
			return !!localStorage.getItem("user");
		},
		get: () => {
			if (localStorage.getItem("user")) {
				const id = localStorage.getItem("user");
				return getWithId(id, users);
			} else {
				return "You Are Not Login";
			}
		},
		login: (
			type,
			email,
			pass = null,
			successFunc = null,
			errorFunc = null
		) => {
			let result;
			switch (type) {
				case "plain":
					result = users.filter(el => {
						return el.email === email && el.password === pass;
					});
					if (result.length) {
						localStorage.setItem("user", result[0].id);
						if (successFunc) {
							successFunc();
						}
					} else {
						if (errorFunc) {
							errorFunc();
						}
					}
					break;
				case "google":
					result = users.filter(el => {
						return el.email === email;
					});
					if (result.length) {
						localStorage.setItem("user", result[0].id);
						if (successFunc) {
							successFunc();
						}
					} else {
						if (errorFunc) {
							errorFunc();
						}
					}
					break;
				default:
					return false;
			}
		},
		logout: () => {
			if (localStorage.getItem("user")) {
				localStorage.removeItem("user");
			}
			auth.update();
		}
	});
	const [foods, setFoods] = useState({
		// Foods
		update: () => {
			let result = { ...foods };
			setFoods(result);
		},
		get: () => {
			return Foodsdata || [];
		}
	});
	const [cartItems, setCartItems] = useState({
		// Foods
		update: () => {
			let result = { ...cartItems };
			setCartItems(result);
		},
		get: () => {
			let result = getItemsWithId(getLocalData("foods"), Foodsdata);
			return result || [];
		},
		add: id => {
			addWithIdToLocal(id, "foods");
			cartItems.update();
		},
		clear: () => {
			localStorage.removeItem("foods");
			cartItems.update();
		}
	});

	// Functions
	return (
		<UserContext.Provider value={auth}>
			<FoodsContext.Provider value={foods}>
				<CartContext.Provider value={cartItems}>
					{children}
				</CartContext.Provider>
			</FoodsContext.Provider>
		</UserContext.Provider>
	);
}

export default Helpers;

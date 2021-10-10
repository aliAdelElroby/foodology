// Import Data
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

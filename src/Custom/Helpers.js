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
export function serialize(form) {
	let allElements = Array.from(form.elements);
	let get = allElements.map(el => {
		return `${el.name}=${el.value}`;
	});
	let items = get;
	let result = {
		get: () => {
			return get.join("&");
		}
	};
	items.forEach(el => {
		const key = el.split("=")[0];
		const value = el.split("=")[1];
		result[key] = value;
	});
	return result;
}

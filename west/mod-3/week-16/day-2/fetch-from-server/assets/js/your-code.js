export function getAllDogs() {
	// Your code here
	return fetch("/dogs");
}

export function getDogNumberTwo() {
	// Your code here
	return fetch("/dogs/2");
}

export function postNewDog() {
	// Your code here
	return fetch("/dogs", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			name: "Yakey Poo",
			age: 30,
		}),
	});
}

export function postNewDogV2(name, age) {
	// Your code here
	return fetch("/dogs", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			name, // name: name
			age, // age: age
		}),
	});
}

export function deleteDog(id) {
	// Your code here
	return fetch(`/dogs/${id}/delete`, {
		method: "POST",
		headers: {
			AUTH: "ckyut5wau0000jyv5bsrud90y",
		},
	});
}

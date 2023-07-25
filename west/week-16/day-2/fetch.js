// fetch("https://swapi.dev/api/people/5")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// const getData = async () => {
// 	const res = await fetch("https://swapi.dev/api/films/6/");
// 	const data = await res.json();
// 	console.log(data);
// };

// getData();

fetch("/", {
	method: "POST",
	headers: {
		"Content-Type": "application/x-www-form-urlencoded",
	},
	body: new URLSearchParams({
		key: "value",
	}),
});

fetch("/", {
	method: "DELETE",
});

const payload = {
	name: "yake",
	age: "too dang old",
};

fetch("/", {
	method: "PUT",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(payload),
});

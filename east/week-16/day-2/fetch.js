// fetch("/", {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(data),
// });

// fetch("/people/1", {
// 	method: "DELETE"
// });

// fetch("/people/1")

// const person = fetch("https://swapi.dev/api/people/5")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

const getData = async () => {
	const res = await fetch("https://swapi.dev/api/people/5");
	const data = await res.json();
	console.log(data);
};

getData();

// console.log(person);
// setTimeout(() => {
// 	console.log(person);
// }, 15000);

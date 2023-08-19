const getData = async () => {
	const res = await fetch("https://swapi.dev/api/people/1");
	const data = await res.json();
	console.log(data);
};

// getData();

fetch("https://swapi.dev/api/people/3")
	.then((res) => res.json())
	.then((data) => console.log(data));

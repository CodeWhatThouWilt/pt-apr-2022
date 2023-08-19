export default () => {
	const one = document.getElementById("one");
	const two = document.getElementById("two");
	const three = document.getElementById("three");
	const four = document.getElementById("four");

	one.addEventListener("click", (e) => {
		one.style.backgroundColor = "red";

		setTimeout(() => {
			one.style.backgroundColor = "blue";
		}, 9000);
	});

	two.addEventListener("click", (e) => {
		two.style.backgroundColor = "red";

		setTimeout(() => {
			two.style.backgroundColor = "blue";
		}, 8000);
	});

	three.addEventListener("click", (e) => {
		three.style.backgroundColor = "red";

		setTimeout(() => {
			three.style.backgroundColor = "blue";
		}, 7000);
	});

	four.addEventListener("click", (e) => {
		four.style.backgroundColor = "red";

		setTimeout(() => {
			four.style.backgroundColor = "blue";
		}, 6000);
	});
};

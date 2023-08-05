// Your code here

document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("add");

	button.addEventListener("click", (e) => {
		e.preventDefault();

		const input = document.getElementById("name");
		const select = document.getElementById("type");

		if (input.value !== "") {
			const li = document.createElement("li");
			li.setAttribute("data-type", select.value);
			li.innerText = input.value;

			const ul = document.getElementById("shopping-list");
			ul.appendChild(li);

			input.value = "";
			select.value = "dairy";
		} else {
			console.log("You need to fill in the name!");
		}
	});
});

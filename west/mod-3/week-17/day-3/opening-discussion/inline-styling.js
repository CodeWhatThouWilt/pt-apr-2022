export const addStyling = () => {
	const ul = document.getElementById("students-list");

	ul.style.backgroundColor = "rgba(100, 200, 50, 0.8)";
	ul.style.color = "white";
	ul.style.padding = "10px";

	const h1 = document.querySelector("h1");

	h1.style.fontWeight = "300";

	ul.addEventListener("click", () => {
		if (ul.style.backgroundColor === "blue") {
			ul.style.backgroundColor = "rgba(100, 200, 50, 0.8)";
		} else {
			ul.style.backgroundColor = "blue";
		}
	});
};

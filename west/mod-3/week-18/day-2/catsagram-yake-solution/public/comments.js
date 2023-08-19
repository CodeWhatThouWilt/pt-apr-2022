import { createElement } from "./utilities.js";

export function renderCommentsSection() {
	const section = createElement("section", {}, document.body);

	const form = createElement("form", {}, section);
	form.style.display = "flex";
	form.style.justifyContent = "center";

	const input = createElement(
		"input",
		{
			placeholder: "Add a comment..",
		},
		form
	);
	input.style.height = "30px";
	input.style.borderRadius = "5px 0px 0px 5px";
	input.style.border = "none";
	input.style.backgroundColor = "rgb(235, 235, 235)";
	input.style.paddingLeft = "10px";
	input.style.outline = "none";

	const submitBtn = createElement("button", { innerText: "Submit" }, form);
	submitBtn.style.border = "none";
	submitBtn.style.backgroundColor = "rgb(166, 166, 255)";
	submitBtn.style.borderRadius = "0px 5px 5px 0px";

	const ul = createElement("ul", {}, section);
	ul.style.border = "2px black solid";
	ul.style.height = "270px";
	ul.style.width = "500px";
	ul.style.borderRadius = "5px";
	ul.style.padding = "30px";
	ul.style.listStyle = "none";

	const storageComments = localStorage.getItem("comments");
	if (storageComments) {
		const comments = storageComments.split("; ");
		comments.forEach((comment) => {
			const li = createElement("li", { innerText: comment }, ul);
			styleLi(li);
		});
	}

	submitBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const comment = document.querySelector("input");
		const ul = document.querySelector("ul");
		const li = createElement("li", { innerText: comment.value }, ul);
		styleLi(li);
		const currComments = localStorage.getItem("comments");
		if (currComments) {
			localStorage.setItem("comments", currComments + "; " + comment.value);
		} else {
			localStorage.setItem("comments", comment.value);
		}
		comment.value = "";
	});
}

function styleLi(li) {
	li.style.margin = "5px 0px 5px 0px";
	li.style.padding = "5px 0px 5px 20px";
	li.style.borderBottom = "1px solid black";
}

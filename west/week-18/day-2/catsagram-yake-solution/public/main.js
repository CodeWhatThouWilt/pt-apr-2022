import { createElement } from "./utilities.js";

export async function renderImageSection() {
	const imageSection = createElement("section", {}, document.body);

	const catUrl = localStorage.getItem("cat") || (await getCat());

	const catImg = createElement("img", { src: catUrl }, imageSection);
}

export async function newImage() {
	const section = createElement("section", {}, document.body);
	section.style.marginTop = "10px";
	section.style.marginBottom = "10px";

	const button = createElement(
		"button",
		{
			innerText: "Next",
			id: "next-btn",
			className: "vote-btn",
		},
		section
	);

	button.addEventListener("click", async () => {
		const catUrl = await getCat();

		const img = document.querySelector("img");
		img.src = catUrl;

		const votes = document.getElementById("vote-num");
		localStorage.setItem("votes", 0);
		votes.innerText = 0;

		const comments = document.querySelector("ul");
		comments.innerHTML = "";
	});
}

async function getCat() {
	const res = await fetch("https://api.thecatapi.com/v1/images/search");
	const [data] = await res.json();
	localStorage.setItem("cat", data.url);
	return data.url;
}

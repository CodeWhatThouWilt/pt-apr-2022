import { renderCommentsSection } from "./comments.js";
import { renderLikeSection } from "./likes.js";
import { renderImageSection, newImage } from "./main.js";
import { createElement } from "./utilities.js";

window.onload = async () => {
	const header = createElement("header", {}, document.body);
	const h1 = createElement("h1", { innerText: "Catstagram" }, header);

	await renderImageSection();
	renderLikeSection();
	newImage();
	renderCommentsSection();
};

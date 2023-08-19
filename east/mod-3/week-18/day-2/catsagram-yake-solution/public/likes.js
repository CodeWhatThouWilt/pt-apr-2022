import { createElement } from "./utilities.js";

export function renderLikeSection() {
	const likeSection = createElement("section", {}, document.body);
	likeSection.style.display = "flex";
	likeSection.style.gap = "20px";
	likeSection.style.marginTop = "20px";

	const likeButton = createElement(
		"button",
		{
			innerText: "UPVOTE",
			className: "vote-btn",
			id: "like",
		},
		likeSection
	);

	const voteNum = createElement(
		"div",
		{
			innerText: localStorage.getItem("votes") || 0,
			id: "vote-num",
		},
		likeSection
	);

	const dislikeButton = createElement(
		"button",
		{
			innerText: "DOWNVOTE",
			className: "vote-btn",
			id: "dislike",
		},
		likeSection
	);

	likeSection.addEventListener("click", (e) => {
		if (e.target.innerText === "UPVOTE") {
			voteNum.innerText++;
		} else if (e.target.innerText === "DOWNVOTE") {
			if (voteNum.innerText > 0) voteNum.innerText--;
		}
		localStorage.setItem("votes", voteNum.innerText);
	});
}

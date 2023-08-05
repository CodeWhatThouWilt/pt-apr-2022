// Your code here

window.onload = async () => {
	const header = document.createElement("header");
	document.body.appendChild(header);

	const h1 = document.createElement("h1");
	h1.innerText = "Catstagram";

	header.appendChild(h1);

	await renderImageSection();
	renderLikeSection();
	newImage();
	renderCommentsSection();
};

function renderCommentsSection() {
	const section = document.createElement("section");
	document.body.appendChild(section);

	const form = document.createElement("form");
	section.appendChild(form);

	const input = document.createElement("input");
	form.appendChild(input);
	input.setAttribute("placeholder", "Add a comment..");

	const submitBtn = document.createElement("button");
	submitBtn.innerText = "Submit";
	form.appendChild(submitBtn);

	const ul = document.createElement("ul");
	section.appendChild(ul);

	submitBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const comment = document.querySelector("input");

		const li = document.createElement("li");
		li.innerText = comment.value;

		const ul = document.querySelector("ul");
		ul.appendChild(li);
	});
}

function renderLikeSection() {
	const likeSection = document.createElement("section");
	likeSection.style.display = "flex";
	likeSection.style.gap = "20px";
	likeSection.style.marginTop = "20px";

	document.body.appendChild(likeSection);

	const likeButton = document.createElement("button");
	likeButton.innerText = "UPVOTE";
	likeSection.appendChild(likeButton);
	likeButton.classList.add("vote-btn");
	likeButton.id = "like";

	const voteNum = document.createElement("div");
	voteNum.innerText = 0;
	likeSection.appendChild(voteNum);
	voteNum.id = "vote-num";

	const dislikeButton = document.createElement("button");
	dislikeButton.innerText = "DOWNVOTE";
	likeSection.appendChild(dislikeButton);
	dislikeButton.classList.add("vote-btn");
	dislikeButton.id = "dislike";

	likeSection.addEventListener("click", (e) => {
		if (e.target.innerText === "UPVOTE") {
			voteNum.innerText++;
		} else if (e.target.innerText === "DOWNVOTE") {
			if (voteNum.innerText > 0) voteNum.innerText--;
		}
	});
}

async function renderImageSection() {
	const imageSection = document.createElement("section");

	document.body.appendChild(imageSection);

	const cat = await getCat();

	const catImg = document.createElement("img");
	catImg.setAttribute("src", cat.url);

	imageSection.appendChild(catImg);
}

async function getCat() {
	const res = await fetch("https://api.thecatapi.com/v1/images/search");
	const [data] = await res.json();
	return data;
}

async function newImage() {
	const section = document.createElement("section");
	document.body.appendChild(section);
	section.style.marginTop = "10px";
	section.style.marginBottom = "10px";

	const button = document.createElement("button");
	button.innerText = "Next";
	button.id = "next-btn";
	button.classList.add("vote-btn");
	section.appendChild(button);

	button.addEventListener("click", async () => {
		const cat = await getCat();

		const img = document.querySelector("img");
		img.src = cat.url;

		const votes = document.getElementById("vote-num");
		votes.innerText = 0;
	});
}

window.addEventListener("DOMContentLoaded", () => {
	// Problem One
	const btnOne = document.getElementById("make-circle-blue");
	btnOne.addEventListener("click", (e) => {
		const div = document.getElementById("blue-border-circle");
		div.classList.add("blue-fill");
	});

	// Problem Two
	const checkboxTwo = document.getElementById("will-not-check");
	checkboxTwo.addEventListener("click", (e) => e.preventDefault());

	// Problem Three
	const bananaBtn = document.getElementById("change-bananas-status");
	bananaBtn.addEventListener("click", (e) => {
		const div = document.getElementById("bananas-div");
		div.innerHTML = "No Bananas Today!";

		const img = document.createElement("img");
		// img.src = "./images/no-bananas.png";
		img.setAttribute("src", "./images/no-bananas.png");

		const bananaImg = document.getElementById("bananas-image-div");
		if (bananaImg.children.length === 0) bananaImg.appendChild(img);
	});

	// Problem Four
	const cookieBtn = document.getElementById("store-cookie");
	const cookieInput = document.getElementById("fav-cookie");
	const cookie = document.cookie;
	if (cookie) {
		const val = cookie.split("=")[1];
		cookieInput.value = val;
	}

	cookieBtn.addEventListener("click", (e) => {
		const val = cookieInput.value;
		document.cookie = `favCookie=${val}`;
	});

	// Problem Five
	const pieList = document.querySelector(".pie-list");
	const pieInput = document.getElementById("pie-type");
	const submitPie = document.getElementById("save-pie");
	submitPie.addEventListener("click", (e) => {
		const pieType = pieInput.value;

		if (!pieType) return;

		const li = document.createElement("li");
		li.innerText = pieType;

		pieList.appendChild(li);
	});

	// Problem Six
	const iceCreamInput = document.getElementById("fav-ice-cream");
	const savedIceCream = localStorage.getItem("ice-cream");
	if (savedIceCream) iceCreamInput.value = savedIceCream;
	const iceCreamBtn = document.getElementById("save-ice-cream");
	iceCreamBtn.addEventListener("click", (e) => {
		const val = iceCreamInput.value;
		localStorage.setItem("ice-cream", val);
	});

	// Problem Seven
	const fruitStorage = document.getElementById("fruit-storage");
	const fruitCount = document.getElementById("total-fruit");
	fruitCount.innerText = 0;

	const appleBtn = document.getElementById("add-apple");
	appleBtn.addEventListener("click", (e) => {
		const div = document.createElement("div");
		div.innerText = "A";
		fruitCount.innerText = parseInt(fruitCount.innerText) + 1;

		fruitStorage.appendChild(div);
	});

	const orangeBtn = document.getElementById("add-orange");
	orangeBtn.addEventListener("click", (e) => {
		const div = document.createElement("div");
		div.innerText = "O";
		fruitCount.innerText = parseInt(fruitCount.innerText) + 1;

		fruitStorage.appendChild(div);
	});

	const emptyBtn = document.getElementById("reset-basket");
	emptyBtn.addEventListener("click", (e) => {
		fruitStorage.innerHTML = "";
		fruitCount.innerText = 0;
	});

	// Problem 8
	const bubblesBtn = document.getElementById("bubble-maker");
	bubblesBtn.addEventListener("click", (e) => e.stopPropagation());

	// Problem Nine
	const fetchBtn = document.getElementById("dictionary-fetch");
	fetchBtn.addEventListener("click", async (e) => {
		const res = await fetch(
			"https://api.dictionaryapi.dev/api/v2/entries/en/dictionary"
		);
		const [data] = await res.json();
		const word = data.word;
		const definition = data.meanings[0].definitions[0].definition;

		const resultsArea = document.getElementById("results-area");
		const ul = document.createElement("ul");

		resultsArea.appendChild(ul);

		const wordLi = document.createElement("li");
		wordLi.innerText = `Word: ${word}`;
		ul.appendChild(wordLi);

		const definitionLi = document.createElement("li");
		definitionLi.innerText = `Definition: ${definition}`;
		ul.appendChild(definitionLi);
	});

	// function createElement(tag, options = {}, parent) {
	// 	const el = document.createElement(tag);
	// 	Object.assign(el, options);
	// 	parent.appendChild(el);
	// 	return el;
	// }

	// const li = createElement("li", { id: "Sup" }, document.body);
});

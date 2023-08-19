/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
	try {
		const res = await fetch("https://dog.ceo/api/breeds/image/random");
		const data = await res.json();

		const url = data.message; // URL of new dog image

		/*--------------- Get breed (Hint: Parse from URL) ---------------- */
		// Your code here
		const breed = url.split("/")[4];

		/*------------ Create new dog card with the url above ------------- */
		/* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
		// Your code here
		const li = document.createElement("li");

		const figure = document.createElement("figure");
		li.appendChild(figure);

		const img = document.createElement("img");
		img.src = url;

		const figCap = document.createElement("figcaption");
		figCap.innerText = breed;

		figure.append(img, figCap);

		/* Add the new dog card as a child to the ul in the .gallery element */
		// Your code here
		const ul = document.querySelector("ul");
		ul.appendChild(li);
	} catch (e) {
		console.log("Couldn't fetch dog :(");
	}
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
	try {
		/*-------------------- Select the first dog card --------------------- */
		// Your code here
		// const doomedDog = document.querySelector("li");
		const doomedDog = document.getElementsByTagName("li")[0];
		/*-------------------- Remove the first dog card --------------------- */
		// Your code here
		doomedDog.remove();
	} catch (error) {
		console.log("There are no dogs to remove!");
	}
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
	/*-------------------- Select the last dog card ----------------------- */
	// Your code here
	const dogsLi = document.getElementsByTagName("li");
	const doomedDog = dogsLi[dogsLi.length - 1];
	/*-------------------- Remove the last dog card ----------------------- */
	// Your code here
	doomedDog.remove();
});

// const ul = document.querySelector("ul");

// const targetUl = (e) => {
// 	if (e.target === ul) {
// 		console.log("YOU JUST CLICKED THE UL!");
// 	} else {
// 		ul.style.backgroundColor = "red";
// 		setTimeout(() => {
// 			ul.style.backgroundColor = "white";
// 		}, 1000);
// 	}
// };

// document.addEventListener("click", targetUl);

// document.removeEventListener("click", targetUl);

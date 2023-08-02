const select = () => {
	/* Write queries for each of the following */

	// Get element by their ID
	// document.getElementById("one");

	// Get elements by their class name
	// document.getElementsByClassName("className");

	// Get elements by their tag
	// document.getElementsByTagName("span");

	// Select the first matching element using CSS selectors
	// document.querySelector(".seed");

	// Select all matching elements using CSS selectors
	// document.querySelectorAll("*");

	/* Section 1 */
	// 1. Get all seeded fruit elements
	// Your code here
	const seeded = document.getElementsByClassName("seed");
	// const seeded = document.querySelectorAll(".seed");
	console.log(seeded);
	// seeded[0].innerText = "Apples used to be here in the list";

	// 2. Get all seedless fruit elements
	// Your code here
	const seedless = document.querySelectorAll(".seedless");
	// console.log(seedless);
	seedless.forEach((el) => (el.innerText = "Oops"));

	// 3. Get first seedless fruit element
	// Your code here
	// const firstSeedless = seedless[0];
	const firstSeedless = document.querySelector(".seedless");
	console.log(firstSeedless);

	/* Section 2 */
	// 4. Get inner span with text "you"
	// Your code here
	// const youSpan = document.querySelector("span");
	const idTwo = document.getElementById("two");
	const twoChildren = idTwo.children;
	const wrapper = twoChildren[1];
	console.log(wrapper);
	const para = wrapper.children[0];
	const paraChildren = para.children;
	const youSpan = paraChildren[0];
	console.log(youSpan);

	// 5. Get all children of element "wrapper"
	// Your code here
	const wrapperChildren = document.getElementById("wrapper").children;

	// 6. Get all odd number list items in the list
	// Your code here
	const oddNumber = document.getElementsByClassName("odd");

	// 7. Get all even number list items in the list
	// Your code here
	const evenNumbers = document.querySelectorAll("ol li:not(.odd)");

	/* Section 3 */
	// 8. Get all tech companies without a class name
	// Your code here
	const sectionThree = document.getElementById("three");
	const google = sectionThree.querySelector("p a");

	// 9. Get "Amazon" list element
	// Your code here
	const sectionThreePara = sectionThree.children[1];
	const amazon = sectionThreePara.children[2];

	// 10. Get all unicorn list elements (not the image element)
	// Your code here
	const unicornEls = document.querySelectorAll("#three ul li");
};

window.onload = select;

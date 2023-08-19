const addAttributes = () => {
	const students = [
		"Yake",
		"Yakey Poo",
		"Yake Von Yakenshtein",
		"Annoying Yake",
	];

	// const studentLi = students.reduce((acc, student) => {
	// 	acc += `<li class="class-name-here">${student}</li>`;
	// 	return acc;
	// }, "");

	let studentLi = "";
	students.forEach((student) => (studentLi += `<li>${student}</li>`));

	// const ul = document.querySelector("ul");
	const ul = document.getElementById("students-list");
	ul.innerHTML = studentLi;
	// ul.innerHTML = ""; // removes everything inside the ul
};

export default addAttributes;

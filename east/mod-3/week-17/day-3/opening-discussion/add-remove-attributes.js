const addStudents = () => {
	const students = [
		"Yake",
		"Yakey Poo",
		"Yake Von Yakenshtein",
		"Annoying Yake",
	];

	const ul = document.getElementById("students-list");
	console.log(ul);

	const liStr = students.reduce((acc, student) => {
		acc += `<li class="here-is-a-class">${student}</li>`;
		return acc;
	}, "");

	ul.innerHTML = liStr;

	const listItems = ul.getElementsByTagName("li");
	console.log(listItems);
	console.log(ul.children);
	console.log(ul.childNodes);
};

export default addStudents;

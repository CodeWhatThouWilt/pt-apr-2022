export default () => {
	const bodyChildElements = document.body.children; // HTMLCollection [div]
	console.log(bodyChildElements);

	const div = bodyChildElements[0];
	console.log(div);

	const divChildElements = div.children; // HTMLCollection [span]
	console.log(divChildElements);

	const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
	console.log("DIV INNER TEXT", helloWorld);
	const span = divChildElements[0]; // <span>Yes!</span>
	console.log("SPAN INNER TEXT", span.innerText);
	// debugger
};

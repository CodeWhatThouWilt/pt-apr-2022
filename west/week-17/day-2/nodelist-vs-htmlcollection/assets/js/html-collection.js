export default () => {
	const bodyChildElements = document.body.children; // HTMLCollection [div]
	console.log(bodyChildElements);

	const div = bodyChildElements[0];
	console.log("DIV:", div);

	const divChildElements = div.children; // HTMLCollection [span]
	console.log("Div children: ", divChildElements);
	const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
	console.log(helloWorld);
	const span = divChildElements[0]; // <span>Yes!</span>
	console.log(span);
	// debugger
};

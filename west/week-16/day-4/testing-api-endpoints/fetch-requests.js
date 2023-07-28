/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============================== Phase 1 ================================ */
/*
  Make a request with fetch request to GET /posts and print the response
  components to the console.
*/

// Your code here

/* =============================== Phase 2 ================================ */
/*
  Make a request with fetch request to POST /posts and print the response
  components to the console.
*/

// Your code here
fetch("/posts", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		message: "This is our message. Lets goooooooo",
	}),
})
	.then((res) => res.json()) // res.json() gets the json body and converts to JS
	.then((data) => console.log(data));

(async function () {
	const res = await fetch("/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			message: "This is our message value",
		}),
	});

	const data = await res.json();
	console.log(data);
})();

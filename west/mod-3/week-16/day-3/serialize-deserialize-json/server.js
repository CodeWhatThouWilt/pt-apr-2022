const http = require("http");

const server = http.createServer((req, res) => {
	console.log(`${req.method} ${req.url}`);

	let reqBody = "";
	req.on("data", (data) => {
		reqBody += data;
	});

	req.on("end", () => {
		// Parse the body of the request as JSON if Content-Type header is
		// application/json
		const contentType = req.headers["content-type"];

		if (reqBody && contentType === "application/json") {
			// console.log(reqBody);
			// console.log(typeof reqBody);
			req.body = JSON.parse(reqBody);
			// console.log(req.body);
			// console.log(typeof req.body);
		}
		// Parse the body of the request as x-www-form-urlencoded if Content-Type
		// header is x-www-form-urlencoded
		if (reqBody && contentType === "application/x-www-form-urlencoded") {
			req.body = reqBody
				.split("&")
				.map((keyValuePair) => keyValuePair.split("="))
				.map(([key, value]) => [key, value.replace(/\+/g, " ")])
				.map(([key, value]) => [key, decodeURIComponent(value)])
				.reduce((acc, [key, value]) => {
					acc[key] = value;
					return acc;
				}, {});
		}
		// Log the body of the request to the terminal
		console.log(req.body);

		const resBody = {
			Hello: "World!",
		};

		// Return the `resBody` object as JSON in the body of the response
		const resJson = JSON.stringify(resBody);

		res.statusCode = 200;
		res.setHeader("Content-Type", "application/json");

		return res.end(resJson);
	});
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));

// fetch("/", {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify({
// 		hey: "Dood",
// 	}),
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

const http = require("http");

const dogs = [
	{
		dogId: 1,
		name: "Fluffy",
		age: 2,
	},
];

let nextDogId = 2;

function getNewDogId() {
	const newDogId = nextDogId;
	nextDogId++;
	return newDogId;
}

const server = http.createServer((req, res) => {
	console.log(`${req.method} ${req.url}`);

	// assemble the request body
	let reqBody = "";
	req.on("data", (data) => {
		reqBody += data;
	});

	req.on("end", () => {
		// request is finished assembly the entire request body
		// Parsing the body of the request depending on the Content-Type header
		if (reqBody) {
			switch (req.headers["content-type"]) {
				case "application/json":
					req.body = JSON.parse(reqBody);
					break;
				case "application/x-www-form-urlencoded":
					req.body = reqBody
						.split("&")
						.map((keyValuePair) => keyValuePair.split("="))
						.map(([key, value]) => [key, value.replace(/\+/g, " ")])
						.map(([key, value]) => [key, decodeURIComponent(value)])
						.reduce((acc, [key, value]) => {
							acc[key] = value;
							return acc;
						}, {});
					break;
				default:
					break;
			}
			console.log(req.body);
		}

		/* ======================== ROUTE HANDLERS ======================== */

		// GET /dogs
		if (req.method === "GET" && req.url === "/dogs") {
			// Your code here
			const jsonDogs = JSON.stringify(dogs);

			res.statusCode = 200;
			res.setHeader("Content-Type", "application/json");

			return res.end(jsonDogs);
		}

		// GET /dogs/:dogId
		if (req.method === "GET" && req.url.startsWith("/dogs/")) {
			const urlParts = req.url.split("/"); // ['', 'dogs', '1']
			if (urlParts.length === 3) {
				const dogId = urlParts[2];
				// Your code here
				const currDog = dogs.find((dog) => dog.dogId === parseInt(dogId));
				if (currDog) {
					const jsonDog = JSON.stringify(currDog);

					res.statusCode = 200;
					res.setHeader("Content-Type", "application/json");

					return res.end(jsonDog);
				}
			}
		}

		// POST /dogs
		if (req.method === "POST" && req.url === "/dogs") {
			const { name, age } = req.body;
			// Your code here

			const newDog = {
				dogId: getNewDogId(),
				name, // name: name
				age, // age: age
			};

			dogs.push(newDog);

			const jsonDog = JSON.stringify(newDog);

			res.statusCode = 201;
			res.setHeader("Content-Type", "application/json");

			return res.end(jsonDog);
		}

		// PUT or PATCH /dogs/:dogId
		if (
			(req.method === "PUT" || req.method === "PATCH") &&
			req.url.startsWith("/dogs/")
		) {
			const urlParts = req.url.split("/");
			if (urlParts.length === 3) {
				const dogId = urlParts[2];
				// Your code here
				const { name, age } = req.body;

				const currDog = dogs.find((dog) => dog.dogId === parseInt(dogId));

				if (currDog) {
					console.log("CURRENT DOG:", currDog);
					// currDog.name = name || currDog.name;
					// currDog.age = age || currDog.age;

					if (name) currDog.name = name;
					if (age) currDog.age = age;

					// currDog.name = name ? name : currDog.name;
					// currDog.age = age ? age : currDog.age;

					const jsonDog = JSON.stringify(currDog);

					res.statusCode = 200;
					res.setHeader("Content-Type", "application/json");

					return res.end(jsonDog);
				}
			}
		}

		// DELETE /dogs/:dogId
		if (req.method === "DELETE" && req.url.startsWith("/dogs/")) {
			const urlParts = req.url.split("/");
			if (urlParts.length === 3) {
				const dogId = urlParts[2];
				// Your code here
				const doomedDogIndex = dogs.findIndex(
					(dog) => dog.dogId === parseInt(dogId)
				);
				dogs.splice(doomedDogIndex, 1);

				res.statusCode = 200;
				res.setHeader("Content-Type", "application/json");

				const message = JSON.stringify({ message: "Successfully deleted" });

				return res.end(message);
			}
		}

		// No matching endpoint
		res.statusCode = 404;
		res.setHeader("Content-Type", "application/json");
		return res.end("Endpoint not found");
	});
});

if (require.main === module) {
	const port = 8000;
	server.listen(port, () => console.log("Server is listening on port", port));
} else {
	module.exports = server;
}

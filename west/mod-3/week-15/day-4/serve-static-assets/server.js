const http = require("http");
const fs = require("fs");

const contentTypes = {
	html: "text/html",
	css: "text/css",
	jpg: "image/jpeg",
	jpeg: "image/jpeg",
};

const server = http.createServer((req, res) => {
	// Your code here

	if (req.url.startsWith("/static")) {
		const splitUrl = req.url.split("/");

		const directory = splitUrl[2];
		const fileName = splitUrl[3];
		const extension = fileName.split(".")[1];

		const staticFile = fs.readFileSync(`./assets/${directory}/${fileName}`);

		res.statusCode = 200;
		res.setHeader("Content-Type", contentTypes[extension]);

		return res.end(staticFile);
	}

	const htmlFile = fs.readFileSync("./index.html");

	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");

	return res.end(htmlFile);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));

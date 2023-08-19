const http = require("http");
const fs = require("fs");

const contentType = {
	html: "text/html",
	css: "text/css",
	jpg: "image/jpeg",
	jpeg: "image/jpeg",
};

const server = http.createServer((req, res) => {
	// Your code here

	if (req.url.startsWith("/static")) {
		const splitUrl = req.url.split("/");
		console.log("split url:", splitUrl);

		const type = splitUrl[2];
		const fileName = splitUrl[3];
		const extension = splitUrl[3].split(".")[1];

		const file = fs.readFileSync(`./assets/${type}/${fileName}`);

		res.statusCode = 200;
		res.setHeader("Content-Type", contentType[extension]);

		return res.end(file);
	}

	const htmlFile = fs.readFileSync("./index.html", "utf-8");

	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");

	return res.end(htmlFile);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));

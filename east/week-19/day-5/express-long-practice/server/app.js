// Method One
const express = require("express");
const app = express();

// Method Two
// const app = require("express")();

require("dotenv").config();

// console.log(process.env.NODE_ENV);

require("express-async-errors");

// The package is wrapping all of our routes with a function that
// probably looks something like this:
// const asyncWrapper = (cb) => (req, res, next) => {
//   Promise.resolve(cb(req, res, next)).catch(next);
// }

// app.get("/async-route", asyncWrapper(async (req, res) => {

// }))

app.use(express.json());
app.use("/static", express.static("assets"));

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

const dogRouter = require("./routes/dogs.js");
app.use("/dogs", dogRouter);

// For testing purposes, GET /
app.get("/", (req, res) => {
	res.json(
		"Express server running. No content provided at root level. Please use another route."
	);
});

// For testing express.json middleware
app.post("/test-json", (req, res, next) => {
	// send the body as JSON with a Content-Type header of "application/json"
	// finishes the response, res.end()
	res.json(req.body);
	next();
});

// For testing express-async-errors
app.get("/test-error", async (req, res) => {
	throw new Error("Hello World!");
});

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.statusCode = 404;
	error.message = "This resource could not be found";
	next(error);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is listening on port", port));

const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("GET / This is the root URL");
});

app.use((req, res, next) => {
	const err = new Error();
	err.message = "Sorry, the requested resource couldn't be found";
	err.statusCode = 404;
	next(err);
});

app.use((error, req, res, next) => {
	const retObj = {
		message: error.message || "Server Error",
		statusCode: error.statusCode || 500,
	};

	res.status(retObj.statusCode).json(retObj);
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));

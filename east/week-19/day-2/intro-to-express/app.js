const express = require("express");

const app = express();

app.get("/", (req, res) => {
	return res.send("Hello world!");
});

const port = 5000;

app.listen(port, () => `Listening on port ${port}...`);

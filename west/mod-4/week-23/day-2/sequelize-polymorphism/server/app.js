// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require("dotenv").config();
const { Image } = require("./db/models");
// Express using json - DO NOT MODIFY
app.use(express.json());

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
	res.json({
		message: "API server is running",
	});
});

app.get("/images/:imageId", async (req, res) => {
	const { imageId } = req.params;

	const image = await Image.findByPk(imageId);
	const associated = await image.getImageable();

	return res.json(associated);
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
	const port = 8000;
	app.listen(port, () => console.log("Server is listening on port", port));
} else {
	module.exports = app;
}

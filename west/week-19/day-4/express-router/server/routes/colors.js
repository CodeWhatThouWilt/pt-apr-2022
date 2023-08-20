const router = require("express").Router();

router.get("/", (res, res) => {
	return res.json("GET /colors");
});

router.get("/:name", (req, res) => {
	return res.json("GET /colors/:name");
});

module.exports = router;

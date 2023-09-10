const express = require("express");
const router = express.Router();

const { Player, Fan } = require("../db/models");

router.get("/:fanId/drafts", async (req, res) => {
	const players = await Player.findAll({
		include: {
			model: Fan,
			where: {
				id: req.params.fanId,
			},
		},
	});

	return res.json(players);
});

router.delete("/:fanId", async (req, res) => {
	const doomedFan = await Fan.findByPk(req.params.fanId);

	await doomedFan.destroy();

	return res.json({ message: "Success" });
});

module.exports = router;

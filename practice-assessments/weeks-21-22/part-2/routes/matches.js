const express = require("express");
const router = express.Router();

const { Match, Team } = require("../db/models");

// BONUS
router.get("/:id", async (req, res) => {
	const match = await Match.findByPk(req.params.id, {
		include: [
			{
				model: Team,
				as: "HomeTeam",
			},
			{
				model: Team,
				as: "AwayTeam",
			},
			{
				model: Team,
				as: "Winner",
			},
		],
	});

	return res.json(match);
});

module.exports = router;

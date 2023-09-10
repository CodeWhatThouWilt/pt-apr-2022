const express = require("express");
const router = express.Router();

const { Team, Player, Sport } = require("../db/models");

router.post("/:id/players", async (req, res) => {
	const { firstName, lastName, number, isRetired } = req.body;

	// const newPlayer = await Player.create({
	// 	firstName,
	// 	lastName,
	// 	number,
	// 	isRetired,
	// 	currentTeamId: parseInt(req.params.id),
	// });

	const currTeam = await Team.findByPk(req.params.id);

	const newPlayer = await currTeam.createTeamRoster({
		firstName,
		lastName,
		number,
		isRetired,
	});

	return res.json(newPlayer);
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;

	const team = await Team.findByPk(id, {
		include: [
			{
				model: Player,
				as: "TeamRoster",
			},
			{
				model: Sport,
			},
		],
	});

	return res.json(team);
	// { TeamRoster: [] }
});

router.get("/", async (req, res) => {
	const teams = await Team.findAll({
		order: [
			["homeCity", "ASC"],
			["name", "DESC"],
		],
	});

	return res.json(teams);
});

module.exports = router;

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Match extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Match.belongsTo(models.Team, {
				foreignKey: "homeTeamId",
				as: "HomeTeam",
			});
			Match.belongsTo(models.Team, {
				foreignKey: "awayTeamId",
				as: "AwayTeam",
			});
			Match.belongsTo(models.Team, {
				foreignKey: "winnerId",
				as: "Winner",
			});
		}
	}
	Match.init(
		{
			homeTeamId: DataTypes.INTEGER,
			awayTeamId: DataTypes.INTEGER,
			winnerId: DataTypes.INTEGER,
			matchDate: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Match",
		}
	);
	return Match;
};

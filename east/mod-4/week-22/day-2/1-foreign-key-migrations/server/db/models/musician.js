"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Musician extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// Your code here
			// Model.prototype.belongsTo() - Used for the child in a one to many relationship
			// Model.prototype.hasMany() - Used for the parent in a one to many relationship
			// Model.prototype.hasOne() - Used for each model in a one to one relationship
			// Model.prototype.belongsToMany() - Used for each model (except the join) in a many to many relationship
			Musician.belongsTo(models.Band, {
				foreignKey: "bandId",
			});

			Musician.belongsToMany(models.Instrument, {
				through: "MusicianInstrument",
			});
		}
	}
	Musician.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			bandId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Musician",
		}
	);
	return Musician;
};

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
			// Model.prototype.hasOne(); - Used on both models for one to one relationships
			// Model.prototype.hasMany(); - Used on the parent model in a one to many relationship
			// Model.prototype.belongsTo(); - Used on the child model in a one to many relationship
			// Model.prototype.belongsToMany(); - Used on both models (excluding the join table) for many to many relationships
			Musician.belongsTo(models.Band, { foreignKey: "bandId" });
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

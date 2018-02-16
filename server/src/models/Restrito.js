module.exports = (sequelize, DataTypes) => {
	const Restrito = sequelize.define('Restrito', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING
		},
		text: DataTypes.STRING
	})

	Restrito.associate = function (models) {
	}

	return Restrito
}

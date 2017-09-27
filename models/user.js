module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('user', {
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			age: DataTypes.INTEGER
		},
		{
			timestamps: false
		}
	)
}
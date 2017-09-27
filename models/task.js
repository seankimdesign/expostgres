module.exports = (sequelize, DataTypes)=>{
	return sequelize.define('user', {
			name: DataTypes.STRING,
			status: DataTypes.ENUM('notstarted','inprogress','finished'),
			user: DataTypes.INTEGER
		},
		{
			timestamps: false
		}
	)
}
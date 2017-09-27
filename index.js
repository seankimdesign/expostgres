const Sequelize = require("sequelize")
const fs = require('fs')
const { promisify } = require('util')

;(async function() {

	const readFile = promisify(fs.readFile)
	const databaseUrl = await readFile('databaseurl.txt', 'utf-8')

	const sequelize = new Sequelize(databaseUrl)

	const User = sequelize.import(__dirname + "/models/user")
	const Task = sequelize.import(__dirname + "/models/task")

	const kids = await User.findAll({
		where: {
			age:{
				$lt: 21
			}
		},
		order: sequelize.col('age')
	})

	kids.map((kid)=>{
		console.log(' >',kid.dataValues.name)
	})

	process.exit()

})()
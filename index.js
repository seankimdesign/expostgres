const Sequelize = require("sequelize")
const fs = require('fs')
const { promisify } = require('util')

;(async function() {

	const readFile = promisify(fs.readFile)
	const databaseUrl = await readFile('databaseurl.txt', 'utf-8')

	const sequelize = new Sequelize(databaseUrl)

	const Test = sequelize.define('test', {
		id :{
			type: Sequelize.DataTypes.INTEGER,
			primaryKey: true
		},
		num: {
			type: Sequelize.DataTypes.INTEGER
		},
		data: {
			type: Sequelize.DataTypes.STRING
		}
	},
		{
			timestamps: false
		}
	)

	const testAll = await Test.findAll()
	const values = testAll.map((entry)=> entry.dataValues).sort((a,b)=> a.num - b.num)
	values.map((value)=>{
		console.log(`${value.num}: ${value.data}`)
	})
	process.exit()
})()
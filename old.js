const Sequelize = require("sequelize")
const fs = require('fs')
const { promisify } = require('util')

;(async function() {

	const readFile = promisify(fs.readFile)
	const databaseUrl = await readFile('databaseurl.txt', 'utf-8')

	const sequelize = new Sequelize(databaseUrl)

	const Test = sequelize.define('test', {
		num: {
			type: Sequelize.DataTypes.INTEGER,
			defaultValue: 999
		},
		data: {
			type: Sequelize.DataTypes.STRING
		}
	},
		{
			timestamps: false
		}
	)

	const randomNumber = Math.floor(Math.random()*1000)

	const newTest = await Test
		.build({
			num: randomNumber,
			data: "random - node.js insertion test"
		})
		.save()

	console.log(newTest.dataValues)

	const testAll = await Test.findAll()
	const values = testAll.map((entry)=> entry.dataValues).sort((a,b)=> a.num - b.num)
	values.map((value)=>{
		console.log(`${value.num}: ${value.data}`)
	})

	const testSome = await Test.findAll()


	process.exit()

})()
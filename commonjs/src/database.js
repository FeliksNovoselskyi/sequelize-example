const Sequelize = require("sequelize")
const path = require("path")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'testdb.db')
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = sequelize.define('User', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
})

db.sequelize.sync()
    .then(() => {
        console.log('Database created successfully')
    })
    .catch((error) => {
        console.log('Error during creating database:', error)
    })

module.exports = db
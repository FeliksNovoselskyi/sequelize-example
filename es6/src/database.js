import { Sequelize, DataTypes } from 'sequelize'
import {fileURLToPath} from 'url'
import {dirname, join} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const sequelize = new Sequelize('testtb', 'admin', '123456', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: join(__dirname, 'testdb.db')
})

export const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
})

sequelize.sync()
    .then(() => {
        console.log('Database created successfully')
    })
    .catch((error) => {
        console.log('Error during creating database:', error)
    })
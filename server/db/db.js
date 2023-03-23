const Sequelize = require('sequelize')
const pkg = require('../../package.json')

// const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const databaseName = "cuteBabyAnimalsDB"

const db = new Sequelize(
  process.env.HEROKU_POSTGRESQL_PURPLE_URL || `postgres://localhost:5432/${databaseName}`,
  {
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)
module.exports = db

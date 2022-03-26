const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbMysqlUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbMsqlPort}/${config.dbName}`

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql'
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
	ssl: {
	    require: true,
	    rejectUnauthorized: false
	}
    }
  },
}

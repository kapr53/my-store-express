const {Sequelize} = require('sequelize')
const {config} = require('../config/config');
const setUpModels = require('../db/models');
const {development, developmentMysql, production} = require('../db/config')

const options = {
     dialect: 'postges',
     loggin: config.isProd ? false : true,
};

if (config.isProd) {
    options.ssl = false
    options.dialectOptions = {
	ssl: {
	    require: true,
	    rejectUnauthorized: false
    	}
    }
}

const sequelize = new Sequelize(config.dbUrl, options);

setUpModels(sequelize);

// sequelize.sync();

module.exports = sequelize;

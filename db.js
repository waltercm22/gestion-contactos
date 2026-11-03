const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'contactsdb',
  process.env.DB_USER || 'api',
  process.env.DB_PASS || 'api123',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false
  }
);

module.exports = sequelize;
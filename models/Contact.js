const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Contact = sequelize.define('Contact', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
  phone: { type: DataTypes.STRING }
}, {
  tableName: 'contacts'
});

module.exports = Contact;
const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Class = sequelize.define('Class', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  openDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false,
  paranoid: true,
  logging: false
});

// Class.hasMany(Student);

module.exports = Class;
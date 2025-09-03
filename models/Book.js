const sequelize = require('./db')
const { DataTypes } = require('sequelize')

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgurl: {
    type: DataTypes.STRING,
  },
  pubishDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  paranoid: true,
  logging: false
})

module.exports = Book
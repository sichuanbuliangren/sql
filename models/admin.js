const { DataTypes } = require("sequelize")
const sequelize = require("./db")
// 创建一个模型对象
const Admin = sequelize.define('Admin', {
  loginId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  createdAt: false,
  updatedAt: false,
  paranoid: true, // 启用假删除，该表的数据不会真正的删除而是增加一列deletedAt
  logging: false
});

module.exports = Admin
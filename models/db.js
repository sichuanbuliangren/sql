const { Sequelize } = require('sequelize')

// 方法 3: 分别传递参数 (其它数据库)
const sequelize = new Sequelize({
  database: 'myschooldb',
  username: 'root',
  password: '@sz2507',
  host: 'localhost',
  // 选择一种支持的数据库:
  // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
  dialect: 'mysql'
})

module.exports = sequelize
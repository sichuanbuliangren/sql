const mysql = require("mysql2");

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@sz2507",
  database: "companydb",
  multipleStatements: true // 允许执行多条语句
});

// connection.end();
// 查询
connection.query('SELECT * FROM `company`',
  function(err, results, fileds) {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    console.log("Query results:", results, fileds);
  }
)

// 插入
// connection.query(
//   "insert into company (id, name, location, buildDate) values (4, 'didi', '杭州', curdate())",
//   (err, result) => {
//     console.log(result);
//   }
// )

// 更新
// connection.query(
//   "update company set name = 'didi', location = '深圳' where id = 4",
//   (err, result) => {
//     console.log(result);
//   }
// )

// 删除
// connection.query(
//   "delete from company where id = 4",
//   (err, result) => {
//     console.log(result);
//   }
// )
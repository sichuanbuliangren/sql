const mysql = require("mysql2/promise");

// 创建连接池
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "@sz2507",
    database: "companydb",
    multipleStatements: true // 允许执行多条语句
  });

async function test(id){
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "@sz2507",
  //   database: "companydb",
  //   multipleStatements: true // 允许执行多条语句
  // });
  // 创建一个数据库连接
  const sql = `select * from employee where \`name\` like concat('%', ?, '%')`;
  const [result] = await pool.execute(sql, [id]);
  console.log(result);
  // connection.end();
}

test('a');
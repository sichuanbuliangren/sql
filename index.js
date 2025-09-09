// const sequelize = require('./models/sync.js');

// (async function () {
//   try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
// })();

// 增加 1
// const Admin = require('./models/Admin');
// // 同步方法，构建一个模型实例
// const ins = Admin.build({
//   loginId: 'admin',
//   loginPwd: 'admin123'
// })

// ins.loginId = 'bcd'
// ins.save().then(()=>{
//   console.log('新建管理员成功');
// })

// 增加 2
// Admin.create({
//   loginId: 'admin2',
//   loginPwd: 'admin123',
// }).then((ins)=>{
//   console.log(ins.id, ins.loginId, ins.loginPwd);
// })

// const adminServ = require('./services/adminService')
// adminServ.addAdmin({
//   loginId: 'abc123',
//   loginPwd: 'abc123',
//   name:'耶耶耶'
// })

// adminServ.deleteAdmin(1);

// adminServ.updateAdmin(2, { name: '嘟嘟嘟' }).then((r) => {
//   console.log('更新成功', r)
// })

// const bookServ = require('./services/BookService')
// bookServ.addBook({
//   name: '红楼梦',
//   pubishDate: '2024-01-01',
//   author: '曹雪芹',
// });

// bookServ.deleteBook(3);

// bookServ.updateBook({ name: '水浒传', author: '施耐庵', id: 2 })

// const classServ = require('./services/classService')
// classServ.addClass({
//   name: '软件工程',
//   openDate: '2024-09-01',
// })

// classServ.deleteClass(1)

// classServ.updateClass({ id: 2, name: '网络空间安全' })

// const studentServ = require('./services/studentService')
// studentServ.addStudent({
//   name: '张三',
//   classId: 1,
//   sex: 1,
//   birthday: '2000-01-01',
//   mobile:'13800138000'
// })

// studentServ.updateStudent({ id: 1, name: '李四', mobile: '13900139000' })

// studentServ.deleteStudent(1)

require('./models/relation')
require('./mock/mockStudent')
const Student = require('../models/Student');

exports.addStudent = async function (studentObj) {
  const ins = await Student.create(studentObj);

  return ins.toJSON();
}

exports.deleteStudent = async function (studentId) {
  await Student.destroy({
    where:{id: studentId}
  })
}

exports.updateStudent = async function (studentObj) {
  await Student.update(studentObj, {
    where: { id: studentObj.id }
  })
}
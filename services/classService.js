const Class = require('../models/class');

exports.addClass = async function (classObj) {
  const ins = await Class.create(classObj);

  return ins.toJSON();
}

exports.deleteClass = async function (classId) {
  await Class.destroy({
    where:{id: classId}
  })
}

exports.updateClass = async function (classObj) {
  await Class.update(classObj, {
    where: { id: classObj.id }
  })
}
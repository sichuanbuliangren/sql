const Book = require('../models/Book')

exports.addBook = async function (bookId) {
  const ins = await Book.create(bookId)

  return ins.toJSON()
}

exports.deleteBook = async function (bookId) {
  // const ins = await Book.findByPk(bookId);

  // if (ins){
  //   await ins.destroy();
  // }

  await Book.destroy({
    where: { id: bookId }
  })
}

exports.updateBook = async function (bookObj) {
  // const ins = await Book.findByPk(bookObj.id);

  // if (ins){
  //   ins.name = bookObj.name;
  //   ins.author = bookObj.author;
  //   // 保存
  //   ins.save();
  // }

  await Book.update(bookObj, {
    where: { id: bookObj.id }
  })
}

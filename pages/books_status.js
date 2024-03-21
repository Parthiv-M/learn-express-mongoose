let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = async function(res) {
  const books = await BookInstance.find({ status: "Available" }).populate("book");
  let bookInstances = books.map((book) => book.book.title + " - " + book.status)
  return res.send(bookInstances);
}
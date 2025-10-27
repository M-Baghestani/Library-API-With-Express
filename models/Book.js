const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	name: { type: String, required: true },
	author: { type: String, required: true },
	free: { type: String, default: "Yes" },
});

const Book = mongoose.model("books", bookSchema);
module.exports = Book;

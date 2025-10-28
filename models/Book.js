const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	publisher: { type: String, required: true },
	isbn: { type: Number, required: true },
	category: { type: String, required: true },
	year: { type: Number, required: true },
	copies: { type: Number, required: true },
	available_copies: { type: Number },
	free: { type: String, default: "Yes" },
});

const Book = mongoose.model("books", bookSchema);
module.exports = Book;

const Book = require("../models/Book");
const check = require("../validators/bookValidators");

exports.getBooks = async (req, res) => {
	const books = await Book.find();
	res.status(201).json(books);
};

exports.getBookById = async (req, res) => {
	try {
		const bookInfo = await Book.findById({ _id: req.params.id }, "-_id");
		if (!bookInfo)
			return res.status(404).json({ message: "The Book Not Found!" });
		res.json(bookInfo);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.deleteBook = async (req, res) => {
	await Book.findByIdAndDelete(req.params.id);
	res.json({ message: "User Has Been Successfully Deleted!" });
};

exports.updateBook = async (req, res) => {
	const bookId = req.params.id;
	const updates = req.body;

	const allowedFields = ["name", "author", "free"];
	const filteredUpdates = {};

	for (const key of allowedFields) {
		if (updates[key] !== undefined) {
			filteredUpdates[key] = updates[key];
		}
	}
	const book = await Book.findByIdAndUpdate(bookId, filteredUpdates, {
		new: true,
		runValidators: true,
	});

	if (!book) {
		return res.status(404).json({ message: "Book Not Found" });
	}
	res.status(200).json({
		message: "Book Updated Successfully",
		book,
	});
};

exports.addBook = async (req, res) => {
	const result = check(req.body);
	if (result !== true) return res.status(400).json(result);
	try {
		const book = new Book(req.body);
		await book.save();
		res.status(201).json({ message: "Book Has Been Successfully Added" });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

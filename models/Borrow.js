const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
	book_id: { type: Number, required: true },
	member_id: { type: Number, required: true },
	borrow_date: { type: String, required: true },
	due_date: { type: String, required: true },
	return_date: { type: String, default: "0" },
	status: { type: String, required: true },
});

const Borrow = mongoose.model("borrows", borrowSchema);
module.exports = Borrow;

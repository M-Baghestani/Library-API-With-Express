const Borrow = require("../models/Borrow");
const check = require("../validators/borrowValidators");

exports.getBorrows = async (req, res) => {
	const borrows = await Borrow.find();
	res.status(201).json(borrows);
};

exports.getBorrowsById = async (req, res) => {
	try {
		const borrowInfo = await Borrow.findById({ _id: req.params.id });
		if (!borrowInfo)
			return res.status(404).json({ message: "The User Not Found" });

		res.json(borrowInfo);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.deleteBorrow = async (req, res) => {
	await Borrow.findByIdAndDelete(req.params.id);
	res.json({ message: "User Has Been Successfully" });
};

exports.updateBorrow = async (req, res) => {
	const borrowId = req.params.id;
	const updates = req.body;

	const allowedFields = ["return_date", "status"];
	const filteredUpdates = {};

	for (const key of allowedFields) {
		if (updates[key] !== undefined) {
			filteredUpdates[key] = updates[key];
		}
	}
	const borrow = await Borrow.findByIdAndUpdate(borrowId, filteredUpdates, {
		new: true,
		runValidators: true,
	});
	if (!borrow) {
		return res.status(404).json({ message: "Book Not Found" });
	}
	res.status(200).json({
		message: "Book Updated Successfully",
		borrow,
	});
};

exports.addBorrow = async (req, res) => {
	const result = check(req.body);
	if (result !== true) return res.status(400).json(result);
	try {
		const borrow = new Borrow(req.body);
		await borrow.save();
		res.status(201).json({ message: "Borrow Has Been Successfully Added!" });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const User = require("../models/User");
const check = require("../validators/userValidator");

exports.createUser = async (req, res) => {
	const result = check(req.body);
	if (result !== true) return res.status(400).json(result);
	try {
		const user = new User(req.body);
		await user.save();
		res.status(201).json({ message: "User Has Been Successfully Created!" });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.getUsers = async (req, res) => {
	const users = await User.find();
	res.status(201).json(users);
};

exports.getUserById = async (req, res) => {
	try {
		const userInfo = await User.findById(req.params.id);
		if (!userInfo) return res.status(404).json({ message: "User Not Found!" });
		res.json(userInfo);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.deleteUser = async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.json({ message: "User Has Been Successfully Deleted!" });
};

exports.updateUser = async (req, res) => {
	const userId = req.params.id;
	const updates = req.body;

	const allowedFields = ["name", "username", "email", "password"];
	const filteredUpdates = {};

	for (const key of allowedFields) {
		if (updates[key] !== undefined) {
			filteredUpdates[key] = updates[key];
		}
	}

	const user = await User.findByIdAndUpdate(userId, filteredUpdates, {
		new: true,
		runValidators: true,
	});

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}
	res.status(200).json({
		message: "User updated successfully",
		user,
	});
};

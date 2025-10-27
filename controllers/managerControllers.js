const User = require("../models/User");

exports.updateUser = async (req, res) => {
	const userId = req.params.id;
	const updates = req.body;

	const allowedFields = ["role"];

	const filteredUpdates = {};

	for (const key of allowedFields) {
		if (updates[key] !== undefined) {
			filteredUpdates[key] = updates[key];
		}
	}
	const manager = await User.findByIdAndUpdate(userId, filteredUpdates, {
		new: true,
		runValidators: true,
	});
	if (!manager) {
		return res.status(404).json({ message: "User Not Found!" });
	}
	res.status(200).json({
		message: "User Has Been Successfully Updated!",
		manager,
	});
};

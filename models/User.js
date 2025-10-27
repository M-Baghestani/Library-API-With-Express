const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, minLength: 8 },
	role: { type: String, default: "GUEST" },
});

const User = mongoose.model("users", userSchema);
module.exports = User;

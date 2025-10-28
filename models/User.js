const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	phone: { type: String, required: true },
	membership_date: { type: Date, required: true },
	is_active: { type: Boolean, required: true },
	password: { type: String, minLength: 8 },
	role: { type: String, default: "GUEST" },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
